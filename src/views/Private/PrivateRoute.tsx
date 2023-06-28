import { PropsWithChildren, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { TUser_Role_Enum } from "@src/types/user.types";
import { CurrentUserContext } from "@src/contexts/CurrentUserContext";

type PrivateRouteProps = {
  roles: TUser_Role_Enum[];
};

export function PrivateRoute({
  roles,
  children,
}: PropsWithChildren<PrivateRouteProps>) {
  const { currentUser } = useContext(CurrentUserContext);

  if (currentUser.user_role === null) {
    return <Navigate to="/" />;
  }

  const isAdmin = currentUser.user_role === TUser_Role_Enum.ADMIN;
  const isUser = currentUser.user_role === TUser_Role_Enum.USER;

  if (roles.includes(currentUser.user_role)) {
    return <>{children}</>;
  } else if (isAdmin) {
    return <Navigate to="/admin-page" />;
  } else if (isUser) {
    return <Navigate to="/user-page" />;
  } else {
    return <Navigate to="/" />;
  }
}
