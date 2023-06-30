import { lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@src/layouts/MainLayout";
import { PrivateLayout } from "@src/layouts/PrivateLayout";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext/AuthContext";

const HomeView = lazy(() => import("./Routes/HomeView"));
const ProductsView = lazy(() => import("./Routes/ProductsView"));
const ProductView = lazy(() => import("./Routes/ProductView"));
const LoginView = lazy(() => import("./Routes/AuthView/LoginView"));
const RegisterView = lazy(() => import("./Routes/AuthView/RegisterView"));
const CartView = lazy(() => import("./Routes/CartView"));
const CategoryView = lazy(() => import("./Routes/CategoryView"));
const ContactUsView = lazy(() => import("./Routes/ContactUsView"));
const FourOhFour = lazy(() => import("../FourOhFourView"));

export function PublicRoutes() {
  const { status } = useContext(AuthContext);
  const Layout =
    status === TAuthorizationStage.AUTHORIZED ? PrivateLayout : MainLayout;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/categories/:category" element={<CategoryView />} />
        <Route path="/products/:id" element={<ProductView />} />
        <Route path="/auth-login" element={<LoginView />} />
        <Route path="/auth-register" element={<RegisterView />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/contact-us" element={<ContactUsView />} />
      </Route>
      {status === TAuthorizationStage.UNAUTHORIZED && (
        <Route path="*" element={<FourOhFour />} />
      )}
    </Routes>
  );
}
