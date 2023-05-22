import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'




const HomePage = () => {
    const [auth, setAuth] = useAuth()
    return (
        <Layout title={"All Products - Best Offers"}>
            <div className='row'>
                <div className='col-md-3'>
                    <h6 className='text-center'>Filter By Category</h6>
                </div>
            </div>

        </Layout>
    )
}

export default HomePage