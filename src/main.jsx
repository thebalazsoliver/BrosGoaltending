import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CampsPage from "./CampsPage.jsx";
import "./style.css";

const normalizedPath = window.location.pathname.replace(/\/+$/, "") || "/";
const CurrentPage = normalizedPath === "/taboraink" ? CampsPage : App;

if (normalizedPath === "/taboraink") {
  document.title = "Táboraink | Bro's Summer Camp 2027";
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentPage />
  </StrictMode>,
);