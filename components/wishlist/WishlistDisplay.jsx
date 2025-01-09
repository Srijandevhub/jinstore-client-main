import styles from './Wishlist.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const WishlistDisplay = () => {
    const [refresh, setRefresh] = useState(false);
    const [products, setProducts] = useState([]);

    const user = useSelector((state) => state.user.data);
    const wishlist = useSelector((state) => state.wishlist.data);
    
    useEffect(() => {
        const fetchWishlistsFromAuth = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/wishlist/wishlist-details", { withCredentials: true });
                if (res.status === 200) {
                    setProducts(res.data.wishlist);
                }
            } catch (error) {
                console.log(error);
            }
        }
        const fetchWishlistFromNonAuth = async () => {
            try {
                const listids = localStorage.getItem("wishlistproducts") ? JSON.parse(localStorage.getItem("wishlistproducts")) : [];
                const res = await axios.post("http://localhost:5000/api/v1/wishlist/wishlist-details", {
                    ids: JSON.stringify(listids)
                }, { withCredentials: true });
                if (res.status === 200) {
                    setProducts(res.data.wishlist);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (user) {
            fetchWishlistsFromAuth();
        } else {
            fetchWishlistFromNonAuth();
        }
    }, [refresh]);

    if (products.length === 0 || wishlist.length === 0) {
        return (
            <div className='py-5'>
                <div className='container'>
                    <div className='py-3 d-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="260" height="260" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                            </svg>
                        </div>
                        <h4 className='text-center mt-5'>Wishlist Is Empty</h4>
                        <div className='d-flex justify-content-center'>
                            <Link to="/shop" className="btn btn-primary">Return to shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='py-5' style={{ minHeight: "394px" }}>
            <div className='container'>
                <div className={styles.productTableWrapper}>
                    <table className={styles.productTable}>
                        <thead>
                            <tr>
                                <th><span className='d-none'>Thumbnail</span></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Add to cart</th>
                                <th><span className='d-none'>Remove</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={`http://localhost:5000/uploads/products/${item.thumbnail}`} alt={item.title}/>
                                            </td>
                                            <td>
                                                <Link to={`/product/${item._id}`} className={styles.productTitle}>{item.title}</Link>
                                            </td>
                                            <td>
                                                {
                                                    item.discount ? `₹${item.price - (item.price * item.discount / 100)}` : `₹${item.price}`
                                                }
                                            </td>
                                            <td>
                                                {item.stock > 0 ? 'In Stock': 'Out of Stock'}
                                            </td>
                                            <td>
                                                {item.stock > 0 ? 
                                                
                                                <>
                                                {
                                                    <button className={styles.cartBtn}>Add to cart</button>
                                                }
                                                </>

                                                : <Link to={`/product/${item._id}`} className={styles.cartBtn}>Read More</Link>}
                                            </td>
                                            <td>
                                                <button className={styles.removeBtn} aria-label='remove'>
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='d-flex mt-5 justify-content-end gap-2'>
                    <button className='btn btn-primary-bordered'>Clear All</button>
                    <Link to="/shop" className='btn btn-primary'>Continue to shop</Link>
                </div>
            </div>
        </div>
    )
}

export default WishlistDisplay;