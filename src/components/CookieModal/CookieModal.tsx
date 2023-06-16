import { useState } from "react";
import { Link } from "react-router-dom";
import { SCookieModal } from "./SCookieModal.styled";
import { MdCookie } from "react-icons/md";
import { FormattedMessage } from "react-intl";


export function CookieModal() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <SCookieModal>
          <div className="content">
            <span className="icon">
              <MdCookie />
            </span>
            <p className="info-text">
              <FormattedMessage id="cookie_info" />
              <Link to="#" className="policy">
                <FormattedMessage id="cookie_policy" />
              </Link>
              .{" "}
            </p>
          </div>

          <div className="options-section">
            <button className="settings">
              <FormattedMessage id="cookie_settings" />
            </button>
            <button onClick={handleModalClose} className="ok">
              <FormattedMessage id="ok" />
            </button>
          </div>
        </SCookieModal>
      )}
    </div>
  );
}
