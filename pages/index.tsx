import type { NextPage } from "next";
import Sidebar from "../components/Sidebar";

import styles from "../styles/Home.module.scss";

const CharacterList: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.videoGrid}>
          <span className={styles.testText}>hello</span>
          <span className={styles.testText}>hello</span>
          <span className={styles.testText}>hello</span>
          <span className={styles.testText}>hello</span>
        </div>
      </div>
    </>
  );
};

export default CharacterList;
