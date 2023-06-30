import { PropsWithChildren } from "react";
import { AuthProvider } from "./AuthProvider";
import { CartModalProvider } from "./CartModalProvider";
import { LocaleProvider } from "./LocaleProvider/LocaleProvider";
import { PaginateProvider } from "./PaginateProvider";
import { SearchBarProvider } from "./SearchBarProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <div>
      <LocaleProvider>
        <PaginateProvider>
          <SearchBarProvider>
            <CartModalProvider>
              <AuthProvider>{children}</AuthProvider>
            </CartModalProvider>
          </SearchBarProvider>
        </PaginateProvider>
      </LocaleProvider>
    </div>
  );
}
