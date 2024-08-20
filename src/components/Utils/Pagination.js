import React from 'react';

const Pagination = ({ page, maxPage, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        });
    };

    const handleNextPage = () => {
        setPage((prevState) => prevState !== maxPage ? prevState + 1 : prevState);
        scrollTop();
    };

    const handlePrevPage = () => {
        setPage((prevState) => prevState !== 1 ? prevState - 1 : prevState);
        scrollTop();
    };

    const handlePageClick = (pageNum) => {
        setPage(pageNum);
        scrollTop();
    };

    const handleFirstPage = () => {
        setPage(1);
        scrollTop();
    };

    const handleLastPage = () => {
        setPage(maxPage);
        scrollTop();
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const startPage = Math.max(1, page - 2); // start at (current page - 2), but not less than 1
        const endPage = Math.min(maxPage, page + 2); // end at (current page + 2), but not more than maxPage

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`transition-all hover:text-color-primary ${i === page ? 'font-bold text-color-primary' : ''} font-normal`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className='flex justify-center items-center py-4 px-2 gap-4 text-color-accent md:text-2xl text-sm'>
            <button onClick={handleFirstPage} className='transition-all hover:text-color-primary' disabled={page === 1}>
                &lt;&lt;
                {/* First */}
            </button>
            <button onClick={handlePrevPage} className='transition-all hover:text-color-primary' disabled={page === 1}>
                &lt;
                {/* Prev */}
            </button>
            <div className="flex gap-2">
                {renderPageNumbers()}
            </div>
            <p>of {maxPage}</p>
            <button onClick={handleNextPage} className='transition-all hover:text-color-primary' disabled={page === maxPage}>
                &gt;
                {/* Next */}
            </button>
            <button onClick={handleLastPage} className='transition-all hover:text-color-primary' disabled={page === maxPage}>
                &gt;&gt;
                {/* Last */}
            </button>
        </div>
    );
};

export default Pagination;
