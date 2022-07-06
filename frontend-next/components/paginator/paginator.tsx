import { Fragment } from 'react';

interface PaginatorProps {
  arr: Array<any>;
  changePage: (set: number) => void;
  currentPage: number;
  numberItemsPerPage: number;
}

export const Paginator = ({
  arr,
  changePage,
  currentPage,
  numberItemsPerPage,
}: PaginatorProps) => {
  return (
    <Fragment>
      {arr.length / numberItemsPerPage > 1 && (
        <section>
          <button
            onClick={() =>
              changePage(
                arr.length > currentPage + numberItemsPerPage
                  ? currentPage + numberItemsPerPage
                  : currentPage
              )
            }
          >
            Siguiente
          </button>
          <button
            onClick={() =>
              changePage(
                currentPage === 0
                  ? currentPage
                  : currentPage - numberItemsPerPage
              )
            }
          >
            Anterior
          </button>
        </section>
      )}
    </Fragment>
  );
};
