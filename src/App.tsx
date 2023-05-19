import { lazy, Suspense, useCallback, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";
import { AuthContext, TAuthorizationStage } from "./contexts/AuthContext";

// ცალკე კომპონენტში შეიძლება გატანა !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const HomeView = lazy(() => import("./views/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView"));
const ProductView = lazy(() => import("./views/ProductView"));
const LoginView = lazy(() => import("./views/AuthView/LoginView"));
const RegisterView = lazy(() => import("./views/AuthView/RegisterView"));

function App() {
  const { status } = useContext(AuthContext);
  const handleRoutes = useCallback((status: TAuthorizationStage) => {
    switch (status) {
      case TAuthorizationStage.AUTHORIZED: {
        return (
          <Routes>
            <Route element={<PrivateLayout />}>
              <Route path="/" element={<div>Private page</div>} />
              {/* later I'll add other pages, where authorized user needs to have access to */}
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        );
      }
      case TAuthorizationStage.UNAUTHORIZED: {
        return (
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomeView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/auth-login" element={<LoginView />} />
              <Route path="/auth-register" element={<RegisterView />} />
            </Route>
          </Routes>
        );
      }
    }
  }, []);
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>{handleRoutes(status)}
        {/* <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomeView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="/auth-login" element={<LoginView />} />
            <Route path="/auth-register" element={<RegisterView />} />
          </Route>
        </Routes> */}
      </Suspense>
    </div>
  );
}

export default App;
