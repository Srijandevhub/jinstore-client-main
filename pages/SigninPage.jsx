import { useSelector } from "react-redux"
import SigninForm from "../components/SigninForm/SigninForm"
import Layout from "../layout/Layout"
import { Navigate } from "react-router-dom";

const SigninPage = () => {
    const user = useSelector((state) => state.user.data);
    if (user) {
        return <Navigate to="/"/>
    }
    return (
        <Layout>
            <SigninForm />
        </Layout>
    )
}

export default SigninPage