import { useEffect, useState } from "react"
import ContainerFluid from "../components/ContainerFluid/ContainerFluid"
import AdminLayout from "../layout/AdminLayout"
import axios from "axios";
import SelectControl from "../components/FormGroups/SelectControl";
import FormControl from "../components/FormGroups/FormControl";
import FormCheck from "../components/FormGroups/FormCheck";
import FileControl from "../components/FormGroups/FileControl";
import FileControlMultiple from "../components/FormGroups/FileControlMultiple";
import Table from "../components/Table/Table";

const AdminProducts = () => {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [title, setTitle] = useState("");
    const [shortdescription, setShortdescription] = useState("");
    const [description, setDescription] = useState("");
    const [sku, setSku] = useState("");
    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [isorganic, setIsorganic] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const [images, setImages] = useState([]);
    
    const handleAddProduct = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("shortdescription", shortdescription);
            formData.append("description", description);
            formData.append("sku", sku);
            formData.append("price", price);
            formData.append("discount", discount);
            formData.append("isorganic", isorganic);
            formData.append("categoryid", selectedCategory);
            formData.append("brandid", selectedBrand);
            formData.append("thumbnail", thumbnail);
            Array.from(images).forEach((file) => formData.append("images", file));
            const res = await axios.post("http://localhost:5000/api/v1/product/add-product", formData, { 
                "Content-Type": 'multipart/form-data',
                withCredentials: true
             });
            if (res.status === 200) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const handleDeleteProduct = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/product/delete-product/${id}`, { withCredentials: true });
            if (res.status === 200) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/product/get-products");
                if (res.status === 200) {
                    setProducts(res.data.products);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [refresh])
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/brand/get-brands", { withCredentials: true });
                if (res.status === 200) {
                    setBrands(res.data.brands);
                }
            } catch (error) {
                console.log(error);
            }
        }
        const fetchCategories = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/category/get-categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchBrands();
        fetchCategories();
    }, [])
    return (
        <AdminLayout menuactive={"products"}>
            <ContainerFluid>
                <div className="row">
                    <div className="col-md-6">
                        <SelectControl label={"Brand"} id={"brand"} selectedValue={selectedBrand} onChange={(value) => setSelectedBrand(value)}>
                            {
                                brands.map((item, index) => {
                                    return <option value={item._id} key={index}>{item.name}</option>
                                })
                            }
                        </SelectControl>
                    </div>
                    <div className="col-md-6">
                        <SelectControl label={"Category"} id={"category"} selectedValue={selectedCategory} onChange={(value) => setSelectedCategory(value)}>
                            {
                                categories.map((item, index) => {
                                    return <option value={item._id} key={index}>{item.title}</option>
                                })
                            }
                        </SelectControl>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Title"} required={true} id="title" value={title} onChange={(value) => setTitle(value)}/>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Short Description"} required={true} id="shortdescription" value={shortdescription} onChange={(value) => setShortdescription(value)}/>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Description"} required={true} id="description" value={description} onChange={(value) => setDescription(value)}/>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Sku"} required={true} id="sku" value={sku} onChange={(value) => setSku(value)}/>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Price"} required={true} id="price" value={price} onChange={(value) => setPrice(value)}/>
                    </div>
                    <div className="col-12">
                        <FormControl label={"Discount"} required={true} id="discount" value={discount} onChange={(value) => setDiscount(value)}/>
                    </div>
                    <div className="col-12">
                        <FormCheck label={"Is Organic"} checked={isorganic} onChange={(value) => setIsorganic(value)} id={"isorganic"}/>
                    </div>
                    <div className="col-md-6">
                        <FileControl label={"Thumbnail"} onChange={(value) => setThumbnail(value)} id={"thumbnail"} required={true}/>
                    </div>
                    <div className="col-md-6">
                        <FileControlMultiple label={"Images"} onChange={(files) => setImages(files)} id={"images"} required={true}/>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={() => handleAddProduct()}>Add Product</button>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>ID</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Images</th>
                            <th>SKU</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item._id}</td>
                                        <td>
                                            <img src={`http://localhost:5000/uploads/products/${item.thumbnail}`} alt="thumbnail"/>
                                        </td>
                                        <td>{item.title}</td>
                                        <td>
                                            {
                                                item.images.map((image, index) => {
                                                    return <img src={`http://localhost:5000/uploads/products/${image}`} alt="image" key={index}/>
                                                })
                                            }
                                        </td>
                                        <td>{item.sku}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDeleteProduct(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </ContainerFluid>
        </AdminLayout>
    )
}

export default AdminProducts