import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { SuccessModal } from "@src/components/SuccessModal";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { SCheckoutView } from "./SCheckoutView.styled";

export default function CheckoutView() {
  const { cartItems, setCartItems } = useContext(CartModalContext);
  const [paymentValues, setPaymentValues] = useState({
    email: "",
    cardHolder: "",
    cardNumber: "",
    cardExpireDate: "",
    cvc: "",
    address: "",
    zip: "",
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setPaymentValues((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleCardNumberValidate = (event: any) => {
    const input = event.target.value;
    const formattedInput = input
      .replace(/[^\d]/g, "") // remove non-digit characters
      .replace(/(.{4})/g, "$1 ") // insert space after every 4 characters
      .trim(); // remove leading/trailing spaces

    setPaymentValues((prev) => ({ ...prev, cardNumber: formattedInput }));
  };

  const handleCardNumberChange = (event: any) => {
    handleInputChange(event);
    handleCardNumberValidate(event);
  };

  const handleCardDateValidate = (event: any) => {
    const input = event.target.value;
    let formattedInput = input.replace(/[^\d]/g, ""); // remove non-digit characters

    if (formattedInput.length > 2) {
      formattedInput =
        formattedInput.slice(0, 2) + "/" + formattedInput.slice(2);
    }

    setPaymentValues((prev) => ({ ...prev, cardExpireDate: formattedInput }));
  };

  const handleCardDateChange = (event: any) => {
    handleInputChange(event);
    handleCardDateValidate(event);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handlePayment = (event: any) => {
    event.preventDefault();
    handleShowModal();
    setPaymentValues({
      email: "",
      cardHolder: "",
      cardNumber: "",
      cardExpireDate: "",
      cvc: "",
      address: "",
      zip: "",
    });
    setCartItems([]);
    setTimeout(() => {
      navigate("/");
    }, 3000);
    scrollToTop();
  };

  return (
    <SCheckoutView>
      <div className="checkout-wrapper">
        <div className="logo-div">
          <div className="logo-wrapper">
            <i className="logo">
              <MdPayments />
            </i>
          </div>
        </div>
        <div className="header">
          <h1 className="title">
            <FormattedMessage id="payment_info" />
          </h1>
          <p className="sub-title">
            <FormattedMessage id="complete_order" />
          </p>
        </div>
        <div className="img-div">
          <img
            src="https:leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            className="img"
          />
        </div>
        <form onSubmit={handlePayment}>
          <label className="label">
            <FormattedMessage id="email" />
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={paymentValues.email}
              className="input-common input-w-icon"
              placeholder="name@eshop.ge"
              required
              onChange={handleInputChange}
            />
            <div className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
          </div>
          <label className="label">
            <FormattedMessage id="card_holder" />
          </label>
          <div className="relative">
            <input
              type="text"
              id="card-holder"
              name="cardHolder"
              value={paymentValues.cardHolder}
              className="input-common input-w-icon uppercase"
              placeholder={formatMessage({ id: "full_name" })}
              required
              onChange={handleInputChange}
            />
            <div className="input-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                />
              </svg>
            </div>
          </div>
          <label className="label">
            <FormattedMessage id="card_details" />
          </label>
          <div className="flex">
            <div className="relative w-7/12 flex-shrink-0">
              <input
                type="text"
                pattern="[0-9]{4}( [0-9]{4}){3}"
                maxLength={19}
                id="card-no"
                name="cardNumber"
                value={paymentValues.cardNumber}
                className="input-common input-w-icon"
                placeholder="xxxx xxxx xxxx xxxx"
                required
                onChange={handleCardNumberChange}
              />
              <div className="input-icon">
                <svg
                  className="h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              pattern="[0-1]{1}[0-9]{1}/[0-9]{2}"
              maxLength={5}
              name="cardExpireDate"
              value={paymentValues.cardExpireDate}
              className="input-common w-full"
              placeholder="MM/YY"
              required
              onChange={handleCardDateChange}
            />
            <input
              type="text"
              pattern="[0-9]{3}"
              maxLength={3}
              name="cvc"
              value={paymentValues.cvc}
              className="input-common input-cvc"
              placeholder="CVC"
              required
              onChange={handleInputChange}
            />
          </div>
          <label className="label">
            <FormattedMessage id="billing_address" />
          </label>
          <div className="flex flex-col sm:flex-row">
            <div className="relative flex-shrink-0 sm:w-10/12">
              <input
                type="text"
                id="billing-address"
                name="address"
                value={paymentValues.address}
                className="input-common input-w-icon"
                placeholder={formatMessage({ id: "street_address" })}
                required
                onChange={handleInputChange}
              />
              <div className="input-icon">
                <img
                  className="h-4 w-4 object-contain"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  alt=""
                />
              </div>
            </div>
            <input
              type="text"
              name="zip"
              value={paymentValues.zip}
              className="input-common sm:w-1/6"
              placeholder="ZIP"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-md font-medium text-gray-900">
              <FormattedMessage id="total_items" />
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {cartItems.length > 0 && (
                <div className="flex items-center">
                  {cartItems.reduce((total, cartItem) => {
                    return total + cartItem.quantity;
                  }, 0)}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="text-md font-medium text-gray-900">
              <FormattedMessage id="total_price" />
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {cartItems.length > 0 && (
                <div className="flex items-center">
                  <BsCurrencyDollar />
                  {cartItems.reduce((total, cartItem) => {
                    return total + cartItem.price * cartItem.quantity;
                  }, 0)}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pb-16 px-6 py-3 w-full">
            <button type="submit" className="btn">
              <FormattedMessage id="pay_now" />
            </button>
          </div>
        </form>
      </div>
      <SuccessModal showModal={showModal}>
        <FormattedMessage id="payment_completed" />
      </SuccessModal>
    </SCheckoutView>
  );
}
