import { SFeaturedCard, SFeaturedCardWrapper } from "../SFeaturedSection.styled";
import { FormattedMessage } from "react-intl";
import delivery from "@src/assets/ServiceImgs/delivery.jpg";
import location from "@src/assets/ServiceImgs/location.jpg";
import contact from "@src/assets/ServiceImgs/contact.jpg";
import giftCard from "@src/assets/ServiceImgs/giftCard.jpg";

export function ServicesSection() {
  return (
    <SFeaturedCardWrapper>
      <SFeaturedCard image={location}>
        <p><FormattedMessage id="order"/></p>
      </SFeaturedCard>
      <SFeaturedCard image={delivery}>
        <p><FormattedMessage id="free_delivery"/></p>
      </SFeaturedCard>
      <SFeaturedCard image={contact}>
        <p><FormattedMessage id="contact_24/7"/></p>
      </SFeaturedCard>
      <SFeaturedCard image={giftCard}>
        <p><FormattedMessage id="gift"/></p>
      </SFeaturedCard>
    </SFeaturedCardWrapper>
  );
}

