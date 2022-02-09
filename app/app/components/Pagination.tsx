import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'remix';

type Viewable = 'always' | 'sometimes' | 'never';

type Props = { currentPage: number; perPage: number; total: number };

const Pagination = ({ currentPage, perPage, total }: Props) => {
  const numberOfPages = Math.ceil(total / perPage);
  const currentIndex = currentPage - 1;

  // always 1 2 3? and 8? 9 10
  // n-2? n-1 n n+1 n+2?

  const pages = Array(numberOfPages)
    .fill(0)
    .map((_, i) => i + 1);

  const printablePages: { page: number; viewable: Viewable }[] = pages.map((page) => ({
    page,
    viewable:
      page < 2 || Math.abs(page - currentPage) < 2 || Math.abs(page - numberOfPages) < 1
        ? 'always'
        : page < 3 || Math.abs(page - currentPage) < 3 || Math.abs(page - numberOfPages) < 2
        ? 'sometimes'
        : 'never',
  }));

  const onPageClick = (page: number) => {};

  return numberOfPages < 2 ? null : (
    <div className="mt-4 flex items-center justify-between border-t border-gray-200 bg-white py-3">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          to={`?page=${currentPage > 1 ? currentPage : 1}`}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          to={`?page=${currentPage < numberOfPages ? currentPage : numberOfPages}`}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{total === 0 ? 0 : currentIndex * perPage + 1}</span> to{' '}
            <span className="font-medium">{Math.min(currentPage * perPage, total)}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <Link
              to={`?page=${currentPage > 1 ? currentPage : 1}`}
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
            {printablePages.map(({ page, viewable }, i) =>
              viewable === 'always' || viewable === 'sometimes' ? (
                <Link
                  key={page}
                  to={`?page=${page}`}
                  prefetch="intent"
                  className={`relative items-center border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-50 ${
                    viewable === 'always' ? 'inline-flex' : 'hidden xl:inline-flex'
                  } ${page === currentPage ? 'font-bold text-indigo-700' : 'font-medium text-gray-700'}`}
                >
                  {page}
                </Link>
              ) : printablePages[i - 1]?.viewable !== 'never' ? (
                <span
                  key={page}
                  className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
                >
                  ...
                </span>
              ) : (
                <React.Fragment key={page}></React.Fragment>
              ),
            )}
            <Link
              to={`?page=${currentPage < numberOfPages ? currentPage : numberOfPages}`}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
