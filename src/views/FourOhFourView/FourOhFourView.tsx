import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Button } from "@src/components/Button";
import FourOhFour from "@src/assets/404/404.png";
import { SFourOhFourView } from "./SFourOhFourView.styled";

export default function FourOhFourView() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <SFourOhFourView>
      <div className="page-content">
        <img className="img" src={FourOhFour} />
        <p className="info">
          <FormattedMessage id="page-not-found" />
        </p>
      </div>
      <div className="btn">
        <Button onClick={handleClick}>
          <FormattedMessage id="go-back" />
        </Button>
      </div>
    </SFourOhFourView>
  );
}
