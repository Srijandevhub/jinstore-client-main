import styles from './FormControl.module.css'
const FormControl = ({ label, id, required = false, value, onChange, type = "text", reference }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}{required && <span>*</span>}</label>
            <input type={type} className={styles.formControl} value={value} onChange={(e) => onChange(e.target.value)} id={id} ref={reference}/>
        </div>
    )
}

export default FormControl