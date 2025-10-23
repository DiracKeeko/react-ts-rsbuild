import React from "react";
import ReactDOM from "react-dom/client";

import "@/style/index.css";

import "@/config/dayjsConfig"; // dayjs中文配置

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
