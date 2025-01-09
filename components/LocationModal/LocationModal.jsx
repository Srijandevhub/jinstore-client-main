import styles from './LocationModal.module.css'
const LocationModal = ({ show, onClose, onChange }) => {
    return (
        <div className={`${styles.modal} ${show ? `${styles.show}` : ""}`}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalBody}>
                        <h1 className={styles.modalHeading}>Locations</h1>
                        <p className={styles.modalText}>These are the locations we serve</p>
                        <div className={styles.locationRow}>
                            <div className={styles.locationCol}>
                                <button className={styles.locationBtn} onClick={() => onChange("Kolkata")}>
                                    <i>
                                        <img src="https://www.holidify.com/images/bgImages/KOLKATA.jpg" alt='kolkata'/>
                                    </i>
                                    Kolkata
                                </button>
                            </div>
                            <div className={styles.locationCol}>
                                <button className={styles.locationBtn} onClick={() => onChange("Mumbai")}>
                                    <i>
                                        <img src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg" alt='Mumbai'/>
                                    </i>
                                    Mumbai
                                </button>
                            </div>
                            <div className={styles.locationCol}>
                                <button className={styles.locationBtn} onClick={() => onChange("Delhi")}>
                                    <i>
                                        <img src="https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=" alt='Delhi'/>
                                    </i>
                                    Delhi
                                </button>
                            </div>
                            <div className={styles.locationCol}>
                                <button className={styles.locationBtn} onClick={() => onChange("Chennai")}>
                                    <i>
                                        <img src="https://media.istockphoto.com/id/1211952929/photo/marina-beach-chennai-city-tamil-nadu-india-bay-of-bengal-chennai-tourism-east-coast-road.jpg?s=612x612&w=0&k=20&c=kpAeGGwy3TyyD97PJYULLBhxZV9bM_zVP0CU7f1HIZc=" alt='Chennai'/>
                                    </i>
                                    Chennai
                                </button>
                            </div>
                            <div className={styles.locationCol}>
                                <button className={styles.locationBtn} onClick={() => onChange("Punjab")}>
                                    <i>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-DQSJ5jITZg5wChL1qhV2I8o9A7akR5wWw&s" alt='Punjab'/>
                                    </i>
                                    Punjab
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.backdrop} ${show ? `${styles.show}` : ""}`} onClick={onClose}></div>
        </div>
    )
}

export default LocationModal