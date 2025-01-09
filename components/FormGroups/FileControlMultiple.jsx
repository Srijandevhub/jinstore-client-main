import styles from './FormControl.module.css'
const FileControlMultiple = ({ label, id, required = false, onChange }) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id} className={styles.formLabel}>{label}{required && <span>*</span>}</label>
            <input type="file" accept='image/*' className={styles.formControl} onChange={(e) => {
                onChange(Array.from(e.target.files));
            }} id={id} multiple={true}/>
        </div>
    )
}

export default FileControlMultiple