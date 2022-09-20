import styles from "./styles.module.scss";

type Props = {
  onChangePage: (page: number) => void;
  currentPage: number;
  totalPages: number;
};

const Paginator = ({ onChangePage, currentPage, totalPages }: Props) => {
  const prevPage = () => {
    if (currentPage <= 1) return;
    onChangePage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage >= totalPages) return;
    onChangePage(currentPage + 1);
  };

  const goToFirstPage = () => onChangePage(1);

  const goToLastPage = () => onChangePage(totalPages);

  return (
    <div className={styles.containerPaginator}>
      <button
        className={styles.paginatorButton}
        type="button"
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      <button
        type="button"
        className={styles.paginatorButton}
        onClick={goToFirstPage}
      >
        {1}
      </button>
      <span className={styles.pageInput}>{currentPage}</span>
      <button
        type="button"
        className={styles.paginatorButton}
        onClick={goToLastPage}
      >
        {totalPages}
      </button>
      <button
        className={styles.paginatorButton}
        type="button"
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
