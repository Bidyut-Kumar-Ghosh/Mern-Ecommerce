import React, { useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from '../../context/auth';
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate();
    const location = useLocation();



    // form function
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,
                { email, password }
            );
            if (res?.data.success) {

                toast.success(res.data.message)
                setAuth({
                    ...auth,
                    //Ayuth
                    user: res.data.user,
                    token: res.data.token
                })
                localStorage.setItem('auth', JSON.stringify(res.data))
                console.log(res)
                navigate(location.state || "/");
                toast.success("Sucessfull Login")
            }
            else {
                toast.error(res.data.message)

            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }



        // console.log(name, email, phone, password, address);
        // toast.success('Register Successfully')
    }
    return (
        <Layout title="Register Ecommerce">
            <div className="form-container">
                <h1>LOGIN PAGE</h1>
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Email Address'
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => { navigate('/forgot-password') }}>Forgot Password</button>
                    </div>

                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Agree to Continue</label>
                    </div> */}

                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login