import "./assets/styles/searchSection.css";
import SearchForm from "./components/SearchForm/SearchForm.jsx";

export default function SearchSection() {
  return (
    <section className="search_section">
      <img
        className="search_section__background"
        src="/resources/img/background.webp"
        alt="Trabajo grupal"
      />
      <div className="search_section__front">
        <h1 className="search_section__title">
          Encuentra el trabajo de tus sueños
        </h1>
        <p className="search_section__description">
          Únete a la comunidad más grande de desarrolladores y encuentra tu
          próxima oportunidad.
        </p>
        <SearchForm />
      </div>
    </section>
  );
}
