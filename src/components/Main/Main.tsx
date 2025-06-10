import styles from "./Main.module.scss";

import product1 from "../../assets/images/image-product-1.jpg";
import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
// import { ReactComponent as CartIcon } from "../../assets/images/icon-cart.svg";
// import { ReactComponent as CartIcon } from '../../assets/images/icon-cart.svg';
import CartIcon from "../../assets/images/icon-cart.svg?component";

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
                <div className="product__details">
                    <div className="product__text">
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
                    <div className="product__price-section">
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
                        <p
                            className={`${styles["product__original-price"]} product__original-price`}
                        >
                            $250.00
                        </p>
                    </div>
                    <div className="product__add-to-cart-section">
                        <div
                            className={`${styles["product__quantity-container"]} product__quantity-container`}
                        >
                            <button
                                className={`${styles["product__quantity-decrement-btn"]} product__quantity-decrement-btn`}
                            >
                                <img src={minusIcon} alt="decrease quantity" />
                            </button>
                            <p className="product__quantity">0</p>
                            <button
                                className={`${styles["product__quantity-increment-btn"]} product__quantity-increment-btn`}
                            >
                                <img src={plusIcon} alt="increase quantity" />
                            </button>
                        </div>
                        <button
                            className={`${styles["product__add-to-cart-btn"]} product__add-to-cart-btn`}
                        >
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
