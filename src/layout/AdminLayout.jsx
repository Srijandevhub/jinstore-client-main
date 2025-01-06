import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar"
import AdminHeader from "../components/AdminHeader/AdminHeader";
import styles from './AdminLayout.module.css'
import axios from "axios";
import AdminLoader from "../components/Loaders/AdminLoader";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";

const AdminLayout = ({ children, menuactive }) => {
    const [sidebarActive, setSidebarActive] = useState(true);
    const [loading, setLoading] = useState(true);
    const handleSidebarToogle = () => {
        setSidebarActive(!sidebarActive);
    }
    const navigate = useNavigate();
    useEffect(() => {
        const protectRoute = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/user/admin-protected", { withCredentials: true });
                if (res.status === 200) {
                    setLoading(false);
                }
            } catch (error) {
                if (error.response.status === 403) {
                    navigate("/access-forbidden");
                } else if (error.response.status === 400) {
                    toast.warning(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    }); 
                } else {
                    toast.error(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    });
                }
            }
        }
        protectRoute();
    }, [])

    if (loading) {
        return <AdminLoader />
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