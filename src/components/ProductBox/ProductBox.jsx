import styles from './ProductBox.module.css'
import Prd from '../../assets/prd1.png'
import { Link } from 'react-router-dom'
const ProductBox = () => {
    return (
        <div className={styles.productBox}>
            <div className={styles.productHeader}>
                <div className={styles.productHeaderInner}>
                    <img src={Prd} alt="product" className={styles.productImage}/>
                    <span className={styles.discount}>11%</span>
                    <button className={styles.wishlistBtn} aria-label='wishlist'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
                        </svg>
                    </button>
                    <Link to="/" className={styles.blankLink}></Link>
                </div>
            </div>
            <div className={styles.productBody}>
                <h5 className={styles.productTitle}><Link to="/">Great Value Rising Crust Frozen Pizza, Supreme</Link></h5>
                <div className={styles.price}>
                    <span className={styles.priceMain}>Rs. 140</span>
                    <span className={styles.priceStrike}>Rs. 180</span>
                </div>
            </div>
            <div className={styles.productFooter}>
                <button className={styles.cartBtn}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                    </svg>
                    Add To Cart
                </button>
                <button className={`${styles.cartBtn} ${styles.wishlist}`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                    </svg>
                    Add To Wishlist
                </button>
            </div>
        </div>
    )
}

export default ProductBox