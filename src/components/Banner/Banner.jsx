import styles from './Banner.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import BannerImg from '../../assets/banner.jpg'
import BannerImg2 from '../../assets/banner2.jpg'

import { Link } from 'react-router-dom';

const Banner = () => {
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
            loop={true}
            modules={[Pagination, Autoplay, EffectFade]}
            className={styles.bannerWrapper}
        >
            <SwiperSlide>
                <div className={styles.bannerBox}>
                    <img src={BannerImg} alt='banner' className={styles.bannerImage}/>
                    <div className={styles.bannerContent}>
                        <div className={styles.bannerContainer}>
                            <div className={styles.banerCol}>
                                <span className={styles.tag}>Weekend Discount</span>
                                <strong className={styles.bannerHeading}>Shopping with us for better quality and the best price</strong>
                                <p className={styles.bannerText}>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                                <Link to="/shop" className={styles.bannerBtn}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.bannerBox}>
                    <img src={BannerImg2} alt='banner' className={styles.bannerImage}/>
                    <div className={styles.bannerContent}>
                        <div className={styles.bannerContainer}>
                            <div className={styles.banerCol}>
                                <span className={styles.tag}>Weekend Discount</span>
                                <strong className={styles.bannerHeading}>The one supermarket that makes your life easy and better</strong>
                                <p className={styles.bannerText}>We have prepared special discounts for you on grocery products. Don't miss these opportunities...</p>
                                <Link to="/shop" className={styles.bannerBtn}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner