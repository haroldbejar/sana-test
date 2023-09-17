import "../css/paginatedStyle.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
      }
    };
  
    return (
      <div className="pagination-container">
        <button
          className="pagination-button"
          disabled={isFirstPage}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &#8592; Anterior
        </button>
        <span className="page-indicator">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="pagination-button"
          disabled={isLastPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Siguiente &#8594;
        </button>
      </div>
    );
  };

  export default Pagination;