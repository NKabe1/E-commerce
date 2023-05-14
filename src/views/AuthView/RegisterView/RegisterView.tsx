import { useState } from "react";
import { useForm } from "react-hook-form";
import { public_axios } from "@src/utils/public_axios";
import { Link } from "react-router-dom";
import { SSection, SForm } from "./SRegisterView.styled";

type TRegisterInputs = {
  username: string;
  email: string;
  password: string;
};

export default function RegisterView() {
  const [created, setCreated] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<TRegisterInputs>();
  // const onSubmit: SubmitHandler<TRegisterInputs> = data => console.log(data);
  async function onSubmit(data: TRegisterInputs) {
    try {
      //აქ backend-ის api ლინკის მიხედვით უნდა გადაეწოდოს შესაბამისი ლინკი
      const resp = await public_axios.post("/auth/signup", data);
      if (resp.data?.id) {
        //console.log(data);
        setCreated(true);
      }
      // ამ if ფუნქციით, თუ მომხმარებელი წარმატებით გაივლის ავტორიზაციას, გადაყავს ავტომატურად დალოგინების ფეიჯზე, მაგისთვის დაგვჭირდა useNavigate-ის შემოიმპორტება
    } catch (error: any) {
      // აქ backend-ს ვნახავ, როგორ წამოვა და ეს კოდი გაამართლებს თუ არა
      setError("root", { message: error.response.data.errors?.[0].msg });
    }
  }
  return (
    <SSection>
      <div>
        <div>
          <div>
            <h1>Create an account</h1>
            <SForm onSubmit={handleSubmit(onSubmit)} action="#">
              <div>
                <label>Your username</label>
                <input
                  {...register("username", { required: true })}
                  type="username"
                  name="username"
                  id="username"
                  placeholder="username"
                />
              </div>
              {errors.username && (
                <p className="error-msg">
                  <span className="font-medium">Error: </span> Username is
                  required
                </p>
              )}
              <div>
                <label>Your email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                />
                {errors.email && (
                  <p className="error-msg">
                    <span className="font-medium">Error: </span> Email is
                    required
                  </p>
                )}
              </div>
              <div>
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="error-msg">
                    <span className="font-medium">Error: </span> Password is
                    required
                  </p>
                )}
              </div>
              {errors?.root && (
                <p className="error-msg">
                  <span className="font-medium">Error: </span>
                  {errors.root.message}
                </p>
              )}
              <div className="terms-n-conditions">
                <div>
                  <input id="terms" aria-describedby="terms" type="checkbox" />
                </div>
                <div className="div-text">
                  <label>
                    I accept the <a href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button type="submit">Create an account</button>
              {created && (
                <p className="success-msg">
                  <span className="font-medium">
                    Account created successfully
                  </span>
                  !
                </p>
              )}
              <p className="login">
                Already have an account?{" "}
                <Link to="/auth-login" className="link">
                  Login here
                </Link>
              </p>
            </SForm>
          </div>
        </div>
      </div>
    </SSection>
  );
}
