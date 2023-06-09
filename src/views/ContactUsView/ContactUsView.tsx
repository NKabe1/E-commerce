import { useRef, useState, MutableRefObject } from "react";
import emailjs from "@emailjs/browser";
import { SuccessModal } from "@src/components/SuccessModal";
import { SContactUsView } from "./SContactUsView.styled";

export default function ContactUsView() {
  const form: MutableRefObject<HTMLFormElement | null> = useRef(null);
  const [feedbackValues, setFeedbackValues] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

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
          <h2 className="title">Contact Us</h2>
          <p className="sub-title">
            Got a question? Want to send feedback? Need delivery details? Let us
            know.
          </p>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="form-section">
              <label className="label">Your email*</label>
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
              <label className="label">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={feedbackValues.subject}
                className="input-subject"
                placeholder="Let us know how we can help you"
                required
                onChange={handleChange}
              />
            </div>
            <div className="msg-section form-section">
              <label className="label">Your message</label>
              <textarea
                id="message"
                name="message"
                value={feedbackValues.message}
                rows={6 as number}
                className="input-message"
                placeholder="Leave a comment..."
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send message
            </button>
          </form>
        </div>
      </SContactUsView>
      <SuccessModal showModal={showModal}>Your email is sent!</SuccessModal>
    </div>
  );
}
