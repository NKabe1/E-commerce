import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

const HomeView = lazy(() => import("./views/HomeView"));
const ProductsView = lazy(() => import("./views/ProductsView"));
const ProductView = lazy(() => import("./views/ProductView"));
const AuthView = lazy(() => import("./views/AuthView"));

function App() {
  
  return (
    <div >
      <Suspense>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductView />} />
          <Route path="/auth/*" element={<AuthView/>}/>
        </Route>
      </Routes>
    </Suspense>
    </div>
  )
}

export default App
