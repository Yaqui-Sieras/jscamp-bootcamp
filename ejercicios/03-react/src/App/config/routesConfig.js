import { lazy } from "react";
import { PATHS } from "./paths";

// Definimos un objeto o array donde mapeamos la ruta con su import dinámico
export const routesConfig = {
  [PATHS.HOME]: lazy(() => import("./../pages/Inicio/Inicio.jsx")),
  [PATHS.SEARCH]: lazy(() => import("./../pages/Empleos/Empleos.jsx")),
  // Puedes agregar más rutas fácilmente aquí
};

// Definimos el componente NotFound por separado como fallback por defecto
export const NotFoundComponent = lazy(() =>
  import("./../pages/NotFound/NotFound.jsx")
);
