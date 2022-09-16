import Image from "next/image";
import RickAndMortyLogo from "../assets/rick-morty-logo.png";

import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Image
        src={RickAndMortyLogo}
        alt="rick and morty"
        width={200}
        height={50}
      />
    </div>
  );
}

export default Navbar;
