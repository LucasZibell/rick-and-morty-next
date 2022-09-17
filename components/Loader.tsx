import ScaleLoader from "react-spinners/ScaleLoader";

import styles from "../styles/Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <ScaleLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
