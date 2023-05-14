import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { public_axios } from "@src/utils/public_axios";
import { TLocalStorage } from "@src/types/localstorage";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext";
import { SSection, SForm, SDiv } from "./SLoginView.styled";

type TLoginInputs = {
  email: string;
  password: string;
};

export default function LoginView() {
  const { setStatus } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginInputs>();
  async function onSubmit(data: TLoginInputs) {
    try {
      // ეს ბექის ენდ ფოინთია, ანუ სადაც ვგზავნით
      const resp = await public_axios.post("/auth/signin", data);
      // ანუ accessToken-ს თუ იღებს front, მხოლოდ მაშინ მოხდება დალოგინება
      if (resp.data.accessToken) {
        localStorage.setItem(TLocalStorage.ACCESSTOKEN, resp.data.accessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
      }
    } catch (error: any) {
      setError("root", { message: "Email or password is incorrect" });
    }
  }
  return (
    <SSection>
      <div>
        <div>
          <div>
            <h1>Sign in to your account</h1>
            <SForm onSubmit={handleSubmit(onSubmit)} action="#">
              <div>
                <label>Your email</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="••••••••"
                />
                {(errors.password || errors.email) && (
                  <p className="error-msg">
                    <span className="font-medium">Error: </span> Email and
                    password is required
                  </p>
                )}
              </div>
              {errors?.root && (
                <p className="error-msg">
                  <span className="font-medium">Error: </span> Email or password
                  is incorrect
                </p>
              )}
              <SDiv>
                <div>
                  <div>
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                    />
                  </div>
                  <div className="label-div">
                    <label>Remember me</label>
                  </div>
                </div>
                <a href="#">Forgot password?</a>
              </SDiv>

              <button type="submit">Sign in</button>
              <p>
                Don't have an account yet?{" "}
                <Link to="/auth-register" className="link">
                  Sign up
                </Link>
              </p>
            </SForm>
          </div>
        </div>
      </div>
    </SSection>
  );
}
