import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import RickAndMortyLogo from "../../assets/rick-morty-logo.png";
import LeftArrow from "../../assets/left-arrow.png";

import styles from "./styles.module.scss";

const Navbar = () => {
  const router = useRouter();

  const isDetailsPage = router.pathname === "/character/[id]";

  return (
    <div className={styles.navbarContainer}>
      {isDetailsPage && (
        <Link href="/">
          <a>
            <Image
              className={styles.logoLink}
              src={LeftArrow}
              alt="rick and morty"
              width={20}
              height={20}
            />
          </a>
        </Link>
      )}
      <Image
        className={styles.logoLink}
        src={RickAndMortyLogo}
        alt="rick and morty"
        width={200}
        height={50}
      />
    </div>
  );
};

export default Navbar;
