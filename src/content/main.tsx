import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorld } from "./hello-world";

const appId = "_content_script_";

const app = document.createElement("div");
app.id = appId;
document.querySelector("body")?.insertAdjacentElement("afterend", app);

ReactDOM.createRoot(document.getElementById(appId) as HTMLElement).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
