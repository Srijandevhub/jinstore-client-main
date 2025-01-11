import { useEffect } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../utils/userSlice"
import { loadWishlistAsync, syncWishlistFromLocalStorage } from "../utils/wishlistSlice"
import { fetchCart, loadCartSync } from "../utils/cartSlice"

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    useEffect(() => {
        dispatch(fetchUser());
    }, [])
    useEffect(() => {
        if (!user) {
            dispatch(syncWishlistFromLocalStorage());
            dispatch(loadCartSync());
        } else {
            dispatch(loadWishlistAsync());
            dispatch(fetchCart());
        }
    }, [user])
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout