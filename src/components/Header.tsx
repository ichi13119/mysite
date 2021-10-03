import Link from "next/link";

import styles from "../styles/components/header.module.scss";

const Header = () => {
  return (
    <header className={styles["c-header"]}>
      <Link href="/">
        <a>SHU ICHIHARA</a>
      </Link>
      <nav className={styles["c-header__menu"]}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/blogs/1">
          <a>BLOGS</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
