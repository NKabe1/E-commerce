import { PropsWithChildren, useState, useEffect } from "react";
import { AuthContext, TAuthorizationStage } from "@src/contexts/AuthContext";
import { TLocalStorage } from "@src/types/localstorage";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

  useEffect(() => {
    if (localStorage.getItem(TLocalStorage.ACCESSTOKEN)) {
      setStatus(TAuthorizationStage.AUTHORIZED);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
