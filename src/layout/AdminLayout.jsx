import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar"
import AdminHeader from "../components/AdminHeader/AdminHeader";
import styles from './AdminLayout.module.css'

const AdminLayout = ({ children, menuactive }) => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const handleSidebarToogle = () => {
        setSidebarActive(!sidebarActive);
    }
    return (
        <>
        <AdminSidebar active={sidebarActive} menuActive={menuactive}/>
        <AdminHeader onToogle={handleSidebarToogle} collapse={sidebarActive}/>
        <main className={`${styles.main} ${sidebarActive ? `${styles.collapsed}` : ''}`} id="admin-main">
            {children}
        </main>
        </>
    )
}

export default AdminLayout