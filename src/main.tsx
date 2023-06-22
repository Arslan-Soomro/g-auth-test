import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loadAllScripts } from "./utils/utils.ts";

// First load all scripts only then render the app
loadAllScripts("./src/")
  .then(function () {
    console.log(
      "All scripts have been loaded successfully. Rendering React App..."
    );
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
  })
  .catch(function (error) {
    console.error("Error occurred while loading scripts:", error);
  });
