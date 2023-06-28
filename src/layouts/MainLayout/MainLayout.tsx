import { Outlet } from "react-router-dom";
import { HeaderPublic } from "../Header/HeaderPublic";
import { Footer } from "../Footer";
import { SMainLayoutWrapper } from "./SMainLayout.styled";
import { SMainContainer } from "@src/components/MainContainer";

export function MainLayout() {
  return (
    <div>
      <HeaderPublic />
      <SMainLayoutWrapper>
        <SMainContainer>
          <Outlet />
        </SMainContainer>
      </SMainLayoutWrapper>
      <Footer />
    </div>
  );
}