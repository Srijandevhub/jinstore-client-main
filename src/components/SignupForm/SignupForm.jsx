import styles from './SignupForm.module.css'
import FormControl from '../FormGroups/FormControl'
import FormCheck from '../FormGroups/FormCheck';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);

    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            if (!username.trim()) {
                usernameRef.current.focus();
                return;
            }
            if (!email.trim()) {
                emailRef.current.focus();
                return;
            }
            if (!password.trim()) {
                passwordRef.current.focus();
                return;
            }

            if (!agree) {
                toast.warning("Please agree the terms & conditions", {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
                return;
            }
            let wishlist;
            if (localStorage.getItem("wishlistproducts")) {
                wishlist = JSON.parse(localStorage.getItem("wishlistproducts"));

            }

            const res = await axios.post("http://localhost:5000/api/v1/user/register-user", { username, email, password, wishlist: JSON.stringify(wishlist) });
            
            if (res.status === 200) {
                navigate("/signin");
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
            <h1 className={styles.formHeading}>Register</h1>
            <FormControl label={"Username"} required={true} value={username} onChange={(value) => setUsername(value)} id={"username"} reference={usernameRef}/>
            <FormControl label={"Email"} required={true} value={email} onChange={(value) => setEmail(value)} id={"email"} type='email' reference={emailRef}/>
            <FormControl label={"Password"} required={true} value={password} onChange={(value) => setPassword(value)} type='password' id={"password"} reference={passwordRef}/>
            <FormCheck id={"agree"} label={"Agree Terms & Conditions"} checked={agree} onChange={(value) => setAgree(value)}/>
            <button className={styles.submitbtn} onClick={() => onSubmit()}>Register</button>
            <p className={styles.text}>Already have an account ? <Link to="/signin">Login here</Link></p>
        </div>
    )
}

export default SignupForm