import styles from "../styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <input placeholder="Name" className={styles.filterInput} />
      <select className={styles.filterInput}>
        <option value="" selected>
          All
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select className={styles.filterInput}>
        <option value="" selected>
          All
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Sidebar;
