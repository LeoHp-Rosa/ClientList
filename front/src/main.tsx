import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { App } from "./App.tsx";

import { GlobalStyles } from "./styles/GlobalStyles.ts";
Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ToastContainer />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
