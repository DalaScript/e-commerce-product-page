import styles from "./Header.module.scss";

import cartIcon from "../../assets/images/icon-cart.svg";
import user from "../../assets/images/image-avatar.png";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar />
            <div className={styles["header__right-side"]}>
                <img src={cartIcon} alt="shopping cart icon" />
                <img className={styles["header__user"]} src={user} alt="user" />
            </div>
        </header>
    );
};

export default Header;
