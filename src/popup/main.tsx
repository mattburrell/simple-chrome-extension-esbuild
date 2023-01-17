import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";

if (!!!window.IS_PRODUCTION) {
  // Enable Hot Module Reloading in dev
  new EventSource("/esbuild").addEventListener("change", () => location.reload());
}

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
