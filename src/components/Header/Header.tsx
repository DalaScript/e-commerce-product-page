import styles from "./Header.module.scss";

import menuIcon from "../../assets/images/icon-menu.svg";
import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import user from "../../assets/images/image-avatar.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles["header__left-side"]}>
                <img src={menuIcon} alt="hamburger menu icon" />
                <img src={logo} alt="logo of webpage" />
            </div>
            <div className={styles["header__right-side"]}>
                <img src={cartIcon} alt="shopping cart icon" />
                <img className={styles["header__user"]} src={user} alt="user" />
            </div>
        </header>
    );
};

export default Header;
