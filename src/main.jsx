import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./context/languageConext.jsx";

createRoot(document.getElementById("root")).render(
  <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LangProvider>
);
