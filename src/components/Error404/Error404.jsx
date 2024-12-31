import styles from './Error404.module.css'
import Error from '../../assets/error.png'
const Error404 = () => {
    return (
        <div className={styles.errorWrapper}>
            <div className={styles.errorContainer}>
                <div className={styles.errorBox}>
                    <img src={Error} alt='error' className={styles.errorImage}/>
                    <h1 className={styles.errorHeading}>That Page Cant Be Found</h1>
                    <p className={styles.errorText}>It looks like nothing was found at this location. Maybe try to search for what you are looking for?</p>
                </div>
            </div>
        </div>
    )
}

export default Error404