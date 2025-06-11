import styles from "./Main.module.scss";

import Slider from "../Swiper/Swiper";
import OrderForm from "../OrderForm/OrderForm";

const Main = () => {
    return (
        <main>
            <div className="product">
                <Slider />
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
                    <OrderForm />
                </div>
            </div>
        </main>
    );
};

export default Main;
