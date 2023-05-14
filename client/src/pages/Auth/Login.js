import React from 'react'
import Layout from '../../components/Layout/Layout'

const Login = () => {
    return (
        <Layout title="Login Ecommerce">
            <div className='Login'>
                <h1>Login</h1>
                <br />
                <form>
                    <div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Email ' />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder='Password' />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default Login