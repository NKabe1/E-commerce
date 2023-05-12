import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import RegisterView from "./views/AuthView/RegisterView/RegisterView";

const HomeView = lazy(() => import("./views/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView"));
const ProductView = lazy(() => import("./views/ProductView"));
const LoginView = lazy(() => import("./views/AuthView/LoginView"));
const TegisterView = lazy(() => import("./views/AuthView/RegisterView"));

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="/auth-login" element={<LoginView />} />
            <Route path="/auth-register" element={<RegisterView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
