import styles from './Quanitybox.module.css';
import { useDispatch } from 'react-redux';

const QuantityBox = ({ value, itemid }) => {
    const dispath = useDispatch();
    return (
        <div className={styles.quantityWrapper}>
            <button className={styles.btn} onClick={() => {
                
            }}>
                -
            </button>
            <span className={styles.display}>{value}</span>
            <button className={styles.btn} onClick={() => {
            }}>
                +
            </button>
        </div>
    )
}

export default QuantityBox;