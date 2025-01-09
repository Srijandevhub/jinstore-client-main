import AdminBanners from "../components/Banner/AdminBanners"
import ContainerFluid from "../components/ContainerFluid/ContainerFluid"
import AdminLayout from "../layout/AdminLayout"

const AdminBanner = () => {
    return (
        <AdminLayout menuactive={"banners"}>
            <ContainerFluid>
                <AdminBanners />
            </ContainerFluid>
        </AdminLayout>
    )
}

export default AdminBanner 