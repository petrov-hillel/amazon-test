import React from "react";

export default function Pagination({
   totalPages,
   currentPage,
   onPage,
} : {
    totalPages: number,
    currentPage: number,
    onPage: (page: number) => void,
}) {
    const pages = Array(totalPages).fill(null).map((_, index) => (
        <button className={`btn-small ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => onPage(index)}
        >
            {index + 1}
        </button>
    ));

    const hasLeftPage = currentPage > 1;
    const hasRightPage = currentPage < totalPages;

    return (
        <div className="flex items-center gap-2 justify-center mt-6">
            <button
                className="btn-small"
                onClick={() => onPage(0)}
                disabled={!hasLeftPage}
            >
                {'<<'}
            </button>
            <button
                className="btn-small"
                onClick={() => onPage(currentPage - 2)}
                disabled={!hasLeftPage}
            >
                {'<'}
            </button>
            {pages}
            <button
                className="btn-small"
                onClick={() => onPage(currentPage)}
                disabled={!hasRightPage}
            >
                {'>'}
            </button>
            <button
                className="btn-small"
                onClick={() => onPage(totalPages - 1)}
                disabled={!hasRightPage}
            >
                {'>>'}
            </button>
        </div>
    )
}