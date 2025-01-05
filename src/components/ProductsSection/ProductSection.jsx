import CategoryProducts from "../CategoryProducts/CategoryProducts"
import HomeProducts from "../HomeProducts/HomeProducts"
import TopProducts from "../TopProducts/TopProducts"

const ProductSection = () => {
    return (
        <div style={{ background: `linear-gradient( to bottom, rgb(236, 235, 238) 0%, rgba(255, 255, 255, 0) 100%)` }}>
            <TopProducts />
            <CategoryProducts />
            <HomeProducts />
        </div>
    )
}

export default ProductSection