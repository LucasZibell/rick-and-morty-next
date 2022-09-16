import styles from "../styles/Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <span>Filter</span>
      <select>
        <option value="" selected>
          All
        </option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select>
        <option value="" selected>
          All
        </option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      Como esta la banda
    </div>
  );
}

export default Sidebar;
