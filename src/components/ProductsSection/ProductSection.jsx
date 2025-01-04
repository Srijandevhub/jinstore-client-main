import CategoryProducts from "../CategoryProducts/CategoryProducts"
import HomeProducts from "../HomeProducts/HomeProducts"

const ProductSection = () => {
    return (
        <div style={{ background: `linear-gradient(to bottom, rgba(236, 235, 238, 10) 0%, rgba(255, 255, 255, 0) 100%)` }}>
            <CategoryProducts />
            <HomeProducts />
        </div>
    )
}

export default ProductSection