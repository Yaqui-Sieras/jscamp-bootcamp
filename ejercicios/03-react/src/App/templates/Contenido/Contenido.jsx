import { Suspense } from "react";
import {
  routesConfig,
  NotFoundComponent,
} from "./../../config/routesConfig.js";
import Loading from "./components/Loading/Loading.jsx";
import "./assets/styles/contenido.css";

export default function Contenido({ path }) {
  const SelectedComponent = routesConfig[path] || NotFoundComponent;

  return (
    <div className="contenido">
      <Suspense fallback={<Loading />}>
        <SelectedComponent />
      </Suspense>
    </div>
  );
}
