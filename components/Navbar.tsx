import Image from "next/image";
import Link from "next/link";
import RickAndMortyLogo from "../assets/rick-morty-logo.png";

import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/">
        <a>
          <Image
            className={styles.logoLink}
            src={RickAndMortyLogo}
            alt="rick and morty"
            width={200}
            height={50}
          />
        </a>
      </Link>
    </div>
  );
}

export default Navbar;
