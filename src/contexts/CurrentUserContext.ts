import { Dispatch, SetStateAction, createContext } from "react";
import { CurrentUserValues } from "@src/providers/CurrentUserProvider";
import { TUser_Role_Enum } from "@src/types/user.types";

export type TCurrentUser = {
  currentUser: {
    user_id: string;
    user_role: TUser_Role_Enum | null;
  };
  setCurrentUser: Dispatch<SetStateAction<CurrentUserValues>>;
};

export const CurrentUserContext = createContext<TCurrentUser>({
  currentUser: {
    user_id: "",
    user_role: null,
  },
  setCurrentUser: () => {},
});
