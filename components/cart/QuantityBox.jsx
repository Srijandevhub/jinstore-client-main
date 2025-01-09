import styles from './Quanitybox.module.css';
import { useDispatch } from 'react-redux';
import { decreaseQuantityInLocalStorage, getTotalPrice, inCreaseQuantityInLocalStorage } from '../../utils/cartSlice';

const QuantityBox = ({ value, itemid }) => {
    const dispath = useDispatch();
    return (
        <div className={styles.quantityWrapper}>
            <button className={styles.btn} onClick={() => {
                dispath(decreaseQuantityInLocalStorage(itemid));
                dispath(getTotalPrice());
            }}>
                -
            </button>
            <span className={styles.display}>{value}</span>
            <button className={styles.btn} onClick={() => {
                dispath(inCreaseQuantityInLocalStorage(itemid));
                dispath(getTotalPrice());
            }}>
                +
            </button>
        </div>
    )
}

export default QuantityBox;