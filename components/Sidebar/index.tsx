import { useState, useEffect, ChangeEvent } from "react";

import styles from "./styles.module.scss";

type Props = {
  onNameChange: (value: string) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Sidebar = ({ onSelectChange, onNameChange }: Props) => {
  const [typedName, setEvent] = useState<string>("");

  useEffect(() => {
    const debounce = setTimeout(() => onNameChange(typedName), 500);

    return () => clearTimeout(debounce);
  }, [typedName]);

  return (
    <div className={styles.sidebarContainer}>
      <input
        id="name"
        onChange={(e) => setEvent(e.target.value)}
        placeholder="Name"
        className={styles.filterInput}
      />
      <select
        id="status"
        onChange={onSelectChange}
        defaultValue=""
        className={styles.filterInput}
      >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        id="gender"
        onChange={onSelectChange}
        defaultValue=""
        className={styles.filterInput}
      >
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default Sidebar;
