import { useState, useEffect, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";

import WhiteCrossIcon from "../../assets/white_cross.png";
import useIsMobile from "../../hooks/useIsMobile";

import { FilterReducerState, setSidebarOpen } from "../../redux/sidebarReducer";

import styles from "./styles.module.scss";

type Props = {
  onNameChange: (value: string) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Sidebar = ({ onSelectChange, onNameChange }: Props) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: FilterReducerState) => state.sidebar.isSidebarOpen
  );

  const [typedName, setEvent] = useState<string>("");

  const handleOnClose = () => dispatch(setSidebarOpen(false));

  useEffect(() => {
    const debounce = setTimeout(() => onNameChange(typedName), 500);

    return () => clearTimeout(debounce);
  }, [typedName]);

  const WrapperComponent = isMobile ? Menu : "div";

  return (
    <WrapperComponent
      isOpen={isSidebarOpen}
      className={styles.sidebarContainer}
      customBurgerIcon={false}
      onClose={handleOnClose}
    >
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
      {isMobile && (
        <button
          type="button"
          onClick={handleOnClose}
          className={styles.closeIcon}
        >
          <Image
            src={WhiteCrossIcon}
            alt="White cross icon"
            width={20}
            height={20}
          />
        </button>
      )}
    </WrapperComponent>
  );
};

export default Sidebar;
