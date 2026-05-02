import { useFetchJobs } from "./hooks/useFetchJobs.jsx";
import JobSearchForm from "./components/JobSearchForm/JobSearchForm.jsx";
import JobSearchResults from "./components/JobSearchResults/JobSearchResults.jsx";
import Pagination from "./components/Pagination/Pagination";

export default function Empleos() {
  const {
    // Datos
    jobs,
    loading,
    err,
    totalPages,
    currentPage,
    jobsPerPage,
    searchText,

    // Acciones
    handleSearchText,
    handleSearchFilter,
    handleFullSearch,
    handlePageChange,
    handleJobsPerPageChange,
  } = useFetchJobs();

  return (
    <>
      <title>DevJobs - Empleos</title>
      <JobSearchForm
        searchText={searchText}
        jobsPerPage={jobsPerPage}
        onSearch={handleFullSearch}
        onSearchText={handleSearchText}
        onSearchFilter={handleSearchFilter}
        onJobsPerPage={handleJobsPerPageChange}
      />

      <JobSearchResults
        loading={loading}
        error={err}
        results={jobs}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
