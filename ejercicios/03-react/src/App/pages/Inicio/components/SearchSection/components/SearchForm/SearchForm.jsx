import { useState } from "react";
import { useSearchNavigation } from "./hooks/useSearchNavigation.jsx";
import "./assets/styles/searchForm.css";
import { IconSearch } from "./../../../../../../shared/components/Icons/Icons.jsx";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchJobs } = useSearchNavigation();

  const handleSearch = (event) => {
    event.preventDefault();
    searchJobs(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const isDisabled = searchTerm.trim() === "";

  return (
    <form className="search_form" role="search" onSubmit={handleSearch}>
      <div className="search_form__icon">
        <IconSearch />
      </div>
      <input
        name="search"
        required
        type="text"
        autoComplete="off"
        placeholder="Buscar empleos por título, habilidad o empresa"
        value={searchTerm}
        onChange={handleChange}
      />
      <button disabled={isDisabled} type="submit">
        Buscar
      </button>
    </form>
  );
}
