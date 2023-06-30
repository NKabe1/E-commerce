import { PropsWithChildren, useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "@src/contexts/CurrentUserContext"; 
import jwt_decode from "jwt-decode";
import { TLocalStorage } from "@src/types/localstorage";
import { TUser_Role_Enum } from "@src/types/user.types";

export type CurrentUserValues = {
  user_id: string;
  user_role: TUser_Role_Enum | null;
};

function myToken() {
  const token = localStorage.getItem(TLocalStorage.ACCESSTOKEN);
  if (token) {
    const decodedToken = jwt_decode(token) as {
      id: string;
      role: TUser_Role_Enum;
    };
    return { id: decodedToken.id, role: decodedToken.role };
  }
  return { id: "", role: null };
}

export function CurrentUserProvider({ children }: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<CurrentUserValues>({
    user_id: myToken().id,
    user_role: myToken().role,
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
