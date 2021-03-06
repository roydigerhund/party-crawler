import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { classNames } from '~/utils/class-names';

type Viewable = 'always' | 'never';

type Props = { currentPage: number; perPage: number; total: number };

const Pagination = ({ currentPage, perPage, total }: Props) => {
  const numberOfPages = Math.ceil(total / perPage);

  // always 1 2 3? and 8? 9 10
  // n-2? n-1 n n+1 n+2?

  const pages = Array(numberOfPages)
    .fill(0)
    .map((_, i) => i + 1);

  const printablePages: { page: number; viewable: Viewable }[] = pages.map((page) => ({
    page,
    viewable: page < 2 || Math.abs(page - currentPage) < 2 || Math.abs(page - numberOfPages) < 1 ? 'always' : 'never',
  }));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return numberOfPages < 2 ? null : (
    <nav className="my-4 flex items-center justify-between border-t border-gray-200">
      <div className="-mt-px flex w-0 flex-1">
        <button
          form="search-and-pagination"
          name="page"
          value={currentPage > 1 ? currentPage - 1 : 1}
          type="submit"
          onClick={scrollToTop}
          className={classNames(
            'inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            currentPage === 1 && 'pointer-events-none opacity-40',
          )}
          disabled={currentPage === 1}
        >
          <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Zurück
        </button>
      </div>
      <div className="inline border-t-2 border-transparent pt-4 text-sm text-gray-500 md:hidden">
        Seite <span className="font-medium text-gray-700">{currentPage}</span> von{' '}
        <span className="font-medium text-gray-700">{numberOfPages}</span>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {printablePages.map(({ page, viewable }, i) =>
          viewable === 'always' ? (
            <button
              key={page}
              form="search-and-pagination"
              name="page"
              value={page}
              type="submit"
              onClick={scrollToTop}
              className={classNames(
                'inline-flex items-center border-t-2 px-3 pt-4 text-sm font-medium',
                page === currentPage
                  ? 'border-sky-500 text-sky-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              )}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ) : printablePages[i - 1]?.viewable !== 'never' ? (
            <span
              key={page}
              className="inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500"
            >
              ...
            </span>
          ) : (
            <React.Fragment key={page}></React.Fragment>
          ),
        )}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          form="search-and-pagination"
          name="page"
          value={currentPage < numberOfPages ? currentPage + 1 : numberOfPages}
          type="submit"
          onClick={scrollToTop}
          className={classNames(
            'inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            currentPage === numberOfPages && 'pointer-events-none opacity-50',
          )}
          disabled={currentPage === numberOfPages}
        >
          Weiter
          <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
