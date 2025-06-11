import styles from "./Main.module.scss";

import product1 from "../../assets/images/image-product-1.jpg";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import CartIcon from "../../assets/images/icon-cart.svg?react";

const Main = () => {
    return (
        <main>
            <div className="product">
                <div className={`${styles["product__slider"]} product__slider`}>
                    <img
                        className={`${styles["product__slider-img"]} product__slider-img`}
                        src={product1}
                        alt="sneaker preview"
                    />
                </div>
                <div
                    className={`${styles["product__details"]} product__details`}
                >
                    <div className={`${styles["product__text"]} product__text`}>
                        <p
                            className={`${styles["product__company-name"]} product__company-name`}
                        >
                            Sneaker Company
                        </p>
                        <h1
                            className={`${styles["product__title"]} product__title`}
                        >
                            Fall Limited Edition Sneakers
                        </h1>
                        <p
                            className={`${styles["product__description"]} product__description`}
                        >
                            These low-profile sneakers are your perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, they’ll withstand everything the weather can
                            offer.
                        </p>
                    </div>
                    <div
                        className={`${styles["product__price-section"]} product__price-section`}
                    >
                        <div
                            className={`${styles["product__price-and-discount"]} product__price-and-discount`}
                        >
                            <p
                                className={`${styles["product__current-price"]} product__current-price`}
                            >
                                $125.00
                            </p>
                            <div
                                className={`${styles["product__discount-badge"]} product__discount-badge`}
                            >
                                <p
                                    className={`${styles["product__discount"]} product__discount`}
                                >
                                    50%
                                </p>
                            </div>
                        </div>
                        <p
                            className={`${styles["product__original-price"]} product__original-price`}
                        >
                            $250.00
                        </p>
                    </div>
                    <div className={`${styles["product__add-to-cart-section"]} product__add-to-cart-section`}>
                        <div
                            className={`${styles["product__quantity-container"]} product__quantity-container`}
                        >
                            <button
                                className={`${styles["product__quantity-decrement-btn"]} product__quantity-decrement-btn`}
                            >
                                <img src={minusIcon} alt="decrease quantity" />
                            </button>
                            <span className={`${styles["product__quantity"]} product__quantity`}>3</span>
                            <button
                                className={`${styles["product__quantity-increment-btn"]} product__quantity-increment-btn`}
                            >
                                <img src={plusIcon} alt="increase quantity" />
                            </button>
                        </div>
                        <button
                            className={`${styles["product__add-to-cart-btn"]} product__add-to-cart-btn`}
                        >
                            <CartIcon
                                width={17.5}
                                height={16}
                                viewBox="0 0 21.76 19.95"
                                className={`${styles["product__add-to-cart-btn-icon"]}`}
                            /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
