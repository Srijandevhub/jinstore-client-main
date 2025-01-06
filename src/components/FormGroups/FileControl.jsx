import styles from './FormControl.module.css'
const FileControl = ({ label, id, required = false, value, onChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}{required && <span>*</span>}</label>
            <input type="file" accept='image/*' className={styles.formControl} onChange={(e) => onChange(e.target.files[0])} id={id}/>
        </div>
    )
}

export default FileControl