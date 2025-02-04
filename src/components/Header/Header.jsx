import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../../assets/logo.png'
import { useEffect, useState } from 'react'
import LocationModal from '../LocationModal/LocationModal'
import { useDispatch, useSelector } from 'react-redux'
import AccountLoader from '../Loaders/AccountLoader'
import { logoutUser } from '../../utils/userSlice'
import { clearWishlistSync } from '../../utils/wishlistSlice'
import { clearCartSync } from '../../utils/cartSlice'
const Header = () => {
    const [backdrop, setBackdrop] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [location, setLocation] = useState("all");
    const [fixed, setFixed] = useState(false);

    const cart = useSelector((state) => state.cart.data);
    const wishlist = useSelector((state) => state.wishlist.data);
    const user = useSelector((state) => state.user);

    const handleLocationChange = (value) => {
        setLocation(value);
        setShowModal(false);
        window.localStorage.setItem("location", value);
    }
    const handleScroll = () => {
        if (window.scrollY > 861) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    }
    const dispatch = useDispatch();
    useEffect(() => {
        if (window.localStorage.getItem("location")) {
            setLocation(window.localStorage.getItem("location"));
        } else {
            setShowModal(true);
        }

        document.addEventListener("scroll", handleScroll);
        return () => document.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <header className={`${styles.headerWrapper} ${fixed ? `${styles.fixed}` : ''}`}>
            <div className={styles.headerTopTag}>
                <p className={styles.topTagText}>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
            </div>
            <div className={styles.headerTop}>
                <div className={styles.headerContainer}>
                    <div className={styles.topRow}>
                        <div className={styles.topCol}>
                            <ul className={styles.topMenu}>
                                <li>
                                    <Link className={styles.menuLink} to="/">Home</Link>
                                </li>
                                <li>
                                    <Link className={styles.menuLink} to="/about-us">About Us</Link>
                                </li>
                                <li>
                                    <Link className={styles.menuLink} to="/wishlist">Wishlist</Link>
                                </li>
                            </ul>
                            <div className={styles.deliveryTag}>
                                <p className={styles.deliveryText}>We deliver to you every day from <span>7:00 to 23:00</span></p>
                            </div>
                        </div>
                        <ul className={styles.topMenu}>
                            <li>
                                <Link className={styles.menuLink} to="/track-order">Oder Tracking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.headerContainer}>
                <nav className={styles.headerNav}>
                    <button className={styles.navToogler} aria-label='nav toogler' onClick={() => setMobileNav(true)}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                    <div className={styles.brandCol}>
                        <Link className={styles.navBrand} to="/">
                            <img src={Logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className={styles.locationCol}>
                        <button className={styles.locationBtn} onClick={() => setShowModal(true)}>
                            <i>
                                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.542 -5.72205e-06C7.826 -5.72205e-06 6.23133 0.433329 4.758 1.3C3.31933 2.13199 2.17533 3.26733 1.326 4.706C0.442 6.19666 0 7.80866 0 9.542C0 11.3967 0.632667 13.364 1.898 15.444C2.85133 17.0213 4.12533 18.616 5.72 20.228C6.58667 21.0947 7.57467 21.996 8.684 22.932L8.996 23.192C9.048 23.244 9.126 23.2917 9.23 23.335C9.334 23.3783 9.44233 23.4 9.555 23.4C9.66767 23.4 9.763 23.387 9.841 23.361C9.919 23.335 10.0013 23.2787 10.088 23.192L10.4 22.932C11.5093 21.996 12.4973 21.0947 13.364 20.228C14.9587 18.616 16.2327 17.0213 17.186 15.444C18.4513 13.364 19.084 11.3967 19.084 9.542C19.084 7.80866 18.642 6.19666 17.758 4.706C16.9087 3.26733 15.7647 2.13199 14.326 1.3C12.8527 0.433329 11.258 -5.72205e-06 9.542 -5.72205e-06ZM9.542 21.346C8.62333 20.6007 7.68733 19.7427 6.734 18.772C5.33 17.2987 4.212 15.86 3.38 14.456C2.288 12.636 1.742 10.9633 1.742 9.43799C1.742 8.01666 2.09733 6.69933 2.808 5.48599C3.484 4.30733 4.41133 3.38 5.59 2.70399C6.80333 1.99333 8.12067 1.63799 9.542 1.63799C10.9633 1.63799 12.2807 2.002 13.494 2.73C14.6727 3.42333 15.6087 4.36799 16.302 5.564C16.9953 6.75999 17.342 8.05133 17.342 9.43799C17.342 11.0153 16.796 12.714 15.704 14.534C14.872 15.9207 13.754 17.342 12.35 18.798C11.4313 19.734 10.4953 20.5833 9.542 21.346ZM9.542 5.408C8.79667 5.408 8.112 5.59433 7.488 5.967C6.864 6.33966 6.36567 6.84233 5.993 7.47499C5.62033 8.10766 5.434 8.79666 5.434 9.542C5.434 10.2873 5.62033 10.9763 5.993 11.609C6.36567 12.2417 6.864 12.74 7.488 13.104C8.112 13.468 8.79667 13.65 9.542 13.65C10.2873 13.65 10.9763 13.4637 11.609 13.091C12.2417 12.7183 12.74 12.22 13.104 11.596C13.468 10.972 13.65 10.2873 13.65 9.542C13.65 8.79666 13.468 8.10766 13.104 7.47499C12.74 6.84233 12.2417 6.33966 11.609 5.967C10.9763 5.59433 10.2873 5.408 9.542 5.408ZM9.542 11.908C8.88333 11.908 8.32 11.674 7.852 11.206C7.384 10.738 7.15 10.1833 7.15 9.542C7.15 9.10866 7.25833 8.70999 7.475 8.34599C7.69167 7.98199 7.982 7.69166 8.346 7.47499C8.71 7.25833 9.10867 7.14999 9.542 7.14999C9.97533 7.14999 10.374 7.25833 10.738 7.47499C11.102 7.69166 11.3923 7.98199 11.609 8.34599C11.8257 8.70999 11.934 9.10866 11.934 9.542C11.934 10.1833 11.7 10.738 11.232 11.206C10.764 11.674 10.2007 11.908 9.542 11.908Z" fill="#030712"/>
                                </svg>
                            </i>
                            <span className={styles.locationContent}>
                                <em className={styles.locationText1}>Deliver to</em>
                                <strong className={styles.locationText2}>{location}</strong>
                            </span>
                        </button>
                    </div>
                    <div className={styles.searchCol}>
                        <div className={styles.searchWrapper}>
                            <input type="text" className={styles.searchInput} placeholder='Search for products, categories or brands...' onFocus={() => setBackdrop(true)} onBlur={() => setBackdrop(false)}/>
                            <button className={styles.searchBtn}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.4938 20.204L17.3858 16.096C18.0965 15.264 18.6512 14.3237 19.0498 13.275C19.4485 12.2263 19.6478 11.1387 19.6478 10.012C19.6478 8.296 19.2145 6.70134 18.3478 5.228C17.5158 3.78934 16.3805 2.64534 14.9418 1.796C13.4685 0.929337 11.8652 0.496002 10.1318 0.496002C8.39851 0.496002 6.79518 0.929337 5.32184 1.796C3.88318 2.628 2.73918 3.75467 1.88984 5.176C1.02318 6.66667 0.589844 8.27434 0.589844 9.999C0.589844 11.7237 1.02318 13.3227 1.88984 14.796C2.72184 16.2347 3.84851 17.3787 5.26984 18.228C6.76051 19.112 8.37251 19.554 10.1058 19.554C11.2325 19.554 12.3202 19.3547 13.3688 18.956C14.4175 18.5573 15.3578 18.0027 16.1898 17.292L20.2978 21.4C20.3498 21.452 20.4278 21.4997 20.5318 21.543C20.6358 21.5863 20.7398 21.608 20.8438 21.608C20.9478 21.608 21.0518 21.5863 21.1558 21.543C21.2598 21.4997 21.3378 21.452 21.3898 21.4C21.5978 21.192 21.7062 20.984 21.7148 20.776C21.7235 20.568 21.6498 20.3773 21.4938 20.204ZM2.30584 9.908C2.30584 8.48667 2.66118 7.16934 3.37184 5.956C4.06518 4.79467 4.99251 3.86734 6.15384 3.174C7.36718 2.46334 8.68451 2.108 10.1058 2.108C11.5272 2.108 12.8445 2.472 14.0578 3.2C15.2365 3.89334 16.1725 4.838 16.8658 6.034C17.5592 7.23 17.9058 8.53 17.9058 9.934C17.9058 11.338 17.5418 12.6467 16.8138 13.86C16.1205 15.0387 15.1758 15.9747 13.9798 16.668C12.7838 17.3613 11.4925 17.708 10.1058 17.708C8.70184 17.7427 7.38451 17.4047 6.15384 16.694C4.99251 16.018 4.06084 15.0733 3.35884 13.86C2.65684 12.6467 2.30584 11.3293 2.30584 9.908Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={styles.accountCol}>
                        {
                            user.status === 'loading' ?
                            <div className={styles.accountBtn}>
                                <i>
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9442 9.10201C12.1122 9.63934 11.2109 9.90801 10.2402 9.90801C9.5989 9.90801 8.97923 9.78234 8.38123 9.53101C7.78323 9.27968 7.25457 8.92868 6.79523 8.47801C6.3359 8.02734 5.9849 7.50301 5.74223 6.90501C5.49957 6.30701 5.37823 5.68735 5.37823 5.04601C5.37823 4.04068 5.65123 3.13068 6.19723 2.31601C6.74323 1.50134 7.46257 0.907679 8.35523 0.535011C9.2479 0.162346 10.1969 0.0713444 11.2022 0.262012C12.1382 0.435345 12.9616 0.873011 13.6722 1.57501C14.3829 2.27701 14.8292 3.10901 15.0112 4.07101C15.1932 5.03301 15.1022 5.97334 14.7382 6.89201C14.3742 7.81068 13.7762 8.54734 12.9442 9.10201ZM11.7482 2.78401C11.2976 2.48935 10.7949 2.34201 10.2402 2.34201C9.51223 2.34201 8.8709 2.60201 8.31623 3.12201C7.79623 3.67668 7.53623 4.31801 7.53623 5.04601C7.53623 5.60068 7.6879 6.10334 7.99123 6.55401C8.29457 7.00468 8.69757 7.33401 9.20023 7.54201C9.7029 7.75001 10.2229 7.80201 10.7602 7.69801C11.2976 7.59401 11.7612 7.34701 12.1512 6.95701C12.5412 6.56701 12.7882 6.10334 12.8922 5.56601C12.9962 5.02868 12.9442 4.50868 12.7362 4.00601C12.5282 3.50335 12.1989 3.09601 11.7482 2.78401ZM3.35023 13.86C4.25157 12.9413 5.30023 12.235 6.49623 11.741C7.69223 11.247 8.94023 11 10.2402 11C11.5402 11 12.7882 11.247 13.9842 11.741C15.1802 12.235 16.2332 12.937 17.1432 13.847C18.0532 14.757 18.7552 15.81 19.2492 17.006C19.7432 18.202 19.9902 19.45 19.9902 20.75C19.9902 21.062 19.8776 21.322 19.6522 21.53C19.4269 21.738 19.1756 21.842 18.8982 21.842H13.4902C13.1956 21.842 12.9399 21.7337 12.7232 21.517C12.5066 21.3003 12.3982 21.0447 12.3982 20.75C12.3982 20.4553 12.5066 20.1997 12.7232 19.983C12.9399 19.7663 13.1956 19.658 13.4902 19.658H17.7542C17.6156 18.7567 17.3296 17.903 16.8962 17.097C16.4629 16.291 15.8996 15.5933 15.2062 15.004C14.5129 14.4147 13.7416 13.9597 12.8922 13.639C12.0429 13.3183 11.1589 13.158 10.2402 13.158C9.32157 13.158 8.43757 13.3183 7.58823 13.639C6.7389 13.9597 5.96757 14.4147 5.27423 15.004C4.5809 15.5933 4.01757 16.291 3.58423 17.097C3.1509 17.903 2.8649 18.7567 2.72623 19.658H6.99023C7.26757 19.658 7.52757 19.762 7.77023 19.97C7.97823 20.2127 8.08223 20.4727 8.08223 20.75C8.08223 21.0273 7.97823 21.2873 7.77023 21.53C7.52757 21.738 7.26757 21.842 6.99023 21.842H1.58223C1.3049 21.842 1.05357 21.738 0.828234 21.53C0.602901 21.322 0.490234 21.062 0.490234 20.75C0.490234 19.45 0.737234 18.2063 1.23123 17.019C1.72523 15.8317 2.43157 14.7787 3.35023 13.86Z" fill="#030712"/>
                                    </svg>
                                </i>
                                <span className={styles.accountContent}>
                                    <AccountLoader />
                                </span>
                            </div>
                            :
                            <>
                            {
                                user.data ?
                                <div className={styles.accountBtn}>
                                    <i>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9442 9.10201C12.1122 9.63934 11.2109 9.90801 10.2402 9.90801C9.5989 9.90801 8.97923 9.78234 8.38123 9.53101C7.78323 9.27968 7.25457 8.92868 6.79523 8.47801C6.3359 8.02734 5.9849 7.50301 5.74223 6.90501C5.49957 6.30701 5.37823 5.68735 5.37823 5.04601C5.37823 4.04068 5.65123 3.13068 6.19723 2.31601C6.74323 1.50134 7.46257 0.907679 8.35523 0.535011C9.2479 0.162346 10.1969 0.0713444 11.2022 0.262012C12.1382 0.435345 12.9616 0.873011 13.6722 1.57501C14.3829 2.27701 14.8292 3.10901 15.0112 4.07101C15.1932 5.03301 15.1022 5.97334 14.7382 6.89201C14.3742 7.81068 13.7762 8.54734 12.9442 9.10201ZM11.7482 2.78401C11.2976 2.48935 10.7949 2.34201 10.2402 2.34201C9.51223 2.34201 8.8709 2.60201 8.31623 3.12201C7.79623 3.67668 7.53623 4.31801 7.53623 5.04601C7.53623 5.60068 7.6879 6.10334 7.99123 6.55401C8.29457 7.00468 8.69757 7.33401 9.20023 7.54201C9.7029 7.75001 10.2229 7.80201 10.7602 7.69801C11.2976 7.59401 11.7612 7.34701 12.1512 6.95701C12.5412 6.56701 12.7882 6.10334 12.8922 5.56601C12.9962 5.02868 12.9442 4.50868 12.7362 4.00601C12.5282 3.50335 12.1989 3.09601 11.7482 2.78401ZM3.35023 13.86C4.25157 12.9413 5.30023 12.235 6.49623 11.741C7.69223 11.247 8.94023 11 10.2402 11C11.5402 11 12.7882 11.247 13.9842 11.741C15.1802 12.235 16.2332 12.937 17.1432 13.847C18.0532 14.757 18.7552 15.81 19.2492 17.006C19.7432 18.202 19.9902 19.45 19.9902 20.75C19.9902 21.062 19.8776 21.322 19.6522 21.53C19.4269 21.738 19.1756 21.842 18.8982 21.842H13.4902C13.1956 21.842 12.9399 21.7337 12.7232 21.517C12.5066 21.3003 12.3982 21.0447 12.3982 20.75C12.3982 20.4553 12.5066 20.1997 12.7232 19.983C12.9399 19.7663 13.1956 19.658 13.4902 19.658H17.7542C17.6156 18.7567 17.3296 17.903 16.8962 17.097C16.4629 16.291 15.8996 15.5933 15.2062 15.004C14.5129 14.4147 13.7416 13.9597 12.8922 13.639C12.0429 13.3183 11.1589 13.158 10.2402 13.158C9.32157 13.158 8.43757 13.3183 7.58823 13.639C6.7389 13.9597 5.96757 14.4147 5.27423 15.004C4.5809 15.5933 4.01757 16.291 3.58423 17.097C3.1509 17.903 2.8649 18.7567 2.72623 19.658H6.99023C7.26757 19.658 7.52757 19.762 7.77023 19.97C7.97823 20.2127 8.08223 20.4727 8.08223 20.75C8.08223 21.0273 7.97823 21.2873 7.77023 21.53C7.52757 21.738 7.26757 21.842 6.99023 21.842H1.58223C1.3049 21.842 1.05357 21.738 0.828234 21.53C0.602901 21.322 0.490234 21.062 0.490234 20.75C0.490234 19.45 0.737234 18.2063 1.23123 17.019C1.72523 15.8317 2.43157 14.7787 3.35023 13.86Z" fill="#030712"/>
                                        </svg>
                                    </i>
                                    <span className={styles.accountContent}>
                                        <em className={styles.accountText1}>Welcome</em>
                                        <strong className={styles.accountText2}>{user.data?.username}</strong>
                                    </span>
                                    <div className={styles.accountDropdown}>
                                        <Link className={styles.accountLink}>My Account</Link>
                                        <Link className={styles.accountLink}>Orders</Link>
                                        {
                                            user.data.role === 'admin' &&
                                            <Link className={styles.accountLink} to="/admin/dashboard">Dashboard</Link>
                                        }
                                        <button className={styles.accountLink} onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(logoutUser());
                                            dispatch(clearWishlistSync());
                                            dispatch(clearCartSync());
                                        }}>Logout</button>
                                    </div>
                                </div>
                                :
                                <Link to="/signin" className={styles.accountBtn}>
                                    <i>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9442 9.10201C12.1122 9.63934 11.2109 9.90801 10.2402 9.90801C9.5989 9.90801 8.97923 9.78234 8.38123 9.53101C7.78323 9.27968 7.25457 8.92868 6.79523 8.47801C6.3359 8.02734 5.9849 7.50301 5.74223 6.90501C5.49957 6.30701 5.37823 5.68735 5.37823 5.04601C5.37823 4.04068 5.65123 3.13068 6.19723 2.31601C6.74323 1.50134 7.46257 0.907679 8.35523 0.535011C9.2479 0.162346 10.1969 0.0713444 11.2022 0.262012C12.1382 0.435345 12.9616 0.873011 13.6722 1.57501C14.3829 2.27701 14.8292 3.10901 15.0112 4.07101C15.1932 5.03301 15.1022 5.97334 14.7382 6.89201C14.3742 7.81068 13.7762 8.54734 12.9442 9.10201ZM11.7482 2.78401C11.2976 2.48935 10.7949 2.34201 10.2402 2.34201C9.51223 2.34201 8.8709 2.60201 8.31623 3.12201C7.79623 3.67668 7.53623 4.31801 7.53623 5.04601C7.53623 5.60068 7.6879 6.10334 7.99123 6.55401C8.29457 7.00468 8.69757 7.33401 9.20023 7.54201C9.7029 7.75001 10.2229 7.80201 10.7602 7.69801C11.2976 7.59401 11.7612 7.34701 12.1512 6.95701C12.5412 6.56701 12.7882 6.10334 12.8922 5.56601C12.9962 5.02868 12.9442 4.50868 12.7362 4.00601C12.5282 3.50335 12.1989 3.09601 11.7482 2.78401ZM3.35023 13.86C4.25157 12.9413 5.30023 12.235 6.49623 11.741C7.69223 11.247 8.94023 11 10.2402 11C11.5402 11 12.7882 11.247 13.9842 11.741C15.1802 12.235 16.2332 12.937 17.1432 13.847C18.0532 14.757 18.7552 15.81 19.2492 17.006C19.7432 18.202 19.9902 19.45 19.9902 20.75C19.9902 21.062 19.8776 21.322 19.6522 21.53C19.4269 21.738 19.1756 21.842 18.8982 21.842H13.4902C13.1956 21.842 12.9399 21.7337 12.7232 21.517C12.5066 21.3003 12.3982 21.0447 12.3982 20.75C12.3982 20.4553 12.5066 20.1997 12.7232 19.983C12.9399 19.7663 13.1956 19.658 13.4902 19.658H17.7542C17.6156 18.7567 17.3296 17.903 16.8962 17.097C16.4629 16.291 15.8996 15.5933 15.2062 15.004C14.5129 14.4147 13.7416 13.9597 12.8922 13.639C12.0429 13.3183 11.1589 13.158 10.2402 13.158C9.32157 13.158 8.43757 13.3183 7.58823 13.639C6.7389 13.9597 5.96757 14.4147 5.27423 15.004C4.5809 15.5933 4.01757 16.291 3.58423 17.097C3.1509 17.903 2.8649 18.7567 2.72623 19.658H6.99023C7.26757 19.658 7.52757 19.762 7.77023 19.97C7.97823 20.2127 8.08223 20.4727 8.08223 20.75C8.08223 21.0273 7.97823 21.2873 7.77023 21.53C7.52757 21.738 7.26757 21.842 6.99023 21.842H1.58223C1.3049 21.842 1.05357 21.738 0.828234 21.53C0.602901 21.322 0.490234 21.062 0.490234 20.75C0.490234 19.45 0.737234 18.2063 1.23123 17.019C1.72523 15.8317 2.43157 14.7787 3.35023 13.86Z" fill="#030712"/>
                                        </svg>
                                    </i>
                                    <span className={styles.accountContent}>
                                        <em className={styles.accountText1}>Sign in</em>
                                        <strong className={styles.accountText2}>Account</strong>
                                    </span>
                                </Link>
                            }
                            </>
                        }
                    </div>
                    <div className={styles.rightCol}>
                        <ul className={styles.rightColMenu}>
                            <li>
                                <Link to="/wishlist" className={`${styles.rightColMenuLink} ${styles.wishlist}`}>
                                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66016 2.40801C5.88016 2.40801 5.15649 2.60301 4.48916 2.99301C3.82182 3.38301 3.29316 3.91168 2.90316 4.57901C2.51316 5.24634 2.31816 5.97001 2.31816 6.75001C2.31816 8.53534 2.82949 10.234 3.85216 11.846C4.68416 13.198 5.84549 14.4633 7.33616 15.642C8.67082 16.734 10.2048 17.696 11.9382 18.528L12.0682 18.58C13.8535 17.7307 15.4482 16.7427 16.8522 15.616L16.8002 15.642C18.2908 14.4633 19.4522 13.198 20.2842 11.846C21.3068 10.234 21.8182 8.53534 21.8182 6.75001C21.8182 5.97001 21.6232 5.24634 21.2332 4.57901C20.8432 3.91168 20.3145 3.38301 19.6472 2.99301C18.9798 2.60301 18.2562 2.40801 17.4762 2.40801C16.7828 2.40801 16.1285 2.55968 15.5132 2.86301C14.8978 3.16634 14.3778 3.58234 13.9532 4.11101C13.5285 4.63968 13.2555 5.23334 13.1342 5.89201C13.0822 6.13468 12.9565 6.33834 12.7572 6.50301C12.5578 6.66768 12.3282 6.75001 12.0682 6.75001C11.8082 6.75001 11.5785 6.66768 11.3792 6.50301C11.1798 6.33834 11.0542 6.13468 11.0022 5.89201C10.8808 5.23334 10.6078 4.63968 10.1832 4.11101C9.75849 3.58234 9.23849 3.16634 8.62316 2.86301C8.00782 2.55968 7.35349 2.40801 6.66016 2.40801ZM12.0682 20.842C11.9122 20.8247 11.7562 20.79 11.6002 20.738C11.5135 20.7033 11.3662 20.634 11.1582 20.53C9.25149 19.6287 7.50949 18.5453 5.93216 17.28L5.98416 17.332C4.30282 16.0147 2.97682 14.576 2.00616 13.016C0.77549 11.04 0.160156 8.95134 0.160156 6.75001C0.160156 5.57134 0.45049 4.48368 1.03116 3.48701C1.61182 2.49034 2.40049 1.70168 3.39716 1.12101C4.39382 0.540344 5.48149 0.25001 6.66016 0.25001C7.75216 0.25001 8.77049 0.497009 9.71516 0.991011C10.6598 1.48501 11.4442 2.15668 12.0682 3.00601V3.03201C12.6922 2.16534 13.4765 1.48501 14.4212 0.991011C15.3658 0.497009 16.3842 0.25001 17.4762 0.25001C18.6548 0.25001 19.7425 0.540344 20.7392 1.12101C21.7358 1.70168 22.5245 2.49034 23.1052 3.48701C23.6858 4.48368 23.9762 5.57134 23.9762 6.75001C23.9762 8.95134 23.3608 11.04 22.1302 13.016C21.1595 14.576 19.8335 16.0147 18.1522 17.332C16.6095 18.5453 14.9368 19.594 13.1342 20.478L12.9782 20.53C12.5622 20.738 12.2588 20.842 12.0682 20.842Z" fill="#030712"/>
                                    </svg>
                                    <span className={styles.linkCount}>{wishlist.length}</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/cart" className={styles.rightColMenuLink}>
                                    <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.1822 0.25H1.07016C0.810156 0.284666 0.59349 0.406 0.420156 0.614C0.246823 0.822001 0.160156 1.056 0.160156 1.316C0.160156 1.576 0.246823 1.81433 0.420156 2.031C0.59349 2.24767 0.810156 2.37333 1.07016 2.408H5.25616L4.50216 12.002V12.184C4.50216 12.7733 4.71449 13.2803 5.13916 13.705C5.56382 14.1297 6.07082 14.342 6.66016 14.342H19.9462C20.4662 14.342 20.9212 14.1817 21.3112 13.861C21.7012 13.5403 21.9482 13.146 22.0522 12.678L24.2882 2.902C24.3228 2.694 24.3402 2.52933 24.3402 2.408C24.3402 1.80133 24.1322 1.29 23.7162 0.874001C23.3002 0.458 22.7888 0.25 22.1822 0.25ZM19.9462 12.158H6.66016L7.41416 2.408H22.1822L19.9462 12.158ZM8.66216 19.75C9.26882 19.75 9.78449 19.5377 10.2092 19.113C10.6338 18.6883 10.8462 18.1727 10.8462 17.566C10.8462 16.9593 10.6338 16.448 10.2092 16.032C9.78449 15.616 9.26882 15.408 8.66216 15.408C8.07282 15.408 7.56582 15.616 7.14116 16.032C6.71649 16.448 6.50416 16.9593 6.50416 17.566C6.50416 18.1727 6.71649 18.6883 7.14116 19.113C7.56582 19.5377 8.07282 19.75 8.66216 19.75ZM18.4122 19.75C19.0188 19.75 19.5345 19.5377 19.9592 19.113C20.3838 18.6883 20.5962 18.1727 20.5962 17.566C20.5962 16.9593 20.3838 16.448 19.9592 16.032C19.5345 15.616 19.0188 15.408 18.4122 15.408C17.8228 15.408 17.3158 15.616 16.8912 16.032C16.4665 16.448 16.2542 16.9593 16.2542 17.566C16.2542 18.1727 16.4665 18.6883 16.8912 19.113C17.3158 19.5377 17.8228 19.75 18.4122 19.75Z" fill="#030712"/>
                                    </svg>
                                    <span className={styles.linkCount}>{cart.length}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className={`${styles.searchBackdrop} ${backdrop ? `${styles.show}` : ''}`}></div>
            <LocationModal show={showModal} onClose={() => setShowModal(false)} onChange={handleLocationChange}/>
            <aside className={`${styles.mobileNav} ${mobileNav ? `${styles.show}` : ""}`}>
                <div className={styles.navHeader}>
                    <button className={styles.closeBtn} aria-label='close' onClick={() => setMobileNav(false)}>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.mobileNavLocation}>
                    <div className={styles.locationWrapper}>
                        <em className={styles.locationText1}>Deliver to</em>
                        <i>
                            <svg width="15" height="19" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.542 -5.72205e-06C7.826 -5.72205e-06 6.23133 0.433329 4.758 1.3C3.31933 2.13199 2.17533 3.26733 1.326 4.706C0.442 6.19666 0 7.80866 0 9.542C0 11.3967 0.632667 13.364 1.898 15.444C2.85133 17.0213 4.12533 18.616 5.72 20.228C6.58667 21.0947 7.57467 21.996 8.684 22.932L8.996 23.192C9.048 23.244 9.126 23.2917 9.23 23.335C9.334 23.3783 9.44233 23.4 9.555 23.4C9.66767 23.4 9.763 23.387 9.841 23.361C9.919 23.335 10.0013 23.2787 10.088 23.192L10.4 22.932C11.5093 21.996 12.4973 21.0947 13.364 20.228C14.9587 18.616 16.2327 17.0213 17.186 15.444C18.4513 13.364 19.084 11.3967 19.084 9.542C19.084 7.80866 18.642 6.19666 17.758 4.706C16.9087 3.26733 15.7647 2.13199 14.326 1.3C12.8527 0.433329 11.258 -5.72205e-06 9.542 -5.72205e-06ZM9.542 21.346C8.62333 20.6007 7.68733 19.7427 6.734 18.772C5.33 17.2987 4.212 15.86 3.38 14.456C2.288 12.636 1.742 10.9633 1.742 9.43799C1.742 8.01666 2.09733 6.69933 2.808 5.48599C3.484 4.30733 4.41133 3.38 5.59 2.70399C6.80333 1.99333 8.12067 1.63799 9.542 1.63799C10.9633 1.63799 12.2807 2.002 13.494 2.73C14.6727 3.42333 15.6087 4.36799 16.302 5.564C16.9953 6.75999 17.342 8.05133 17.342 9.43799C17.342 11.0153 16.796 12.714 15.704 14.534C14.872 15.9207 13.754 17.342 12.35 18.798C11.4313 19.734 10.4953 20.5833 9.542 21.346ZM9.542 5.408C8.79667 5.408 8.112 5.59433 7.488 5.967C6.864 6.33966 6.36567 6.84233 5.993 7.47499C5.62033 8.10766 5.434 8.79666 5.434 9.542C5.434 10.2873 5.62033 10.9763 5.993 11.609C6.36567 12.2417 6.864 12.74 7.488 13.104C8.112 13.468 8.79667 13.65 9.542 13.65C10.2873 13.65 10.9763 13.4637 11.609 13.091C12.2417 12.7183 12.74 12.22 13.104 11.596C13.468 10.972 13.65 10.2873 13.65 9.542C13.65 8.79666 13.468 8.10766 13.104 7.47499C12.74 6.84233 12.2417 6.33966 11.609 5.967C10.9763 5.59433 10.2873 5.408 9.542 5.408ZM9.542 11.908C8.88333 11.908 8.32 11.674 7.852 11.206C7.384 10.738 7.15 10.1833 7.15 9.542C7.15 9.10866 7.25833 8.70999 7.475 8.34599C7.69167 7.98199 7.982 7.69166 8.346 7.47499C8.71 7.25833 9.10867 7.14999 9.542 7.14999C9.97533 7.14999 10.374 7.25833 10.738 7.47499C11.102 7.69166 11.3923 7.98199 11.609 8.34599C11.8257 8.70999 11.934 9.10866 11.934 9.542C11.934 10.1833 11.7 10.738 11.232 11.206C10.764 11.674 10.2007 11.908 9.542 11.908Z" fill="#030712"/>
                            </svg>
                        </i>
                        <strong className={styles.locationText2}>{location}</strong>
                    </div>
                    <button className={styles.locationChangeBtn} onClick={() => setShowModal(true)}>Change</button>
                </div>
                <div className={styles.mobileNavBody}>
                    <h4 className={styles.mobileNavHeading}>Top Categories</h4>
                    <ul className={styles.mobileMenu}>
                        <li>
                            <Link className={styles.menuLink} to="/shop">
                                Groceries
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/shop">
                                Groceries
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/shop">
                                Groceries
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/shop">
                                Groceries
                            </Link>
                        </li>
                    </ul>
                    <h4 className={styles.mobileNavHeading}>Quick Links</h4>
                    <ul className={styles.mobileMenu}>
                        <li>
                            <Link className={styles.menuLink} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/about-us">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/wishlist">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.menuLink} to="/track-order">
                                Order Tracking
                            </Link>
                        </li>
                    </ul>
                    <h4 className={styles.mobileNavHeading}>Contact Details</h4>
                    <ul className={styles.widgetMedia}>
                        <li>
                            <i>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                                </svg>
                            </i>
                            <div className={styles.contactDetails}>
                                <span>Monday-Friday: 08am-9pm</span><br/>
                                <Link to="tel:0800300353">0 800 300-353</Link>
                            </div>
                        </li>
                        <li>
                            <i>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                                </svg>
                            </i>
                            <div className={styles.contactDetails}>
                                <span>Need help with your order?</span><br/>
                                <Link to="mailto:info@grogin.com">info@grogin.com</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.mobileAccount}>
                    <Link to="/signin" className={styles.accountBtn}>
                        <i>
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9442 9.10201C12.1122 9.63934 11.2109 9.90801 10.2402 9.90801C9.5989 9.90801 8.97923 9.78234 8.38123 9.53101C7.78323 9.27968 7.25457 8.92868 6.79523 8.47801C6.3359 8.02734 5.9849 7.50301 5.74223 6.90501C5.49957 6.30701 5.37823 5.68735 5.37823 5.04601C5.37823 4.04068 5.65123 3.13068 6.19723 2.31601C6.74323 1.50134 7.46257 0.907679 8.35523 0.535011C9.2479 0.162346 10.1969 0.0713444 11.2022 0.262012C12.1382 0.435345 12.9616 0.873011 13.6722 1.57501C14.3829 2.27701 14.8292 3.10901 15.0112 4.07101C15.1932 5.03301 15.1022 5.97334 14.7382 6.89201C14.3742 7.81068 13.7762 8.54734 12.9442 9.10201ZM11.7482 2.78401C11.2976 2.48935 10.7949 2.34201 10.2402 2.34201C9.51223 2.34201 8.8709 2.60201 8.31623 3.12201C7.79623 3.67668 7.53623 4.31801 7.53623 5.04601C7.53623 5.60068 7.6879 6.10334 7.99123 6.55401C8.29457 7.00468 8.69757 7.33401 9.20023 7.54201C9.7029 7.75001 10.2229 7.80201 10.7602 7.69801C11.2976 7.59401 11.7612 7.34701 12.1512 6.95701C12.5412 6.56701 12.7882 6.10334 12.8922 5.56601C12.9962 5.02868 12.9442 4.50868 12.7362 4.00601C12.5282 3.50335 12.1989 3.09601 11.7482 2.78401ZM3.35023 13.86C4.25157 12.9413 5.30023 12.235 6.49623 11.741C7.69223 11.247 8.94023 11 10.2402 11C11.5402 11 12.7882 11.247 13.9842 11.741C15.1802 12.235 16.2332 12.937 17.1432 13.847C18.0532 14.757 18.7552 15.81 19.2492 17.006C19.7432 18.202 19.9902 19.45 19.9902 20.75C19.9902 21.062 19.8776 21.322 19.6522 21.53C19.4269 21.738 19.1756 21.842 18.8982 21.842H13.4902C13.1956 21.842 12.9399 21.7337 12.7232 21.517C12.5066 21.3003 12.3982 21.0447 12.3982 20.75C12.3982 20.4553 12.5066 20.1997 12.7232 19.983C12.9399 19.7663 13.1956 19.658 13.4902 19.658H17.7542C17.6156 18.7567 17.3296 17.903 16.8962 17.097C16.4629 16.291 15.8996 15.5933 15.2062 15.004C14.5129 14.4147 13.7416 13.9597 12.8922 13.639C12.0429 13.3183 11.1589 13.158 10.2402 13.158C9.32157 13.158 8.43757 13.3183 7.58823 13.639C6.7389 13.9597 5.96757 14.4147 5.27423 15.004C4.5809 15.5933 4.01757 16.291 3.58423 17.097C3.1509 17.903 2.8649 18.7567 2.72623 19.658H6.99023C7.26757 19.658 7.52757 19.762 7.77023 19.97C7.97823 20.2127 8.08223 20.4727 8.08223 20.75C8.08223 21.0273 7.97823 21.2873 7.77023 21.53C7.52757 21.738 7.26757 21.842 6.99023 21.842H1.58223C1.3049 21.842 1.05357 21.738 0.828234 21.53C0.602901 21.322 0.490234 21.062 0.490234 20.75C0.490234 19.45 0.737234 18.2063 1.23123 17.019C1.72523 15.8317 2.43157 14.7787 3.35023 13.86Z" fill="#030712"/>
                            </svg>
                        </i>
                        <span className={styles.accountContent}>
                            <em className={styles.accountText1}>Sign In</em>
                            <strong className={styles.accountText2}>Account</strong>
                        </span>
                    </Link>
                </div>
            </aside>
        </header>
    )
}

export default Header