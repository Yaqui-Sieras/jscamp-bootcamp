import "./assets/styles/jobSearchForm.css";

function JobSearchForm({
  onSearch,
  onSearchText,
  onSearchFilter,
  searchText,
  jobsPerPage,
  onJobsPerPage,
}) {
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const filters = {
      search: formData.get(`search`),
      technology: formData.get(`technology`),
      modality: formData.get(`modality`),
      location: formData.get(`location`),
      experience: formData.get(`experience-level`),
      time: formData.get(`time`),
    };
    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    if (onSearchText) {
      onSearchText(searchText);
    }
  };

  const handleFilterChange = (event) => {
    const filterData = event.target;
    const filter = {
      name: filterData.name,
      value: filterData.value,
    };

    if (onSearchFilter) {
      onSearchFilter(filter);
    }
  };

  const handleJobsPerPageChange = (event) => {
    if (event.target.value !== jobsPerPage) {
      onJobsPerPage(parseInt(event.target.value, 10));
    }
  };

  return (
    <section className="jobs-search">
      <header className="jobs-search__header">
        <h1 className="jobs-search__title">Encuentra tu próximo trabajo</h1>
        <p className="jobs-search__description">
          Explora miles de oportunidades en el sector tecnológico.
        </p>
      </header>

      <form
        id="empleos-search-form"
        role="search"
        className="jobs-search__form"
        onSubmit={handleSubmitForm}
      >
        <div className="search-bar">
          <div className="search-bar__icon">
            <svg
              className="search__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>

          <input
            className="search-bar__input"
            name="search"
            id="jobs-search-input"
            required
            type="text"
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleSearchChange}
            value={searchText}
          ></input>
        </div>

        <div className="search-filters">
          <select
            title="technology"
            name="technology"
            id="filter-technology"
            onChange={handleFilterChange}
          >
            <option value="">Tecnología</option>
            <optgroup label="Tecnologías populares">
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
            </optgroup>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="csharp">C#</option>
            <option value="java">Java</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
          </select>

          <select
            title="modality"
            name="modality"
            id="filter-modality"
            onChange={handleFilterChange}
          >
            <option value="">Modalidad</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">Onsite</option>
            <option value="freelance">Freelance</option>
            <option value="internship">Prácticas</option>
          </select>

          <select
            title="location"
            name="location"
            id="filter-location"
            onChange={handleFilterChange}
          >
            <option value="">Location</option>
            <option value="cdmx_mx">Ciudad de México</option>
            <option value="gdljr_mx">Guadalajara</option>
            <option value="bgt_co">Bogota</option>
            <option value="lm_pe">Lima</option>
            <option value="bsas_ar">Buenos Aires</option>
            <option value="sntg_cl">Santiago de Chile</option>
            <option value="asu_py">Asunción</option>
            <option value="mdrd_es">Madrid</option>
            <option value="brcln_es">Barcelona</option>
            <option value="vlnc_es">Valencia</option>
          </select>

          <select
            title="experience-level"
            name="experience-level"
            id="filter-experience-level"
            onChange={handleFilterChange}
          >
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>

          <select
            title="time"
            name="time"
            id="filter-time"
            onChange={handleFilterChange}
          >
            <option value="">Tiempo</option>
            <option value="full_time">Completo</option>
            <option value="part_time">Parcial</option>
          </select>

          <div className="jobs-result__controls">
            <label>
              Empleos por página:
              <select onChange={handleJobsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default JobSearchForm;
