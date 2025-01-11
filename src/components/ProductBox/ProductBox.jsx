import { useDispatch, useSelector } from 'react-redux';
import styles from './ProductBox.module.css'
import { Link } from 'react-router-dom'
import { addProductToWishlistSync, removeProductFromWishlistSync, syncWishlistToLocalStorage } from '../../utils/wishlistSlice';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
import { addProductToCartSync, syncCartToLocalStorage } from '../../utils/cartSlice';
const ProductBox = ({ product }) => {
    const user = useSelector((state) => state.user.data);
    const wishlist = useSelector((state) => state.wishlist.data);
    const cart = useSelector((state) => state.cart.data).map(item => item.productid);
    const dispatch = useDispatch();

    const addProductToWishlist = async (productid) => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/wishlist/add-product", {
                productid: productid
            }, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
                dispatch(addProductToWishlistSync(productid));
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
    
    const removeProductFromWishlist = async (productid) => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/wishlist/delete-product", {
                productid: productid
            }, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
                dispatch(removeProductFromWishlistSync(productid));
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

    const handleAddProductToWishlist = (id) => {
        if (!user) {
            dispatch(addProductToWishlistSync(id));
            dispatch(syncWishlistToLocalStorage());
        } else {
            addProductToWishlist(id);
        }
    }
    const handleRemoveProductFromWishlist = (id) => {
        if (!user) {
            dispatch(removeProductFromWishlistSync(id));
            dispatch(syncWishlistToLocalStorage());
        } else {
            removeProductFromWishlist(id);
        }
    }

    const handleAddProductToCart = (id) => {
        if (user) {

        } else {
            dispatch(addProductToCartSync({ productid: id, quantity: 1 }));
            dispatch(syncCartToLocalStorage());
        }
    }
    return (
        <div className={styles.productBox}>
            <div className={styles.productHeader}>
                <div className={styles.productHeaderInner}>
                    <img src={`http://localhost:5000/uploads/products/${product.thumbnail}`} alt="product" className={styles.productImage}/>
                    <span className={styles.discount}>{product.discount}%</span>
                    <button className={styles.wishlistBtn} aria-label='wishlist'>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"/>
                        </svg>
                    </button>
                    <Link to={`/product/${product._id}`} className={styles.blankLink}></Link>
                </div>
            </div>
            <div className={styles.productBody}>
                <h5 className={styles.productTitle}><Link to={`/product/${product._id}`}>{product.title}</Link></h5>
                <div className={styles.price}>
                    <span className={styles.priceMain}>Rs. {product.price - product.price * product.discount / 100}</span>
                    <span className={styles.priceStrike}>Rs. {product.price}</span>
                </div>
            </div>
            <div className={styles.productFooter}>
                {
                    cart.includes(product._id) ?
                    <button className={styles.cartBtn}>
                        Remove From Cart
                    </button>
                    :
                    <button className={styles.cartBtn} onClick={() => handleAddProductToCart(product._id)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                        </svg>
                        Add To Cart
                    </button>
                }
                {
                    wishlist.includes(product._id) ?
                    <button className={`${styles.cartBtn} ${styles.wishlist}`} onClick={() => handleRemoveProductFromWishlist(product._id)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                        </svg>
                        Remove From Wishlist
                    </button>
                    :
                    <button className={`${styles.cartBtn} ${styles.wishlist}`} onClick={() => handleAddProductToWishlist(product._id)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                        </svg>
                        Add To Wishlist
                    </button>
                }
            </div>
        </div>
    )
}

export default ProductBox