import "./assets/styles/whyDevJobs.css";
import {
  IconDreamJob,
  IconNetwork,
  IconMoney,
} from "./../../../../shared/components/Icons/Icons.jsx";

export default function WhyDevJobs() {
  return (
    <section className="why_devjobs">
      <header className="why_devjobs__header">
        <h2 className="why_devjobs__title">¿Por qué DevJobs?</h2>
        <p className="why_devjobs__answer">
          DevJobs es la principal plataforma de búsqueda de empleo para
          desarrolladores. Conectamos a los mejores talentos con las empresas
          más innovadoras.
        </p>
      </header>
      <footer className="why_devjobs__features">
        <article className="features__item">
          <IconDreamJob />
          <h3>Encuentra el trabajo de tus sueños</h3>
          <p>
            Busca miles de empleos de las mejores empresas de todo el mundo.
          </p>
        </article>
        <article className="features__item">
          <IconNetwork />
          <h3>Conecta con las mejores empresas</h3>
          <p>Conecta con empresas que están contratando por tus habilidades.</p>
        </article>
        <article className="features__item">
          <IconMoney />
          <h3>Obtén el salario que mereces</h3>
          <p>
            Obtén el salario que mereces con nuestra calculadora de salarios.
          </p>
        </article>
      </footer>
    </section>
  );
}
