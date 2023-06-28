import { SMainContainer } from "@src/components/MainContainer";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsTelephone,
} from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import {
  SFooter,
  SFooterTop,
  SFooterContent,
  SFooterBottom,
  SLine,
} from "./SFooter.styled";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <SFooter>
      <SMainContainer>
        <SFooterTop>
          <h4>
            <FormattedMessage id="connect_w_us" />
          </h4>

          <div>
            <p>
              <BsFacebook />
            </p>
            <p>
              <BsTwitter />
            </p>
            <p>
              <BsLinkedin />
            </p>
            <p>
              <BsInstagram />
            </p>
          </div>
        </SFooterTop>
        <SLine />
        <SFooterContent>
          <div>
            <p>
              <FormattedMessage id="about_us" />
            </p>
            <div>
              <p>
                <FormattedMessage id="about_eshop" />
              </p>
              <p>
                <FormattedMessage id="carrers" />
              </p>
              <p>
                <FormattedMessage id="partners" />
              </p>
              <p>
                <FormattedMessage id="help" />
              </p>
            </div>
          </div>
          <div>
            <p>
              <FormattedMessage id="services" />
            </p>
            <div>
              <p>
                <FormattedMessage id="gift" />
              </p>
              <p>
                <FormattedMessage id="app" />
              </p>
              <p>
                <FormattedMessage id="delivery" />
              </p>
              <p>
                <FormattedMessage id="pick_up" />
              </p>
            </div>
          </div>
          <div>
            <p>
              <FormattedMessage id="contact" />
            </p>
            <div>
              <p>
                <Link to="tel:+995322111222" className="link">
                  <BsTelephone />
                  +995 (32) 2 111 222
                </Link>
              </p>
              <p>
                <Link
                  to="mailto:info@eshop.ge"
                  onClick={scrollToTop}
                  className="link"
                >
                  <TfiEmail />
                  info@eshop.ge
                </Link>
              </p>
              <p>
                <Link to={"/contact-us"} onClick={scrollToTop}>
                  <FormattedMessage id="feedback" />
                </Link>
              </p>
            </div>
          </div>
        </SFooterContent>
        <SLine />
        <SFooterBottom>
          <div className="terms-n-policy">
            <p className="terms-n-policy_item">Terms of Service</p>
            <p>|</p>
            <p className="terms-n-policy_item">Privacy Policy</p>
          </div>
          <p>©2023 EShop, All rights reserved</p>
        </SFooterBottom>
      </SMainContainer>
    </SFooter>
  );
}
