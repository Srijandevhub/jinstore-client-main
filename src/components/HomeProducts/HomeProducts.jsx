import { useCallback, useEffect, useState } from 'react'
import ProductBox from '../ProductBox/ProductBox'
import styles from './HomeProducts.module.css'
import axios from 'axios';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !loading && hasMore) {
            setPage(page + 1);
        }
    }

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const limit = 10;
            
            const res = await axios.get(`http://localhost:5000/api/v1/product/get-limited-products?limit=10`, {
                params: { limit, skip: page * limit }
            });
            const fetchedProducts = res.data.products;
            setProducts(...fetchProducts);
            setHasMore(fetchProducts.length > 0);
            setLoading(false);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore])

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
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