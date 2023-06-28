import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext";
import { Button } from "@src/components/Button";
import { FiLogOut } from "react-icons/fi";
import { TLocalStorage } from "@src/types/localstorage";
import { SuccessModal } from "@src/components/SuccessModal";
import { private_axios } from "@src/utils/private_axios";
import { FormattedMessage, useIntl } from "react-intl";
import { SAdminView } from "./SAdminView.styled";

type TCreateProductInputs = {
  title: string;
  description: string;
  price: number;
  category: string;
};

export default function AdminView() {
  const { setStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    price: 0,
    category: "",
  });
  const { formatMessage } = useIntl();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TCreateProductInputs>();

  const handleChangeInput = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setInputValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  async function onSubmit(data: any) {
    //console.log(data, "data");
    //console.log(typeof data.price);

    const resp = await private_axios.post("/products", {
      ...data,
      price: Number(data.price),
    });
    handleShowModal();
    setTimeout(() => {
      navigate("/products");
    }, 3000);
    setInputValues({
      title: "",
      description: "",
      price: 0,
      category: "",
    });
    //console.log(resp.data, "resp");
    //console.log(resp.config);
  }

  const handleLogout = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
    navigate("/auth-login");
  };

  return (
    <div>
      <SAdminView>
        <div className="logout">
          <Button onClick={handleLogout}>
            <FiLogOut />
            <FormattedMessage id="logout" />
          </Button>
        </div>
        <div className="wrapper">
          <div className="content">
            <div className="body">
              <h1 className="title">
                <FormattedMessage id="create_product" />
              </h1>
              <form
                className="form"
                onSubmit={handleSubmit(onSubmit)}
                action="#"
              >
                <div>
                  <label className="label">
                    <FormattedMessage id="product_title" />
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    id="title"
                    name="title"
                    value={inputValues.title}
                    className="input"
                    placeholder={formatMessage({ id: "product_title" })}
                    required
                    onChange={handleChangeInput}
                  />
                </div>

                <div>
                  <label className="label">
                    <FormattedMessage id="product_description" />
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    rows={3}
                    name="description"
                    value={inputValues.description}
                    id="description"
                    placeholder={formatMessage({ id: "product_description" })}
                    className="input"
                    required
                    onChange={handleChangeInput}
                  />
                </div>

                <div>
                  <label className="label">
                    <FormattedMessage id="product_price" />
                  </label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    name="price"
                    value={inputValues.price}
                    id="price"
                    placeholder="0"
                    className="input"
                    required
                    onChange={handleChangeInput}
                  />
                </div>

                <div>
                  <label className="label">
                    <FormattedMessage id="product_category" />
                  </label>
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    name="category"
                    value={inputValues.category}
                    id="category"
                    placeholder={formatMessage({ id: "product_category" })}
                    className="input"
                    required
                    onChange={handleChangeInput}
                  />
                </div>

                {/* <div>
                  <label className="label">
                    Product picture
                  </label>
                  <input
                    type="file"
                    name="picture"
                    id="picture"
                    placeholder="Product picture"
                    className="input cursor-pointer"
                    required
                  />
                </div> */}

                <button type="submit" className="btn">
                  <FormattedMessage id="create" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </SAdminView>
      <SuccessModal showModal={showModal}>
        <FormattedMessage id="product_added" />
      </SuccessModal>
    </div>
  );
}
