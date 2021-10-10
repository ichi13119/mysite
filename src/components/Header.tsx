import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/components/header.module.scss";

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 20) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const HeaderLinks = () => {
    return (
      <ul>
        <li
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link href="/blogs/1">
            <a>BLOGS</a>
          </Link>
        </li>
        <li
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header className={styles["c-header"]}>
      <Link href="/">
        <a>SHU ICHIHARA</a>
      </Link>
      <nav className={styles["c-header__menu"]}>{HeaderLinks()}</nav>
      <button
        className={styles["c-header__burger"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            isOpen === true
              ? `${styles["c-header__burger-line"]} ${styles["open"]}`
              : isTop === false
              ? `${styles["c-header__burger-line"]} ${styles["transcolor"]}`
              : styles["c-header__burger-line"]
          }
        ></span>
      </button>
      <div
        className={
          isOpen === true
            ? `${styles["c-header__slide"]} ${styles["open"]}`
            : styles["c-header__slide"]
        }
      >
        {HeaderLinks()}
      </div>
    </header>
  );
};

export default Header;
