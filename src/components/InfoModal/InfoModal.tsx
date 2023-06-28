import { ReactNode, useRef } from "react";
import { FormattedMessage } from "react-intl";
import { useOnClickOutside } from "@src/hooks/useOnClickOutside";
import { SInfoModal } from "./SInfoModal.styled";

type InfoModalProps = {
  showModal: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function InfoModal({ showModal, onClose, children }: InfoModalProps) {
  const infoModalRef = useRef(null);
  useOnClickOutside(infoModalRef, onClose);
  return (
    <div>
      {showModal ? (
        <SInfoModal>
          <div ref={infoModalRef} className="modal-wrapper">
            <div className="modal-window">
              <button type="button" className="close-btn" onClick={onClose}>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="content">
                <svg
                  aria-hidden="true"
                  className="info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="info-text">{children}</h3>
                <button
                  onClick={onClose}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="ok-btn"
                >
                  <FormattedMessage id="ok" />
                </button>
              </div>
            </div>
          </div>
        </SInfoModal>
      ) : null}
    </div>
  );
}
