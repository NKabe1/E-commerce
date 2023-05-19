import { Outlet } from "react-router-dom";
//private header
import { Footer } from "../Footer";
import { SMainLayoutWrapper } from "../MainLayout/SMainLayout.styled";
import { SMainContainer } from "@src/components/MainContainer";

export function PrivateLayout() {
  return (
    <div>
      {/* Header should be created */}
      <div>Private layout Header</div>
      <SMainLayoutWrapper>
        <SMainContainer>
          <Outlet />
        </SMainContainer>
      </SMainLayoutWrapper>
      <Footer />
    </div>
  );
}
