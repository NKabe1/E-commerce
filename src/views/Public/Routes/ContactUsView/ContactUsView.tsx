import { useRef, useState, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import { SuccessModal } from "@src/components/SuccessModal";
import { SContactUsView } from "./SContactUsView.styled";
import { FormattedMessage, useIntl } from "react-intl";

export default function ContactUsView() {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [feedbackValues, setFeedbackValues] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const {formatMessage} = useIntl();

  const handleChange = (event: any) => {
    const value = event.target.value;
    const fieldName = event.target.name;
    setFeedbackValues((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const sendEmail = (event: any) => {
    event.preventDefault();
    var formParams = feedbackValues;

    emailjs
      .send(
        "service_q1bmg1d", // service-id
        "template_hcyfrf4", // template-id
        formParams,
        "AkZYPto6WiUL9Cxko" // public-key
      )
      .then(
        function () {
          handleShowModal();
        },
        function (error) {
          alert("Oops... " + JSON.stringify(error));
        }
      );

    setFeedbackValues({ email: "", subject: "", message: "" });
  };

  return (
    <div>
      <SContactUsView>
        <div className="main-div">
          <h2 className="title"><FormattedMessage id="contact_us"/></h2>
          <p className="sub-title">
            <FormattedMessage id="question_title"/>
          </p>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-section">
              <label className="label"><FormattedMessage id="email"/></label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={feedbackValues.email}
                className="input-email"
                placeholder="name@eshop.ge"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-section">
              <label className="label"><FormattedMessage id="subject"/></label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={feedbackValues.subject}
                className="input-subject"
                placeholder={formatMessage({id: "contact_us_placeholder"})}
                required
                onChange={handleChange}
              />
            </div>
            <div className="msg-section form-section">
              <label className="label"><FormattedMessage id="your_message"/></label>
              <textarea
                id="message"
                name="message"
                value={feedbackValues.message}
                rows={6 as number}
                className="input-message"
                placeholder={formatMessage({id: "comment_placeholder"})}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              <FormattedMessage id="send_message"/>
            </button>
          </form>
        </div>
      </SContactUsView>
      <SuccessModal showModal={showModal}><FormattedMessage id="message_sent"/></SuccessModal>
    </div>
  );
}
