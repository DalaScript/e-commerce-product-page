import { useState } from "react";
import styles from "./NavBar.module.scss";

import menuIcon from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import closeIcon from "../../assets/images/icon-close.svg";

const NavBar = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    const openMenu = () => {
        setMenuIsOpen(true);
    };

    return (
        <nav className={styles["navbar"]}>
            <button
                className={styles["navbar__open-btn"]}
                onClick={openMenu}
                type="button"
                disabled={menuIsOpen}
            >
                <img src={menuIcon} alt="hamburger menu icon" />
            </button>
            <img src={logo} alt="logo of webpage" />
            {/* <div className={`navbar__overlay${menuIsOpen ? ' navbar__overlay--show': ''}`}  ></div> */}
            <div
                className={`${styles["navbar__overlay"]} ${menuIsOpen ? styles["navbar__overlay--show"] : ""}`}
                onClick={closeMenu}
            ></div>
            <ul
                className={`${styles["navbar__list"]} ${menuIsOpen ? styles["navbar__list--show"] : ""}`}
            >
                <button className={styles["navbar__close-btn"]} onClick={closeMenu} type="button">
                    <img
                        className={styles["navbar__close-icon"]}
                        src={closeIcon}
                        alt="close icon"
                    />
                </button>
                {navLinks.map((li, i) => (
                    <li className={styles["navbar__list-item"]} key={i}>
                        <a className={styles["navbar__link"]} onClick={closeMenu} href="#">
                            {li}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
