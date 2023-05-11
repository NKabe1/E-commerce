import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { SMainLayoutWrapper } from "./SMainLayout.styled";
import { SMainContainer } from "@src/components/MainContainer";

export function MainLayout() {
  return (
    <div>
      <Header />
      <SMainLayoutWrapper>
        <SMainContainer>
          <Outlet />
        </SMainContainer>
      </SMainLayoutWrapper>
      <Footer />
    </div>
  );
}