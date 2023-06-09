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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  
  return (
    <SFooter>
      <SMainContainer>
        <SFooterTop>
          <h4>Connect with us on social media:</h4>
          
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
            <p>About Us</p>
            <div>
              <p> About EShop</p>
              <p>Careers</p>
              <p>Affiliate & Partners</p>
              <p>Help</p>
            </div>
          </div>
          <div>
            <p>Services</p>
            <div>
              <p> Gift Card</p>
              <p>Mobile App</p>
              <p>Shipping and delivery</p>
              <p>Order Pickup</p>
            </div>
          </div>
          <div>
            <p>Contact Us</p>
            <div>
              <p>
                <BsTelephone />
                +995 (32) 2 111 222
              </p>
              <p>
                <TfiEmail />
                info@eshop.ge
              </p>
              <p>
                <Link to={"/contact-us"} onClick={scrollToTop}>
                  Feedback
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
