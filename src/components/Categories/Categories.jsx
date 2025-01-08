import styles from './Categories.module.css'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/category/get-categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
                }
            } catch (error) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    });
                } else {
                    toast.error(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    });
                }
            }
        }
        fetchCategories();
    }, [])
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
                    {
                        categories.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.categoryBox}>
                                        <img src={`http://localhost:5000/uploads/categories/${item.thumbnail}`} className={styles.categoryImage} alt="category"/>
                                        <h4 className={styles.cartegoryTitle}>{item.title}</h4>
                                        <Link className={styles.categoryLink} to={`/shop?cat=${item._id}`}></Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Categories