import { BsCartX } from "react-icons/bs";
import { SEmptyCartMessage } from "./SEmptyCartMessage.styled";
import { FormattedMessage } from "react-intl";

export function EmptyCartMessage() {
  return (
    <SEmptyCartMessage>
      <div className="icon">
        <BsCartX />
      </div>
      <div><FormattedMessage id="empty_cart"/></div>
    </SEmptyCartMessage>
  );
}
