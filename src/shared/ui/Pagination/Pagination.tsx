import clsx from 'clsx';
import './Pagination.scss';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const result: (number | '...')[] = [];
  const left = current - 2;
  const right = current + 2;

  result.push(1);

  if (left > 2) {
    result.push('...');
  }

  for (let i = Math.max(2, left); i <= Math.min(total - 1, right); i++) {
    result.push(i);
  }

  if (right < total - 1) {
    result.push('...');
  }

  result.push(total);

  return result;
}

export const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getPageNumbers(page, totalPages);

  const renderPage = (p: number | '...', i: number) => {
    if (p === '...') {
      return (
        <span key={`ellipsis-${i}`} className="pagination__ellipsis">
          ...
        </span>
      );
    }

    return (
      <button
        key={p}
        className={clsx('pagination__button', p === page && 'pagination__button_active')}
        onClick={() => onPageChange(p)}
        aria-label={`Страница ${p}`}
        aria-current={p === page ? 'page' : undefined}
      >
        {p}
      </button>
    );
  };

  return (
    <div className="pagination">
      {pages.map(renderPage)}
    </div>
  );
};
