import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")


    return (
        <Layout title="Register Ecommerce">
            <div className="register">
                <h1>Register Page</h1>
                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Name'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Email Address'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="num"
                            value={phone}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Phone'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Password'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Address'
                        />
                    </div>
                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Agree to Continue</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register
