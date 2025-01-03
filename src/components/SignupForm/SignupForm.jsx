import styles from './SignupForm.module.css'
import FormControl from '../FormGroups/FormControl'
import FormCheck from '../FormGroups/FormCheck';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.formHeading}>Register</h1>
            <FormControl label={"Username"} required={true} value={username} onChange={(value) => setUsername(value)} id={"username"}/>
            <FormControl label={"Email"} required={true} value={email} onChange={(value) => setEmail(value)} id={"email"} type='email'/>
            <FormControl label={"Password"} required={true} value={password} onChange={(value) => setPassword(value)} type='password' id={"password"}/>
            <FormCheck id={"agree"} label={"Agree Terms & Conditions"} checked={agree} onChange={(value) => setAgree(value)}/>
            <button className={styles.submitbtn}>Register</button>
            <p className={styles.text}>Already have an account ? <Link to="/signin">Login here</Link></p>
        </div>
    )
}

export default SignupForm