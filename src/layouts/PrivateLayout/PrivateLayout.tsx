import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { SMainLayoutWrapper } from "../MainLayout/SMainLayout.styled";
import { SMainContainer } from "@src/components/MainContainer";
import { HeaderPrivate } from "../Header/HeaderPrivate";
import { CurrentUserProvider } from "@src/providers/CurrentUserProvider";

export function PrivateLayout() {
  return (
    <div>
      <CurrentUserProvider>
        <HeaderPrivate />
        <SMainLayoutWrapper>
          <SMainContainer>
            <Outlet />
          </SMainContainer>
        </SMainLayoutWrapper>
        <Footer />
      </CurrentUserProvider>
    </div>
  );
}
