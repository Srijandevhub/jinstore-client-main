import { useEffect, useState } from 'react'
import ProductBox from '../ProductBox/ProductBox'
import styles from './HomeProducts.module.css'
import axios from 'axios';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const limit = 12;
            const res = await axios.get(`http://localhost:5000/api/v1/product/get-limited-products`, {
                params: { limit, skip: page * limit }
            });
            const fetchedProducts = res.data.products;
            setProducts((prev) => [...prev, ...fetchedProducts]);
            setHasMore(fetchedProducts.length > 0);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [page])


    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        }
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !loading && hasMore) {
            setPage((prev) => prev + 1);
        }
    }

    
    useEffect(() => {
        const debouncedScroll = debounce(handleScroll, 200);
        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, [loading, hasMore])

    
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    {
                        products.map((item, index) => {
                            return (
                                <div className={styles.col} key={index}>
                                    <ProductBox product={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeProducts