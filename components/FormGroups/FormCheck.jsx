import styles from './FormCheck.module.css'
import check from '../../assets/check.png'
import checke from '../../assets/checked.png'

const FormCheck = ({ id, label, checked = false, onChange }) => {
    return (
        <div className={styles.formCheck}>
            <input type='checkbox' id={id} className={styles.checkInput} checked={checked} onChange={() => onChange(!checked)}/>
            <label htmlFor={id} className={styles.checkLabel}>
                { checked ? <img src={checke} alt='checked'/> : <img src={check} alt='check'/> }
                {label}
            </label>
        </div>
    )
}

export default FormCheck