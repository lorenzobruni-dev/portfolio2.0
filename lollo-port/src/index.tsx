import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToastProvider from "./providers/ToastProvider";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <MantineProvider
    theme={{
      spacing: { xs: "1rem", sm: "1.5rem" },
      fontSizes: { xs: "0.8rem", sm: "1.2rem" },
      radius: { xs: "0.1rem", sm: "0.3rem" },
      breakpoints: { xs: "20em", sm: "36em" },
    }}
  >
    <ToastProvider>
      <App />
    </ToastProvider>
  </MantineProvider>,
);
