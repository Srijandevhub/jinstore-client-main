import { useEffect } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { useDispatch } from "react-redux"
import { fetchUser } from "../utils/userSlice"

const Layout = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, [])
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}

export default Layout