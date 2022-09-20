import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";
import HamburgerIcon from "../../assets/hamburger_icon.png";
import RickAndMortyLogo from "../../assets/rick-morty-logo.png";
import LeftArrow from "../../assets/left-arrow.png";

import { setSidebarOpen } from "../../redux/sidebarReducer";

import styles from "./styles.module.scss";

const Navbar = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const router = useRouter();

  const isDetailsPage = router.pathname === "/character/[id]";
  const isHomePage = router.pathname === "/";

  const onToogleOpen = () => dispatch(setSidebarOpen(true));

  return (
    <div className={styles.navbarContainer}>
      <button
        className={`${styles.hamburger} ${
          isHomePage && isMobile ? "" : "hidden"
        }`}
        onClick={onToogleOpen}
      >
        <Image
          src={HamburgerIcon}
          alt="hamburger icon"
          width={20}
          height={20}
        />
      </button>
      <div className={`${styles.back} ${isDetailsPage ? "" : "hidden"}`}>
        <Link href="/">
          <a>
            <Image src={LeftArrow} alt="back button" width={20} height={20} />
          </a>
        </Link>
      </div>
      <div className={styles.logo}>
        <Image
          src={RickAndMortyLogo}
          alt="rick and morty"
          width={200}
          height={50}
        />
      </div>
    </div>
  );
};

export default Navbar;
