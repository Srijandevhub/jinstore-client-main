import styles from './Quanitybox.module.css';

const QuantityBox = ({ value, updateQuantity, itemid }) => {
    return (
        <div className={styles.quantityWrapper}>
            <button className={styles.btn} onClick={() => {
                updateQuantity(Math.max(--value, 1), itemid);
            }}>
                -
            </button>
            <span className={styles.display}>{value}</span>
            <button className={styles.btn} onClick={() => {
                updateQuantity(++value, itemid);
            }}>
                +
            </button>
        </div>
    )
}

export default QuantityBox;