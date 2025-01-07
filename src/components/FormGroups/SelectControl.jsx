import styles from './FormControl.module.css'
const SelectControl = ({ label, id, selectedValue = "", children, onChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}</label>
            <select id={id} className={styles.formControl} defaultValue={selectedValue} onChange={(e) => onChange(e.target.value)}>
                {children}
            </select>
        </div>
    )
}

export default SelectControl;