import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const { Option } = Select


const CreateProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [shipping, setShipping] = useState("")
    const [photo, setPhoto] = useState("")

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category')
            if (data?.success) {
                setCategories(data?.category)
                toast.success(`Get all ${data.category}`)
            }
        } catch (error) {
            console.log(error)
            toast.success('something went wrong')

        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);
    //create product function
    const handleCreate = async (e) => {
        e.preventDefault()
        try {
            const productData = new FormData()
            productData.append('name', name)
            productData.append('description', description)
            productData.append('price', price)
            productData.append('category', category)
            productData.append('quantity', quantity)
            productData.append('shipping', shipping)
            productData.append('photo', photo)
            const { data } = await axios.post('/api/v1/product/create-product', productData);
            if (data?.success) {
                toast.success(data?.message)

            } else {
                toast.success("Product created successfully")
                navigate(`/dashboard/admin/products`)

            }

        } catch (error) {
            console.log(error)
            toast.success('something went wrong')
        }
    };


    return (
        <Layout title={"Dashboard - All Users"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Create Product</h1>
                        <div className='m-1 w-75'>
                            <Select bordered={false} placeholder="Select a Category" size='large' showSearch className='form-select mb-3' onChange={(value) => { setCategory(value) }}>
                                {categories?.map(c => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}

                            </Select>

                            <div className='mb-3'>
                                <label className='btn btn-outline-secondary col-md-12'>
                                    {photo ? photo.name : "Upload Photo"}
                                    <input type='file' name='photo' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
                                </label>
                            </div>
                            <div className='mb-3'>
                                {photo && (
                                    <div className='text-center'>
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt='Product_Photo'
                                            height={'200px'}
                                            className='img img-responsive' />
                                    </div>
                                )}
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    value={name}
                                    placeholder='Write a Name'
                                    className='form-control'
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='text'
                                    value={description}
                                    placeholder='Write Product Description'
                                    className='form-control'
                                    onChange={(e) => setDescription(e.target.value)}

                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='number'
                                    value={price}
                                    placeholder='Write a Price'
                                    className='form-control'
                                    onChange={(e) => setPrice(e.target.value)}

                                />
                            </div>
                            <div className='mb-3'>
                                <input
                                    type='number'
                                    value={quantity}
                                    placeholder='Quantity'
                                    className='form-control'
                                    onChange={(e) => setQuantity(e.target.value)}

                                />
                            </div>
                            <div className='mb-3'>
                                <Select
                                    bordered={false}
                                    size='large'
                                    showSearch
                                    placeholder='Select Shipping'
                                    className='form-select mb-3'
                                    onChange={(value) => { setShipping(value) }}

                                >
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className='mb-3'>
                                <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CreateProduct