import { ReactNode } from "react";
import { SSuccessModal } from "./SSuccessModal.styled";
import { FormattedMessage } from "react-intl";

type SuccessModalProps = {
  showModal: boolean;
  children: ReactNode;
};

export function SuccessModal({ showModal, children }: SuccessModalProps) {
  return (
    <>
      {showModal ? (
        <SSuccessModal>
          <div className="content">
            <div className="tick">
              <svg
                className="tick_icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 className="text-main"><FormattedMessage id="success"/></h3>
            <div className="text-info">
              <p className="message">{children}</p>
            </div>
          </div>
        </SSuccessModal>
      ) : null}
    </>
  );
}
