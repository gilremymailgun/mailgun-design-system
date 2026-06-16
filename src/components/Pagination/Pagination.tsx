import React, { useState } from 'react';
import './Pagination.css';

export type PaginationVariant = 'complete' | 'mirrored' | 'no-toggle';
export type PageSize = 10 | 20 | 30;

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  pageSize?: PageSize;
  pageSizeOptions?: PageSize[];
  variant?: PaginationVariant;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: PageSize) => void;
}

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PageNavigator = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const getPages = () => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    pages.push(1);
    if (currentPage > 3) pages.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  };

  return (
    <div className="mg-pagination__navigator" role="navigation" aria-label="Pagination">
      <button
        className="mg-pagination__nav-btn"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        <ArrowLeftIcon />
      </button>
      <button
        className="mg-pagination__nav-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeftIcon />
      </button>

      {getPages().map((page, i) =>
        page === '...' ? (
          <span key={`ellipsis-${i}`} className="mg-pagination__ellipsis">…</span>
        ) : (
          <button
            key={page}
            className={`mg-pagination__page-btn ${page === currentPage ? 'mg-pagination__page-btn--active' : ''}`}
            onClick={() => onPageChange(page as number)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className="mg-pagination__nav-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRightIcon />
      </button>
      <button
        className="mg-pagination__nav-btn"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Last page"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

const PageSizeSelector = ({
  pageSize,
  options,
  onPageSizeChange,
}: {
  pageSize: PageSize;
  options: PageSize[];
  onPageSizeChange: (size: PageSize) => void;
}) => (
  <div className="mg-pagination__sizer" role="group" aria-label="Rows per page">
    {options.map((size, index) => {
      const isFirst = index === 0;
      const isLast = index === options.length - 1;
      return (
        <button
          key={size}
          className={[
            'mg-pagination__sizer-btn',
            size === pageSize ? 'mg-pagination__sizer-btn--selected' : '',
            isFirst ? 'mg-pagination__sizer-btn--first' : '',
            isLast ? 'mg-pagination__sizer-btn--last' : '',
          ].filter(Boolean).join(' ')}
          onClick={() => onPageSizeChange(size)}
          aria-pressed={size === pageSize}
        >
          {size}
        </button>
      );
    })}
  </div>
);

export const Pagination = ({
  currentPage: controlledPage,
  totalPages = 10,
  pageSize: controlledPageSize,
  pageSizeOptions = [10, 20, 30],
  variant = 'complete',
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const [internalPage, setInternalPage] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState<PageSize>(pageSizeOptions[0]);

  const currentPage = controlledPage ?? internalPage;
  const pageSize = controlledPageSize ?? internalPageSize;

  const handlePageChange = (page: number) => {
    setInternalPage(page);
    onPageChange?.(page);
  };

  const handlePageSizeChange = (size: PageSize) => {
    setInternalPageSize(size);
    onPageSizeChange?.(size);
  };

  const navigator = (
    <PageNavigator
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );

  const sizer = (
    <PageSizeSelector
      pageSize={pageSize}
      options={pageSizeOptions}
      onPageSizeChange={handlePageSizeChange}
    />
  );

  return (
    <div className={`mg-pagination mg-pagination--${variant}`}>
      {variant === 'complete' && <>{sizer}{navigator}</>}
      {variant === 'mirrored' && <>{navigator}{sizer}</>}
      {variant === 'no-toggle' && <>{navigator}</>}
    </div>
  );
};

export default Pagination;
