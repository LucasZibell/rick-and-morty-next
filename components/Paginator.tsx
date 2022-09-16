import styles from "../styles/Paginator.module.scss";

type Props = {
  currentPage: number;
  totalPages: number | undefined;
};

const Paginator = ({ currentPage, totalPages }: Props) => {
  return (
    <div className={styles.containerPaginator}>
      <button type="button">{"<"}</button>
      <span className={styles.pages}>{1}</span>
      <input className={styles.pageInput} type="number" value={currentPage} />
      <span className={styles.pages}>{totalPages}</span>
      <button type="button">{">"}</button>
    </div>
  );
};

export default Paginator;
