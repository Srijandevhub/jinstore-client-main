import { useEffect, useState } from 'react'
import FormControl from '../FormGroups/FormControl'
import styles from './AdminBanners.module.css'
import FileControl from '../FormGroups/FileControl';
import Table from '../Table/Table';
import { Flip, toast } from 'react-toastify';
import axios from 'axios';
const AdminBanners = () => {
    const [heading, setHeading] = useState("");
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");
    const [slug, setSlug] = useState("");
    const [banners, setBanners] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const handleAddBanner = async () => {
        try {
            const formData = new FormData();
            formData.append("heading", heading);
            formData.append("description", text);
            formData.append("slug", slug);
            formData.append("image", image);
            const res = await axios.post("http://localhost:5000/api/v1/banner/add-banner", formData, {
                "Content-Type": "multipart/form-data",
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
                setHeading("");
                setText("");
                setImage(null);
                setSlug("");
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
    const handleDeleteBanner = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/v1/banner/delete-banner/${id}`, { withCredentials: true });
            if (res.status === 200) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/banner/get-banners");
                if (res.status === 200) {
                    setBanners(res.data.banners);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchBanners();
    }, [refresh])
    return (
        <div className={styles.wrapper}>
            <div className='row'>
                <div className='col-md-6'>
                    <FileControl label={"Banner Image"} required={true} onChange={(value) => setImage(value)} id={"ban_image"}/>
                </div>
                <div className='col-md-6'>
                    <FormControl label={"Heading"} required={true} value={heading} onChange={(value) => setHeading(value)} id={"heading"}/>
                </div>
                <div className='col-md-6'>
                    <FormControl label={"Description"} required={true} value={text} onChange={(value) => setText(value)} id={"text"}/>
                </div>
                <div className='col-md-6'>
                    <FormControl label={"Slug"} required={true} value={slug} onChange={(value) => setSlug(value)} id={"slug"}/>
                </div>
                <div className='col-md-6'>
                    <button className='btn btn-primary' onClick={() => handleAddBanner()}>Add Banner</button>
                </div>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Image</th>
                        <th>Heading</th>
                        <th>Text</th>
                        <th>Slug</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        banners.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={`http://localhost:5000/uploads/banners/${item.image}`} alt="banner"/>
                                    </td>
                                    <td>{item.heading}</td>
                                    <td>{item.text}</td>
                                    <td>{item.slug}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => handleDeleteBanner(item._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AdminBanners