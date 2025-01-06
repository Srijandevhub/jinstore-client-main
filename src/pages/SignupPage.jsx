import { useSelector } from "react-redux";
import SignupForm from "../components/SignupForm/SignupForm.jsx"
import Layout from "../layout/Layout"
import { Navigate } from "react-router-dom";

const SignupPage = () => {
    const user = useSelector((state) => state.user.data);
    if (user) {
        return <Navigate to="/"/>
    }
    return (
        <Layout>
            <SignupForm />
        </Layout>
    )
}

export default SignupPage