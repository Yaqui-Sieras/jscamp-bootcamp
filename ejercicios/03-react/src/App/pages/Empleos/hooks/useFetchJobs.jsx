import { useState, useEffect, useCallback } from "react";

export function useFetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [searchFilters, setSearchFilters] = useState({
    technology: "",
    modality: "",
    location: "",
    experience: "",
    time: "",
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    jobsPerPage: 5,
  });

  // Cálculos de Paginación
  const totalPages = Math.max(1, Math.ceil(totalJobs / pagination.jobsPerPage));

  // --- HANDLERS ---
  const handleSearchText = useCallback((text) => {
    setSearchText(text);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, []);

  const handleSearchFilter = useCallback(({ name, value }) => {
    setSearchFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, []);

  // Handler masivo (por si el formulario envía todo junto)
  const handleFullSearch = useCallback((newSearch) => {
    if (newSearch.search !== undefined) setSearchText(newSearch.search);

    setSearchFilters({
      technology: newSearch.technology || "",
      modality: newSearch.modality || "",
      location: newSearch.location || "",
      experience: newSearch.experience || "",
      time: newSearch.time || "",
    });
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, []);

  const handlePageChange = useCallback((page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  }, []);

  const handleJobsPerPageChange = useCallback((amount) => {
    setPagination({ jobsPerPage: amount, currentPage: 1 });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const textFromUrl = params.get("text");

    if (textFromUrl) {
      handleSearchText(textFromUrl);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (searchText) params.set("text", searchText);

    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    if (newUrl !== window.location.href) {
      window.history.pushState({}, "", newUrl);
    }
    /* Actualizar la URL sin recargar
    window.history.replaceState({}, "", newUrl);
    */
  }, [searchText, searchFilters]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        setLoading(true);
        setErr(null);

        // Delay 1.5s para simular carga
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Construimos query params dinámicos
        const params = new URLSearchParams();
        if (searchText) params.append("text", searchText);
        Object.entries(searchFilters).forEach(([key, value]) => {
          if (value) params.append(key, value);
        });

        const response = await fetch(`/db/data.json?${params.toString()}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const res = await response.json();
        setJobs(res.data);
        setTotalJobs(res.meta.total);
      } catch (error) {
        setErr(error.message);
        console.error(`Error fetching jobs: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, [searchText, searchFilters]);

  return {
    // Datos
    jobs,
    loading,
    err,
    totalJobs,
    totalPages,
    currentPage: pagination.currentPage,
    jobsPerPage: pagination.jobsPerPage,
    searchText,

    // Acciones
    handleSearchText,
    handleSearchFilter,
    handleFullSearch,
    handlePageChange,
    handleJobsPerPageChange,
  };
}
