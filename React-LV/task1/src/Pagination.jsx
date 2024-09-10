import React from 'react';

const Pagination = ({ pageNumber, goPrev, goNext, totalPages }) => {
  const isPrevDisabled = pageNumber === 1;
  const isNextDisabled = pageNumber === totalPages;

  return (
    <div className="pagination">
      <button
        onClick={goPrev}
        className={`btn ${isPrevDisabled ? 'opacity disabled' : ''}`}
        disabled={isPrevDisabled}
      >
        {!isPrevDisabled && '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button
        onClick={goNext}
        className={`btn ${isNextDisabled ? 'opacity disabled' : ''}`}
        disabled={isNextDisabled}
      >
        {!isNextDisabled && '→'}
      </button>
    </div>
  );
};

export default Pagination;
