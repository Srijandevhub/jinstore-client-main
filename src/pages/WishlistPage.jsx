import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect } from "react";

const WishlistPage = () => {
    const user = useSelector((state) => state.user.data);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/signin");
        }
    }, [])
    return (
        <Layout>

        </Layout>
    )
}

export default WishlistPage;