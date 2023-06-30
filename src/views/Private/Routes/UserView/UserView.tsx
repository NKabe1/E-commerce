import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@src/components/Button";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext/AuthContext";
import { TLocalStorage } from "@src/types/localstorage";
import { SUserView } from "./SUserView.styled";


export default function UserView() {
  const { setStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(TLocalStorage.ACCESSTOKEN);
    setStatus(TAuthorizationStage.UNAUTHORIZED);
    navigate("/auth-login");
  };
  return (
    <SUserView>
      <div className="h-full">
        <div className="wrapper">
          <div className="img">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="image"
            />
          </div>
          <Button onClick={handleLogout}>
            <FiLogOut />
            <FormattedMessage id="logout" />
          </Button>
        </div>
      </div>
    </SUserView>
  );
}
