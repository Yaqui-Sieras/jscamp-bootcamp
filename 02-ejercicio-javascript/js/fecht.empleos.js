fetch("./json/data.json")
  .then((res) => res.json())
  .then((jobs) => {
    const jobsArray = jobs.data;
    jobsArray.forEach((job) => {
      const jobCard = document.createElement("article");
      jobCard.classList.add("job-card");
      jobCard.dataset.technology = job.attributes.technology
        .map((tech) => tech.id)
        .join(" ");
      jobCard.dataset.modality = job.attributes.modality.id.toLowerCase();
      jobCard.dataset.location = job.attributes.location.id.toLowerCase();
      jobCard.dataset.experience =
        job.attributes.experience_level.id.toLowerCase();
      jobCard.dataset.time = job.attributes.time.id.toLowerCase();

      const jobCard__info = document.createElement("div");
      jobCard__info.classList.add("job-card__info");

      const jobCard__title = document.createElement("h3");
      jobCard__title.classList.add("job-card__title");
      jobCard__title.textContent = job.title;
      jobCard__info.appendChild(jobCard__title);

      const jobCard__details = document.createElement("small");
      jobCard__details.classList.add("job-card__details");

      const jobCard__company = document.createElement("span");
      jobCard__company.textContent = job.company.name;
      jobCard__details.appendChild(jobCard__company);

      const jobCard__experience = document.createElement("span");
      jobCard__experience.textContent = job.attributes.experience_level.label;
      jobCard__details.appendChild(jobCard__experience);

      const jobCard__modality = document.createElement("span");
      jobCard__modality.textContent = job.attributes.modality.label;
      jobCard__details.appendChild(jobCard__modality);

      const jobCard__location = document.createElement("span");
      jobCard__location.textContent = job.attributes.location.label;
      jobCard__details.appendChild(jobCard__location);

      const jobCard__time = document.createElement("span");
      jobCard__time.textContent = job.attributes.time.label;
      jobCard__details.appendChild(jobCard__time);

      jobCard__info.appendChild(jobCard__details);

      const jobCard__description = document.createElement("p");
      jobCard__description.classList.add("job-card__description");
      jobCard__description.textContent = job.description;
      jobCard__info.appendChild(jobCard__description);

      const jobCard__tech = document.createElement("p");
      jobCard__tech.classList.add("job-card__tech");
      jobCard__tech.textContent = `Technologies required: ${job.attributes.technology
        .map((tech) => tech.label)
        .join(" - ")}`;
      jobCard__info.appendChild(jobCard__tech);

      const jobCard__posted = document.createElement("small");
      jobCard__posted.classList.add("job-card__details");
      jobCard__posted.textContent = `Published on: ${new Date(
        job.posted_at
      ).toLocaleDateString()}`;
      jobCard__info.appendChild(jobCard__posted);

      jobCard.appendChild(jobCard__info);

      const jobCard__btns = document.createElement("div");
      jobCard__btns.classList.add("job-card__btns");

      const apply__btn = document.createElement("button");
      apply__btn.classList.add("button-apply-job");
      apply__btn.type = "button";
      apply__btn.textContent = "Aplicar ahora";
      jobCard__btns.appendChild(apply__btn);

      const details__btn = document.createElement("button");
      details__btn.classList.add("button-view-details");
      details__btn.type = "button";
      details__btn.textContent = "Ver detalles";
      jobCard__btns.appendChild(details__btn);

      jobCard.appendChild(jobCard__btns);

      document.querySelector(".jobs-listings").appendChild(jobCard);
    });
  });
