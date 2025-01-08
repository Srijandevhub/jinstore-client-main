import { useRef, useState } from 'react'
import FormControl from '../FormGroups/FormControl'
import styles from './SigninForm.module.css'
import FormCheck from '../FormGroups/FormCheck';
import { Link, useNavigate } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
const SigninForm = () => {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [rememberme, setRememberme] = useState(false);

    const identifierRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();
<<<<<<< HEAD

=======
>>>>>>> Srijan
    const onSubmit = async () => {
        try {
            if (!identifier.trim()) {
                identifierRef.current.focus();
                return;
            }
            if (!password.trim()) {
                password.current.focus();
            }
            let wishlist;
            if (localStorage.getItem("wishlistproducts")) {
                wishlist = JSON.parse(localStorage.getItem("wishlistproducts"));

<<<<<<< HEAD
            }

            const res = await axios.post("http://localhost:5000/api/v1/user/login-user", { identifier: identifier, password: password, rememberme: rememberme, wishlist: JSON.stringify(wishlist), cart: "" }, { withCredentials: true });

=======
            const res = await axios.post("http://localhost:5000/api/v1/user/login-user", { identifier: identifier, password: password, rememberme: rememberme }, { withCredentials: true });
            console.log(res);
>>>>>>> Srijan
            if (res.status === 200) {
                navigate("/");
                localStorage.removeItem("wishlistproducts");
            }

        } catch (error) {
            if (error.response.status === 400) {
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

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.formHeading}>Login</h1>
            <FormControl label={"Username or Email"} required={true} value={identifier} onChange={(value) => setIdentifier(value)} id={"cred"} reference={identifierRef}/>
            <FormControl label={"Password"} required={true} value={password} onChange={(value) => setPassword(value)} type='password' id={"password"} reference={passwordRef}/>
            <FormCheck id={"rememberme"} label={"Remember Me"} checked={rememberme} onChange={(value) => setRememberme(value)}/>
            <button className={styles.submitbtn} onClick={() => onSubmit()}>Log in</button>
            <p className={styles.text}>Don't have an account ? <Link to="/signup">Create here</Link></p>
        </div>
    )
}

export default SigninForm