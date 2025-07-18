import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import {BrowserRouter} from 'react-router-dom'
import {AppRoutes} from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
