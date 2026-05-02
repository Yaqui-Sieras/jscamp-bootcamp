import "./assets/styles/jobSearchResults.css";
import JobCard from "./components/JobCard/JobCard";

export default function JobSearchResults({
  loading: loading,
  error: err,
  results: jobs = [],
  jobsPerPage = 5,
  currentPage = 1,
}) {
  const pagesResult = jobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  return (
    <section className="jobs-result">
      <h2 className="jobs-result__title">Resultados de búsqueda</h2>

      <div className="jobs-listings">
        {loading && (
          <p className="jobs-result__loading">Cargando resultados...</p>
        )}

        {err && <p className="jobs-result__error">Ocurrió un error: {err}</p>}

        {!loading && !err && (
          <>
            {pagesResult.length > 0 ? (
              pagesResult.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="jobs-result__empty">
                No se encontraron resultados.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
