import { lazy, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { TUser_Role_Enum } from "@src/types/user.types";
import { PrivateLayout } from "@src/layouts/PrivateLayout";
import { PrivateRoute } from "./PrivateRoute";
import { CurrentUserContext } from "@src/contexts/CurrentUserContext";

const UserView = lazy(() => import("./Routes/UserView/UserView"));
const AdminView = lazy(() => import("./Routes/AdminView/AdminView"));
const CheckoutView = lazy(() => import("./Routes/CheckoutView"));

export function PrivateRoutes() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route
            path="/user-page"
            element={
              <PrivateRoute roles={[TUser_Role_Enum.USER]}>
                {<UserView />}
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute
                roles={[TUser_Role_Enum.USER, TUser_Role_Enum.ADMIN]}
              >
                {<CheckoutView />}
              </PrivateRoute>
            }
          />
          <Route
            path="/admin-page"
            element={
              <PrivateRoute roles={[TUser_Role_Enum.ADMIN]}>
                {<AdminView />}
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
