import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { AuthProviderWrapper } from "./context/userContext";
import { PageRoutes } from "./routes";
import SimpleSidebar from "./components/base/sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderWrapper>
    <ChakraProvider>
      <PageRoutes />
    </ChakraProvider>
  </AuthProviderWrapper>
);
