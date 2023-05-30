import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.css";
import GlobalCss from "./assets/styles/global.css";
import { AuthProvider } from "./providers/AuthProvider";
import { CartModalProvider } from "./providers/CartModalProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartModalProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartModalProvider>
      <GlobalCss />
    </BrowserRouter>
  </React.StrictMode>
);
