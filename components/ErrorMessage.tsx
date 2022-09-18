import styles from "../styles/Error.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorMessage}>
        {"We couldn't retrieve what you were looking for."}
      </span>
    </div>
  );
};

export default ErrorMessage;
