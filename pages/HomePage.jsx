import Banner from "../components/Banner/Banner"
import Categories from "../components/Categories/Categories"
import ProductSection from "../components/ProductsSection/ProductSection"
import Layout from "../layout/Layout"

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <Categories />
            <ProductSection />
        </Layout>
    )
}

export default HomePage