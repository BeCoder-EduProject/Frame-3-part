import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppPage from "./AppPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./componentWhite/src/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <AppPage />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppPage />}></Route>
      <Route path="/whitePage" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);
