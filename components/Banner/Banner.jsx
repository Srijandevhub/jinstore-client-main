import styles from './Banner.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import BannerImg from '../../assets/banner.jpg'
import BannerImg2 from '../../assets/banner2.jpg'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/banner/get-banners");
                if (res.status === 200) {
                    setBanners(res.data.banners);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchBanners();
    }, [])
    return (
        <Swiper 
            pagination={{
                dynamicBullets: true
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            effect='fade'
            fadeEffect={{
                crossFade: true
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className={styles.bannerWrapper}
        >
            {
                banners.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={styles.bannerBox}>
                                <img src={`http://localhost:5000/uploads/banners/${item.image}`} alt='banner' className={styles.bannerImage}/>
                                <div className={styles.bannerContent}>
                                    <div className={styles.bannerContainer}>
                                        <div className={styles.banerCol}>
                                            <span className={styles.tag}>Weekend Discount</span>
                                            <strong className={styles.bannerHeading}>{item.heading}</strong>
                                            <p className={styles.bannerText}>{item.description}</p>
                                            <Link to={item.slug} className={styles.bannerBtn}>Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Banner