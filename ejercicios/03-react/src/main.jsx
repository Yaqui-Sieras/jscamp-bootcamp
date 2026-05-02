import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/miReset.css";
import "./assets/styles/index.css";
import App from "./App/App.jsx";

// Referencia al elemento del DOM
const container = document.getElementById("root");

// Validación defensiva (Opcional pero profesional)
if (container) {
  const root = createRoot(container);

  root.render(
    <StrictMode>
      {/* Aquí en el futuro irán los "Providers" globales 
        (Redux, AuthContext, ThemeContext, etc.) envolviendo a <App />
      */}
      <App />
    </StrictMode>
  );
} else {
  console.error("Error: No se encontró el elemento raíz con id 'root'.");
}
