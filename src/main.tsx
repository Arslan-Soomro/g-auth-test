import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// Add react router 6
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_G_CLIENT_ID}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
