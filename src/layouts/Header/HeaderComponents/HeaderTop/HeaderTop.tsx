import { useContext } from "react";
import { LocaleContext } from "@src/contexts/LocaleContext";
import { FormattedMessage } from "react-intl";
import { SMainContainer } from "@src/components/MainContainer/SMainContainer.styled";
import { BsTelephone } from "react-icons/bs";
import { SHeaderTop, SHeaderTopContent } from "./SHeaderTop.styled";

export function HeaderTop() {
  const { locale, setLocale } = useContext(LocaleContext);
  const onLanguageChange = (event: any) => {
    setLocale(event.target.value as "en" | "ge");
  };
  return (
    <SHeaderTop>
      <SMainContainer>
        <SHeaderTopContent>
          <div>
            <BsTelephone />
            <h5>+995 (32) 2 111 222</h5>
          </div>
          <div className="additional">
            <h5><FormattedMessage id="discover"/></h5>
            <h5>|</h5>
            <h5><FormattedMessage id="shop_now"/></h5>
          </div>
          <select value={locale} onChange={onLanguageChange} name="language">
            <option value="en">ENG</option>
            <option value="ge">GEO</option>
          </select>
        </SHeaderTopContent>
      </SMainContainer>
    </SHeaderTop>
  );
}
