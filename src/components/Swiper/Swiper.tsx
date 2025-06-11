import styles from "./Swiper.module.scss";

import product1 from "../../assets/images/image-product-1.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product4 from "../../assets/images/image-product-4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.scss";

// import required modules
import { Navigation } from "swiper/modules";

const Slider = () => {
    const productImgs = [product1, product2, product3, product4];

    return (
        <div className={`${styles['swiper']} swiper`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                // allowTouchMove={false}
                className="mySwiper"
            >
                {productImgs.map((image, index) => (
                    <SwiperSlide
                        className={`${styles["swiper__slide"]} swiper__slide`}
                        key={index}
                    >
                        <img
                            className={`${styles["swiper__slide-img"]} swiper__slide-img`}
                            src={image}
                            alt="sneaker preview"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
