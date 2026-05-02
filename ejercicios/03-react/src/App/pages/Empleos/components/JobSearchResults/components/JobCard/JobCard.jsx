import "./assets/styles/jobCard.css";

function JobCard({ job }) {
  return (
    <article
      data-id={job.id}
      className="job-card"
      data-technology={job.attributes.technology
        .map((tech) => tech.id.toLowerCase())
        .join(" ")}
      data-modality={job.attributes.modality.id}
      data-location={job.attributes.location.id}
      data-experience={job.attributes.experience_level.id}
      data-time={job.attributes.time.id}
    >
      <div className="job-card__info">
        <h3 className="job-card__title">{job.title}</h3>
        <small className="job-card__details">
          <span>{job.company.name}</span>
          <span>{job.attributes.experience_level.label}</span>
          <span>{job.attributes.modality.label}</span>
          <span>{job.attributes.location.label}</span>
          <span>{job.attributes.time.label}</span>
        </small>
        <p className="job-card__description">{job.description}</p>
        <p className="job-card__tech">
          Technologies required:{" "}
          {job.attributes.technology.map((tech) => tech.label).join(", ")}
        </p>
        <small className="job-card__details">
          Published on: {new Date(job.posted_at).toLocaleDateString()}
        </small>
      </div>
      <div className="job-card__btns">
        <button type="button" className="button-apply-job">
          Aplicar
        </button>
        <button type="button" className="button-view-details">
          Detalles
        </button>
      </div>
    </article>
  );
}

export default JobCard;
