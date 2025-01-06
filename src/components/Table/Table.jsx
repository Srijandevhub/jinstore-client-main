import styles from './Table.module.css'
const Table = ({ children }) => {
    return (
        <div className={styles.tableResponsive}>
            <table className={styles.table}>
                {children}
            </table>
        </div>
    )
}

export default Table