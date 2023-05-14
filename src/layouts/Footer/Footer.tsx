import { SMainContainer } from "@src/components/MainContainer";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { SFooter, SFooterTop, SFooterContent, SFooterBottom, SLine } from "./SFooter.styled";

export function Footer() {
  return (
    <SFooter>
      <SMainContainer>
        <SFooterTop>
          Connect with us on social media:
          <div>
            <p><BsFacebook /></p>
            <p><BsTwitter /></p>
            <p><BsLinkedin /></p>
            <p><BsInstagram /></p>
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
              <p>Feedback</p>
            </div>
          </div>
        </SFooterContent>
        <SLine />
        <SFooterBottom>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <span>©2023 EShop, All rights reserved</span>
        </SFooterBottom>
      </SMainContainer>
    </SFooter>
  );
}