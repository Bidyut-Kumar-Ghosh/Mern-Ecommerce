import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from "react-hot-toast"
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';
const CreateCategory = () => {
    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")

    //handle form
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/v1/category/create-category', { name })
            if (data.success) {
                alert(`${name} is created`)

            } else {
                alert(data.message)
            }
        } catch (error) {
            console.log(error)
            alert('Something went wrong in input form')

        }
    }


    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category')
            if (data.success) {
                setCategories(data.category)
                // alert(`Get all ${data.category}`)
            }
        } catch (error) {
            console.log(error)
            alert('something went wrong')

        }
    }

    useEffect(() => {
        getAllCategory();
    }, []);
    return (
        <Layout title={"Dashboard - All Users"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <h1>Manage Category</h1>
                        <div className='p-3'>
                            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                        </div>
                        <div className='w-75'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories?.map((c) => (
                                        <>
                                            <tr>
                                                <td key={c._id}>{c.name}</td>
                                                <td>
                                                    <button className='btn btn-primary ms-2'>Edit</button>
                                                    <button className='btn btn-danger ms-2'>Delete</button>
                                                </td>
                                            </tr>
                                        </>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CreateCategory