import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from "./context/AppContext.jsx";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ContextProvider>
          <Notifications />
          <App />
        </ContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
