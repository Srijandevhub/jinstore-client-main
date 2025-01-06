import { Link } from 'react-router-dom'
import styles from './AdminSidebar.module.css'

const AdminSidebar = ({ active, menuActive }) => {
    return (
        <aside className={`${styles.sidebarWrapper} ${active ? `${styles.show}` : ''}`} id="admin-sidebar">
            <div className={styles.sidebarHeader}>

            </div>
            <div className={styles.sidebarBody}>
                <ul className={styles.sidebarMenu}>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/dashboard" className={`${styles.sidebarLink} ${menuActive === 'dashboard' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-gauge"></i>
                            <span className={styles.linkText}>Dashboard</span>
                        </Link>
                    </li>
                </ul>
                <ul className={styles.sidebarMenu}>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/categories" className={`${styles.sidebarLink} ${menuActive === 'categories' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Categories</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/categories" className={`${styles.sidebarLink} ${menuActive === 'banners' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Banners</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/products" className={`${styles.sidebarLink} ${menuActive === 'products' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Products</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/users" className={`${styles.sidebarLink} ${menuActive === 'users' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Users</span>
                        </Link>
                    </li>
                    <li className={styles.sidebarList}>
                        <Link to="/admin/orders" className={`${styles.sidebarLink} ${menuActive === 'orders' ? `${styles.active}` : ''}`}>
                            <i className="fa-solid fa-user"></i>
                            <span className={styles.linkText}>Orders</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sidebarFooter}>
                
            </div>
        </aside>
    )
}
export default AdminSidebar