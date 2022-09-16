import styles from "../styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <input placeholder="Name" className={styles.filterInput} />
      <select defaultValue="" className={styles.filterInput}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select defaultValue="" className={styles.filterInput}>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Sidebar;
