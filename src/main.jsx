import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import ContextProvider from "./Provider/ContextProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
