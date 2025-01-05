import Headings from '../Headings/Headings'
import styles from './TopProducts.module.css'

import Apple from '../../assets/apple.png'
import { Link } from 'react-router-dom'

const TopProducts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Headings heading={"Top Products"} subheading={"New products with updated stocks."} link='/shop'/>
                <div className={styles.row}>
                    <div className={styles.col1}>
                        <div className={styles.productBox1}>
                            <div className={styles.productBoxHeader}>
                                <div className={styles.productBoxHeaderInner}>
                                    <img src={Apple} alt="apple" className={styles.productImage}/>
                                    <span className={styles.discount}>75%</span>
                                    <button className={styles.wishlistBtn}>
                                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.991 0.340027C12.2284 0.340027 11.4987 0.505028 10.802 0.835028C10.1054 1.16503 9.52237 1.60869 9.05304 2.16603C8.59837 1.57936 8.02637 1.12836 7.33704 0.813026C6.64771 0.497694 5.90704 0.340027 5.11504 0.340027C4.22037 0.340027 3.38437 0.560026 2.60704 1.00003C1.85904 1.42536 1.26504 2.00469 0.825039 2.73803C0.385039 3.47136 0.165039 4.26336 0.165039 5.11403C0.165039 6.71269 0.597706 8.28936 1.46304 9.84403C2.15237 11.0907 3.11304 12.3007 4.34504 13.474C5.22504 14.3247 6.20771 15.1094 7.29304 15.828C7.96771 16.2974 8.46637 16.6054 8.78904 16.752C8.84771 16.8107 8.93571 16.84 9.05304 16.84C9.17037 16.84 9.29504 16.8107 9.42704 16.752C9.77904 16.576 10.2777 16.268 10.923 15.828C11.9937 15.1094 12.9764 14.3247 13.871 13.474C15.0884 12.3007 16.0417 11.0907 16.731 9.84403C17.5964 8.28936 18.029 6.71269 18.029 5.11403C18.029 4.26336 17.8017 3.47136 17.347 2.73803C16.8924 2.00469 16.2764 1.42169 15.499 0.989027C14.7217 0.55636 13.8857 0.340027 12.991 0.340027ZM9.05304 15.366C8.11437 14.794 7.24904 14.1854 6.45704 13.54C5.06371 12.4107 3.96371 11.2447 3.15704 10.042C2.07171 8.44336 1.52904 6.83003 1.52904 5.20203C1.52904 4.57136 1.69404 3.98836 2.02404 3.45303C2.35404 2.91769 2.79404 2.49236 3.34404 2.17703C3.89404 1.86169 4.48437 1.70403 5.11504 1.70403C5.84837 1.70403 6.51204 1.89469 7.10604 2.27603C7.70004 2.65736 8.13637 3.17069 8.41504 3.81603C8.47371 3.96269 8.58737 4.06536 8.75604 4.12403C8.92471 4.18269 9.10071 4.18269 9.28404 4.12403C9.46737 4.06536 9.60304 3.96269 9.69104 3.81603C9.96971 3.17069 10.4097 2.65736 11.011 2.27603C11.6124 1.89469 12.2724 1.70403 12.991 1.70403C13.651 1.70403 14.256 1.86169 14.806 2.17703C15.356 2.49236 15.7887 2.91769 16.104 3.45303C16.4194 3.98836 16.577 4.57136 16.577 5.20203C16.577 6.80069 16.0344 8.39936 14.949 9.99803C14.1277 11.2007 13.0277 12.374 11.649 13.518C10.8277 14.1927 9.96237 14.8087 9.05304 15.366Z" fill="#030712"/>
                                        </svg>
                                    </button>
                                    <span className={styles.organic}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.29199 3.70807H0.666992C0.666992 6.84107 3.21499 9.38907 6.36099 9.38907V12.6391C6.36099 13.1071 6.72499 13.4841 7.14099 13.4841C7.55699 13.4841 7.98599 13.1071 7.98599 12.6651V9.41507C7.98599 6.26907 5.43799 3.70807 2.29199 3.70807ZM12.042 2.09607C9.89699 2.09607 8.05099 3.27907 7.07599 5.03407C7.77799 5.78807 8.29799 6.72407 8.57099 7.76407C11.431 7.46507 13.667 5.04707 13.667 2.09607H12.042Z" fill="#166534"/>
                                        </svg>
                                        Organic
                                    </span>
                                    <button className={styles.cartBtn}>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.872 5.12604H5.728V0.918038C5.728 0.779372 5.68 0.656705 5.584 0.550038C5.488 0.443372 5.36 0.390038 5.2 0.390038C5.04 0.390038 4.912 0.443372 4.816 0.550038C4.72 0.656705 4.672 0.779372 4.672 0.918038V5.06204H0.528C0.389333 5.06204 0.266667 5.11004 0.16 5.20604C0.0533333 5.30204 0 5.43271 0 5.59804C0 5.76337 0.048 5.89137 0.144 5.98204C0.24 6.07271 0.368 6.11804 0.528 6.11804H4.672V10.262C4.672 10.4007 4.72 10.5234 4.816 10.63C4.912 10.7367 5.04267 10.79 5.208 10.79C5.37333 10.79 5.50133 10.742 5.592 10.646C5.68267 10.55 5.728 10.422 5.728 10.262V6.11804H9.872C10.0107 6.11804 10.1333 6.07004 10.24 5.97404C10.3467 5.87804 10.4 5.75004 10.4 5.59004C10.4 5.43004 10.3493 5.31271 10.248 5.23804C10.1467 5.16337 10.0213 5.12604 9.872 5.12604Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <Link to="/shop" className={styles.blankLink}></Link>
                                </div>
                            </div>
                            <div className={styles.productBody}>
                                <h4 className={styles.productName}><Link to="/shop">100 Percent Apple Juice – 64 fl oz Bottle</Link></h4>
                                <div className={styles.priceSec}>
                                    <span className={styles.priceMain}>Rs. 120</span>
                                    <span className={styles.priceNot}>Rs. 140</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col1}>
                        <div className={styles.productBox1}>
                            <div className={styles.productBoxHeader}>
                                <div className={styles.productBoxHeaderInner}>
                                    <img src={Apple} alt="apple" className={styles.productImage}/>
                                    <span className={styles.discount}>75%</span>
                                    <button className={styles.wishlistBtn}>
                                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.991 0.340027C12.2284 0.340027 11.4987 0.505028 10.802 0.835028C10.1054 1.16503 9.52237 1.60869 9.05304 2.16603C8.59837 1.57936 8.02637 1.12836 7.33704 0.813026C6.64771 0.497694 5.90704 0.340027 5.11504 0.340027C4.22037 0.340027 3.38437 0.560026 2.60704 1.00003C1.85904 1.42536 1.26504 2.00469 0.825039 2.73803C0.385039 3.47136 0.165039 4.26336 0.165039 5.11403C0.165039 6.71269 0.597706 8.28936 1.46304 9.84403C2.15237 11.0907 3.11304 12.3007 4.34504 13.474C5.22504 14.3247 6.20771 15.1094 7.29304 15.828C7.96771 16.2974 8.46637 16.6054 8.78904 16.752C8.84771 16.8107 8.93571 16.84 9.05304 16.84C9.17037 16.84 9.29504 16.8107 9.42704 16.752C9.77904 16.576 10.2777 16.268 10.923 15.828C11.9937 15.1094 12.9764 14.3247 13.871 13.474C15.0884 12.3007 16.0417 11.0907 16.731 9.84403C17.5964 8.28936 18.029 6.71269 18.029 5.11403C18.029 4.26336 17.8017 3.47136 17.347 2.73803C16.8924 2.00469 16.2764 1.42169 15.499 0.989027C14.7217 0.55636 13.8857 0.340027 12.991 0.340027ZM9.05304 15.366C8.11437 14.794 7.24904 14.1854 6.45704 13.54C5.06371 12.4107 3.96371 11.2447 3.15704 10.042C2.07171 8.44336 1.52904 6.83003 1.52904 5.20203C1.52904 4.57136 1.69404 3.98836 2.02404 3.45303C2.35404 2.91769 2.79404 2.49236 3.34404 2.17703C3.89404 1.86169 4.48437 1.70403 5.11504 1.70403C5.84837 1.70403 6.51204 1.89469 7.10604 2.27603C7.70004 2.65736 8.13637 3.17069 8.41504 3.81603C8.47371 3.96269 8.58737 4.06536 8.75604 4.12403C8.92471 4.18269 9.10071 4.18269 9.28404 4.12403C9.46737 4.06536 9.60304 3.96269 9.69104 3.81603C9.96971 3.17069 10.4097 2.65736 11.011 2.27603C11.6124 1.89469 12.2724 1.70403 12.991 1.70403C13.651 1.70403 14.256 1.86169 14.806 2.17703C15.356 2.49236 15.7887 2.91769 16.104 3.45303C16.4194 3.98836 16.577 4.57136 16.577 5.20203C16.577 6.80069 16.0344 8.39936 14.949 9.99803C14.1277 11.2007 13.0277 12.374 11.649 13.518C10.8277 14.1927 9.96237 14.8087 9.05304 15.366Z" fill="#030712"/>
                                        </svg>
                                    </button>
                                    <span className={styles.organic}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.29199 3.70807H0.666992C0.666992 6.84107 3.21499 9.38907 6.36099 9.38907V12.6391C6.36099 13.1071 6.72499 13.4841 7.14099 13.4841C7.55699 13.4841 7.98599 13.1071 7.98599 12.6651V9.41507C7.98599 6.26907 5.43799 3.70807 2.29199 3.70807ZM12.042 2.09607C9.89699 2.09607 8.05099 3.27907 7.07599 5.03407C7.77799 5.78807 8.29799 6.72407 8.57099 7.76407C11.431 7.46507 13.667 5.04707 13.667 2.09607H12.042Z" fill="#166534"/>
                                        </svg>
                                        Organic
                                    </span>
                                    <button className={styles.cartBtn}>
                                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.872 5.12604H5.728V0.918038C5.728 0.779372 5.68 0.656705 5.584 0.550038C5.488 0.443372 5.36 0.390038 5.2 0.390038C5.04 0.390038 4.912 0.443372 4.816 0.550038C4.72 0.656705 4.672 0.779372 4.672 0.918038V5.06204H0.528C0.389333 5.06204 0.266667 5.11004 0.16 5.20604C0.0533333 5.30204 0 5.43271 0 5.59804C0 5.76337 0.048 5.89137 0.144 5.98204C0.24 6.07271 0.368 6.11804 0.528 6.11804H4.672V10.262C4.672 10.4007 4.72 10.5234 4.816 10.63C4.912 10.7367 5.04267 10.79 5.208 10.79C5.37333 10.79 5.50133 10.742 5.592 10.646C5.68267 10.55 5.728 10.422 5.728 10.262V6.11804H9.872C10.0107 6.11804 10.1333 6.07004 10.24 5.97404C10.3467 5.87804 10.4 5.75004 10.4 5.59004C10.4 5.43004 10.3493 5.31271 10.248 5.23804C10.1467 5.16337 10.0213 5.12604 9.872 5.12604Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <Link to="/shop" className={styles.blankLink}></Link>
                                </div>
                            </div>
                            <div className={styles.productBody}>
                                <h4 className={styles.productName}><Link to="/shop">100 Percent Apple Juice – 64 fl oz Bottle</Link></h4>
                                <div className={styles.priceSec}>
                                    <span className={styles.priceMain}>Rs. 120</span>
                                    <span className={styles.priceNot}>Rs. 140</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts