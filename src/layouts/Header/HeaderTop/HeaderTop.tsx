import { SMainContainer } from "@src/components/MainContainer/SMainContainer.styled";
import { BsTelephone } from "react-icons/bs";
import { SHeaderTop, SHeaderTopContent } from "./SHeaderTop.styled";

export function HeaderTop() {
  return (
    <SHeaderTop>
      <SMainContainer>
        <SHeaderTopContent>
          <div>
            <BsTelephone />
            <h5>+995 (32) 2 111 222</h5>
          </div>
          <div className="additional">
            <h5>Discover new products</h5>
            <h5>|</h5>
            <h5>Shop now</h5>
          </div>
          <select name="language">
            <option value="en">ENG</option>
            <option value="ge">GEO</option>
          </select>
        </SHeaderTopContent>
      </SMainContainer>
    </SHeaderTop>
  );
}
