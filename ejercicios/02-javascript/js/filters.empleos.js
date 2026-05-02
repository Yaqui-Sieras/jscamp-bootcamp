const jobsSearchInput = document.getElementById("jobs-search-input");

jobsSearchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();
  console.log("Búsqueda en tiempo real:", query);
});

jobsSearchInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = jobsSearchInput.value.toLowerCase();
  console.log("Búsqueda enviada:", query);
});

const filterTechnology = document.getElementById("filter-technology");
const filterModality = document.getElementById("filter-modality");
const filterLocation = document.getElementById("filter-location");
const filterExpLevel = document.getElementById("filter-experience-level");
const filterTime = document.getElementById("filter-time");

const filters = [
  filterTechnology,
  filterModality,
  filterLocation,
  filterExpLevel,
  filterTime,
];

filters.forEach((filter) => {
  filter?.addEventListener("change", applyFilters);
});

function applyFilters() {
  const techValue = filterTechnology.value;
  const modalityValue = filterModality.value;
  const locationValue = filterLocation.value;
  const expLevelValue = filterExpLevel.value;
  const timeValue = filterTime.value;

  const jobCards = document.querySelectorAll(".job-card");

  jobCards.forEach((card) => {
    const matches = [
      !techValue || card.dataset.technology.includes(techValue),
      !modalityValue || card.dataset.modality === modalityValue,
      !locationValue || card.dataset.location === locationValue,
      !expLevelValue || card.dataset.experience === expLevelValue,
      !timeValue || card.dataset.time === timeValue,
    ].every(Boolean);

    card.classList.toggle("is-hidden", !matches);
  });
}
