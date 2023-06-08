import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import GlobalCss from "./assets/styles/global.css";
import { AuthProvider } from "./providers/AuthProvider";
import { CartModalProvider } from "./providers/CartModalProvider";
import { SearchBarProvider } from "./providers/SearchBarProvider";
import { PaginateProvider } from "./providers/PaginateProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <PaginateProvider>
        <SearchBarProvider>
          <CartModalProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </CartModalProvider>
        </SearchBarProvider>
      </PaginateProvider>
      <GlobalCss />
    </BrowserRouter>
  </React.StrictMode>
);
