import { useEffect, useState } from "react";
import ContainerFluid from "../components/ContainerFluid/ContainerFluid";
import FormControl from "../components/FormGroups/FormControl";
import AdminLayout from "../layout/AdminLayout"
import { Flip, toast } from "react-toastify";
import axios from "axios";
import FileControl from "../components/FormGroups/FileControl";
import Table from "../components/Table/Table";

const AdminCategories = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const [refresh, setRefresh] = useState(true);
    const handleAddCategory = async () => {
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("thumbnail", file);
            const res = await axios.post("http://localhost:5000/api/v1/category/save-category", formData, {
                "Content-Type": 'multipart/form-data',
                withCredentials: true
            });
            if (res.status === 200) {
                toast.success(res.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
                setRefresh(!refresh);
                setTitle("");
                setDescription("");
                setFile(null);
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.warning(error.response.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
            } else {
                toast.error(error.response.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
            }
        }
    }

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/category/delete-category/${id}`, { withCredentials: true });
            if (res.status === 200) {
                setRefresh(!refresh);
            }
        } catch (error) {
            if (error.response.status === 400) {
                toast.warning(error.response.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
            } else {
                toast.error(error.response.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
            }
        }
    }

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/category/get-categories");
                if (res.status === 200) {
                    setCategories(res.data.categories);
                }
            } catch (error) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    });
                } else {
                    toast.error(error.response.data.message, {
                        position: 'top-right',
                        transition: Flip,
                        autoClose: 3000,
                        pauseOnHover: false,
                        progress: false,
                        hideProgressBar: true
                    });
                }
            }
        }
        fetchCategories();
    }, [refresh])
    return (
        <AdminLayout menuactive={"categories"}>
            <ContainerFluid>
                <div className="row">
                    <div className="col-md-3">
                        <FormControl label={"Title"} required={true} value={title} onChange={(value) => setTitle(value)} id={"title"}/>
                    </div>
                    <div className="col-md-3">
                        <FormControl label={"Description"} required={true} value={description} onChange={(value) => setDescription(value)} id={"description"}/>
                    </div>
                    <div className="col-md-3">
                        <FileControl label={"File"} required={true} onChange={(value) => setFile(value)} id={"thumbnail"}/>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary" onClick={() => handleAddCategory()}>Add Category</button>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <img src={`http://localhost:5000/uploads/categories/${item.thumbnail}`} alt="thumbnail"/>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
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

export default AdminCategories;