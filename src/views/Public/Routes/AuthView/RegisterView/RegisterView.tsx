import { useState } from "react";
import { useForm } from "react-hook-form";
import { public_axios } from "@src/utils/public_axios";
import { Link, useNavigate } from "react-router-dom";
import { SSection, SForm } from "./SRegisterView.styled";
import { FormattedMessage } from "react-intl";
import { SuccessModal } from "@src/components/SuccessModal";

type TRegisterInputs = {
  username: string;
  email: string;
  password: string;
  role: "USER";
};

export default function RegisterView() {
  const [created, setCreated] = useState<boolean>(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<TRegisterInputs>();

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  async function onSubmit(data: TRegisterInputs) {
    console.log(data);
    try {
      const resp = await public_axios.post("/auth/signup", {
        ...data,
        role: "USER",
      });
      // if user was created
      if (resp.data?.id) {
        setCreated(true);
        setTimeout(() => {
          navigate("/auth-login");
        }, 2500);
      }
      handleShowModal();
    } catch (error: any) {
      setError("root", { message: error.response.data.errors?.[0].msg });
    }
  }

  return (
    <>
      <SSection>
        <div>
          <div>
            <div>
              <h1>
                <FormattedMessage id="create_account" />
              </h1>
              <SForm onSubmit={handleSubmit(onSubmit)} action="#">
                <div>
                  <label>
                    <FormattedMessage id="user_name" />
                  </label>
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
                    <span className="font-medium">
                      <FormattedMessage id="error" />{" "}
                    </span>{" "}
                    <FormattedMessage id="user_name_required" />
                  </p>
                )}
                <div>
                  <label>
                    <FormattedMessage id="your_email" />
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@eshop.ge"
                  />
                  {errors.email && (
                    <p className="error-msg">
                      <span className="font-medium">
                        <FormattedMessage id="error" />{" "}
                      </span>{" "}
                      <FormattedMessage id="email_required" />
                    </p>
                  )}
                </div>
                <div>
                  <label>
                    <FormattedMessage id="password" />
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <p className="error-msg">
                      <span className="font-medium">
                        <FormattedMessage id="error" />{" "}
                      </span>{" "}
                      <FormattedMessage id="password_required" />
                    </p>
                  )}
                </div>
                {errors?.root && (
                  <p className="text-sm text-red-600">
                    <span className="font-medium">
                      <FormattedMessage id="error" />{" "}
                    </span>
                    {errors.root.message}
                  </p>
                )}
                <div className="terms-n-conditions">
                  <div>
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                    />
                  </div>
                  <div className="div-text">
                    <label>
                      <FormattedMessage id="accept" />{" "}
                      <a href="#">
                        <FormattedMessage id="terms_conditions" />
                      </a>
                    </label>
                  </div>
                </div>
                <button type="submit">
                  <FormattedMessage id="create_account" />
                </button>
                {created && (
                  <p className="success-msg">
                    <span className="font-medium">
                      <FormattedMessage id="account_created" />
                    </span>
                    !
                  </p>
                )}
                <p className="login">
                  <FormattedMessage id="having_account" />{" "}
                  <Link to="/auth-login" className="link">
                    <FormattedMessage id="login" />
                  </Link>
                </p>
              </SForm>
            </div>
          </div>
        </div>
      </SSection>
      <SuccessModal showModal={showModal}><FormattedMessage id="user_created"/></SuccessModal>
    </>
  );
}
