import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </AuthProvider>
);
