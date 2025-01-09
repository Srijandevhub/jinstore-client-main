import { useEffect, useState } from "react"
import ContainerFluid from "../components/ContainerFluid/ContainerFluid"
import FormControl from "../components/FormGroups/FormControl"
import AdminLayout from "../layout/AdminLayout"
import { Flip, toast } from "react-toastify"
import axios from "axios"
import Table from "../components/Table/Table"

const AdminBrands = () => {
    const [name, setName] = useState("");
    const handleAddBrand = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/brand/add-brand", {
                name: name
            }, { withCredentials: true });
            if (res.status === 200) {
                toast.success(res.data.message, {
                    position: 'top-right',
                    transition: Flip,
                    autoClose: 3000,
                    pauseOnHover: false,
                    progress: false,
                    hideProgressBar: true
                });
                setName("");
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
    const handleDeleteBrand = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/brand/delete-brand/${id}`, { withCredentials: true });
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
    const [brands, setBrands] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/brand/get-brands", { withCredentials: true });
                if (res.status === 200) {
                    setBrands(res.data.brands);
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
        fetchData();
    }, [refresh])
    return (
        <AdminLayout menuactive={"brands"}>
            <ContainerFluid>
                <div className="row">
                    <div className="col-md-6">
                        <FormControl label={"Name"} id={"name"} value={name} onChange={(value) => setName(value)}/>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary" onClick={() => handleAddBrand()}>Add Brand</button>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => handleDeleteBrand(item._id)}>Delete</button>
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

export default AdminBrands