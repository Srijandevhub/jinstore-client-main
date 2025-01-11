import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import WishlistDisplay from "../components/wishlist/WishlistDisplay";

const WishlistPage = () => {
    return (
        <Layout>
            <WishlistDisplay />
        </Layout>
    )
}

export default WishlistPage;