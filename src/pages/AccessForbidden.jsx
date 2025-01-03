import Layout from "../layout/Layout"

const AccessForbidden = () => {
    return (
        <Layout>
            <h1 style={{ textAlign: 'center' }}>403</h1>
            <h2 style={{ textAlign: 'center' }}>Access Forbidden</h2>
            <h3 style={{ textAlign: 'center' }}>You are not allowed to access this page</h3>
            <h4 style={{ textAlign: 'center' }}>To access the page please contact the admin</h4>
        </Layout>
    )
}

export default AccessForbidden