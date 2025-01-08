import { useEffect } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../utils/userSlice"
import { loadWishlistAsync, syncWishlistFromLocalStorage } from "../utils/wishlistSlice"

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    useEffect(() => {
        dispatch(fetchUser());
    }, [])
    useEffect(() => {
        if (!user) {
            dispatch(syncWishlistFromLocalStorage());
        } else {
            dispatch(loadWishlistAsync());
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