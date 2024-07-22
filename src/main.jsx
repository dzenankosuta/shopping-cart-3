import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { ContextProvider } from "./context/AppContext.jsx";
import { ModalsProvider } from "@mantine/modals";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ContextProvider>
          <ModalsProvider>
            <App />
          </ModalsProvider>
        </ContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
