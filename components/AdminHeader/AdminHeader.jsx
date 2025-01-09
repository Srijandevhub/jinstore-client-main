import styles from './AdminHeader.module.css'
const AdminHeader = ({ onToogle, collapse }) => {
    return (
        <header className={`${styles.headerWrapper} ${collapse ? `${styles.collapsed}` : ''}`}>
            <nav className={styles.navbarWrapper}>
                <button className={styles.sidebarToogler} aria-label='sidebar toogler' onClick={() => onToogle()}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </nav>
        </header>
    )
}

export default AdminHeader