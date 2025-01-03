import styles from './CategoryProducts.module.css'
import ban1 from '../../assets/catban.jpg'
import ban2 from '../../assets/catban2.jpg'
import { Link } from 'react-router-dom'
const CategoryProducts = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.box} style={{ backgroundImage: `url(${ban1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderTopLeftRadius: "8px" }}>
                            <div className={styles.content}>
                                <span className={styles.tag}>Only This Week</span>
                                <h3 className={styles.heading}>Make your grocery shopping easy with us</h3>
                                <p className={styles.text}>Feed your family the best</p>
                                <Link to="/" className={styles.link}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.box} style={{ backgroundImage: `url(${ban2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderTopRightRadius: "8px" }}>
                            <div className={styles.content}>
                                <span className={styles.tag}>Only This Week</span>
                                <h3 className={styles.heading}>Get your everyday needs here with us</h3>
                                <p className={styles.text}>A different kind of grocery store</p>
                                <Link to="/" className={styles.link}>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProducts