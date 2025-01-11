import { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import QuantityBox from './QuantityBox';

const CartDisplay = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    
    const cart = useSelector((state) => state.cart.data);

    if (products.length === 0 && cart.length === 0) {
        return (
            <div className='py-5'>
                <div className='container'>
                    <div className='py-3 f-flex flex-column'>
                        <div className='d-flex justify-content-center'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="260" height="260" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                            </svg>
                        </div>
                        <h4 className='text-center mt-5'>Cart Is Empty</h4>
                        <div className='d-flex justify-content-center'>
                            <Link to="/" className="btn btn-primary">Return to shop</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='py-5' style={{ minHeight: "394px" }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-xxl-9'>
                        <div className={styles.productTableWrapper}>
                            <table className={styles.productTable}>
                                <thead>
                                    <tr>
                                        <th><span className='d-none'>remove</span></th>
                                        <th><span className='d-none'>Thumbnail</span></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <button className={styles.removeBtn} aria-label='remove' onClick={() => handleRemoveItem(item._id)}>
                                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <img src={`http://localhost:5000/uploads/${item.thumbnail}`} alt={item.title}/>
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
                                                        <QuantityBox value={cart.find(i => i.productid === String(item._id))?.quantity || 1} itemid={item._id}/>
                                                    </td>
                                                    <td>
                                                        {
                                                            item.discount ? `₹${(item.price - (item.price * item.discount / 100)) * cart.find(i => i.productid === String(item._id))?.quantity || 1}` : `₹${item.price * cart.find(i => i.productid === String(item._id))?.quantity || 1}`
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='col-xxl-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <h6 className='mb-0'>Cart Total</h6>
                            </div>
                            <div className='card-body'>
                                <table className={styles.productTable}>
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>:</td>
                                            <td>₹{totalPrice}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className='btn btn-dark mt-3 w-100'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDisplay;