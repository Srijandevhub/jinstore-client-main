import ProductBox from '../ProductBox/ProductBox'
import styles from './HomeProducts.module.css'
const HomeProducts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                    <div className={styles.col}>
                        <ProductBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProducts