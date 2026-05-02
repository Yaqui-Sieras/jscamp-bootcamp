import "./assets/styles/pagination.css";

function Pagination({
  currentPage: currentPage = 1,
  totalPages: totalPages = 1,
  onPageChange,
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = (event) => {
    event.preventDefault();
    if (onPageChange && !isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    if (onPageChange && !isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (event, pageNumber) => {
    event.preventDefault();
    if (onPageChange && pageNumber !== currentPage) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav className="pagination">
      <a
        title="prev"
        href="#"
        className={isFirstPage ? "is-disabled-nav" : ""}
        onClick={handlePrevClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
      </a>

      {pages.map((page) => (
        <a
          key={page}
          href="#"
          className={page === currentPage ? "is-active" : ""}
          onClick={(event) => handlePageClick(event, page)}
        >
          {page}
        </a>
      ))}

      <a
        title="next"
        href="#"
        className={isLastPage ? "is-disabled-nav" : ""}
        onClick={handleNextClick}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </nav>
  );
}

export default Pagination;
