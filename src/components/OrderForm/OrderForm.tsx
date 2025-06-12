import { useState } from 'react';
import styles from './OrderForm.module.scss'

import plusIcon from "../../assets/images/icon-plus.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import CartIcon from "../../assets/images/icon-cart.svg?react";

const OrderForm = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    }

    

    return (
        <form
            className={`${styles["order-form"]}`}
        >
            <div
                className={`${styles["order-form__quantity-container"]} order-form__quantity-container`}
            >
                <button
                    type="button"
                    className={`${styles["order-form__quantity-decrement-btn"]} order-form__quantity-decrement-btn`}
                    onClick={decreaseQuantity}
                >
                    <img src={minusIcon} alt="decrease quantity" />
                </button>
                <span
                    className={`${styles["order-form__quantity"]} order-form__quantity`}
                >
                    {quantity}
                </span>
                <button
                    type="button"
                    className={`${styles["order-form__quantity-increment-btn"]} order-form__quantity-increment-btn`}
                    onClick={increaseQuantity}
                >
                    <img src={plusIcon} alt="increase quantity" />
                </button>
            </div>
            <button
                className={`${styles["order-form__add-to-cart-btn"]} order-form__add-to-cart-btn`}
            >
                <CartIcon
                    width={17.5}
                    height={16}
                    viewBox="0 0 21.76 19.95"
                    className={`${styles["order-form__add-to-cart-btn-icon"]}`}
                />{" "}
                Add to cart
            </button>
        </form>
    );
};

export default OrderForm;
