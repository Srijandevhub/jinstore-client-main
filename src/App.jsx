import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import AdminDashboard from "./pages/AdminDashboard"
import AccessForbidden from "./pages/AccessForbidden"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/signin" element={<SigninPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
                <Route path="/admin/dashboard" element={<AdminDashboard />}/>
                <Route path="/access-forbidden" element={<AccessForbidden />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App