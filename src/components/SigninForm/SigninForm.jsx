import { useState } from 'react'
import FormControl from '../FormGroups/FormControl'
import styles from './SigninForm.module.css'
import FormCheck from '../FormGroups/FormCheck';
import { Link } from 'react-router-dom';
const SigninForm = () => {
    const [cred, setCred] = useState("");
    const [password, setPassword] = useState("");
    const [rememberme, setRememberme] = useState(false);
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.formHeading}>Login</h1>
            <FormControl label={"Username or Email"} required={true} value={cred} onChange={(value) => setCred(value)} id={"cred"}/>
            <FormControl label={"Password"} required={true} value={password} onChange={(value) => setPassword(value)} type='password' id={"password"}/>
            <FormCheck id={"rememberme"} label={"Remember Me"} checked={rememberme} onChange={(value) => setRememberme(value)}/>
            <button className={styles.submitbtn}>Log in</button>
            <p className={styles.text}>Don't have an account ? <Link to="/signup">Create here</Link></p>
        </div>
    )
}

export default SigninForm