import styles from './Categories.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Cat1 from '../../assets/Fruits.png'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className={styles.categoryWrapper}>
            <div className={styles.categoryContainer}>
                <Swiper breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    },
                    500: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    900: {
                        slidesPerView: 6,
                        spaceBetween: 15
                    },
                    1000: {
                        slidesPerView: 7,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 8,
                        spaceBetween: 20
                    },
                    1400: {
                        slidesPerView: 9,
                        spaceBetween: 30
                    }
                }}>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.categoryBox}>
                            <img src={Cat1} className={styles.categoryImage} alt="category"/>
                            <h4 className={styles.cartegoryTitle}>Fruits & Vegetables</h4>
                            <Link className={styles.categoryLink} to="/shop"></Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Categories