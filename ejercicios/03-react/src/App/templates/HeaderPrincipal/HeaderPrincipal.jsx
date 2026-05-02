import "./assets/styles/headerPrincipal.css";
import { PATHS } from "../../config/paths.js";
import Link from "./../../shared/components/Link/Link.jsx";

export default function HeaderPrincipal() {
  return (
    <header className="header_page">
      <Link href={PATHS.HOME}>
        <h1 className="header_page__title">
          <svg
            className="logo"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          DevJobs
        </h1>
      </Link>

      <nav className="header_nav">
        <Link className="header_nav__link" href={PATHS.HOME}>
          Inicio
        </Link>
        <Link className="header_nav__link" href={PATHS.SEARCH}>
          Empleos
        </Link>
      </nav>

      <div className="header_page__action_page">
        <Link href={PATHS.POST_JOB}>Publicar un empleo</Link>
        <Link href={PATHS.LOGIN}>Iniciar sesión</Link>
      </div>
    </header>
  );
}
