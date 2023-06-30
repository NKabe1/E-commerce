import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { public_axios } from "@src/utils/public_axios";
import { TLocalStorage } from "@src/types/localstorage";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext/AuthContext";
import { SSection, SForm, SDiv } from "./SLoginView.styled";
import { FormattedMessage } from "react-intl";

type TLoginInputs = {
  email: string;
  password: string;
};

export default function LoginView() {
  const { setStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginInputs>();
  async function onSubmit(data: TLoginInputs) {
    try {
      const resp = await public_axios.post("/auth/signin", data);
      // if accessToken is received, only then can user to login
      if (resp.data.accessToken) {
        localStorage.setItem(TLocalStorage.ACCESSTOKEN, resp.data.accessToken);
        setStatus(TAuthorizationStage.AUTHORIZED);
        navigate("/");
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
            <h1>
              <FormattedMessage id="sign_in_header" />
            </h1>
            <SForm onSubmit={handleSubmit(onSubmit)} action="#">
              <div>
                <label>
                  <FormattedMessage id="your_email" />
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="login-email"
                  placeholder="name@eshop.ge"
                />
              </div>
              <div>
                <label>
                  <FormattedMessage id="password" />
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="login-password"
                  placeholder="••••••••"
                />
                {(errors.password || errors.email) && (
                  <p className="error-msg">
                    <span className="font-medium">
                      <FormattedMessage id="error" />{" "}
                    </span>{" "}
                    <FormattedMessage id="request_text" />
                  </p>
                )}
              </div>
              {errors?.root && (
                <p className="error-msg">
                  <span className="font-medium">
                    <FormattedMessage id="error" />{" "}
                  </span>{" "}
                  <FormattedMessage id="incorrect" />
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
                    <label>
                      <FormattedMessage id="remember_me" />
                    </label>
                  </div>
                </div>
                <a href="#">
                  <FormattedMessage id="forgot_pass" />
                </a>
              </SDiv>

              <button type="submit">
                <FormattedMessage id="sign_in" />
              </button>
              <p>
                <FormattedMessage id="not_having_account" />{" "}
                <Link to="/auth-register" className="link">
                  <FormattedMessage id="sign_up" />
                </Link>
              </p>
            </SForm>
          </div>
        </div>
      </div>
    </SSection>
  );
}
