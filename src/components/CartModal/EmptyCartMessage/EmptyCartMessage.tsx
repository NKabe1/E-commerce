import { BsCartX } from "react-icons/bs";
import { SEmptyCartMessage } from "./SEmptyCartMessage.styled";

export function EmptyCartMessage() {
  return (
    <SEmptyCartMessage>
      <div className="icon">
        <BsCartX />
      </div>
      <div>Cart is empty</div>
    </SEmptyCartMessage>
  );
}
