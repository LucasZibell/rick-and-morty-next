import Link from "next/link";
import styles from "./styles.module.scss";

const ErrorMessage = () => {
  return (
    <div className={styles.errorContainer}>
      <span className={styles.errorMessage}>
        {"We couldn't retrieve what you were looking for."}
      </span>
      <Link href="/">
        <span className={styles.goBackLink}>
          {"> Go back to the main page <"}
        </span>
      </Link>
    </div>
  );
};

export default ErrorMessage;
