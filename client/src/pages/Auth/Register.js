import React from 'react'
import Layout from '../../components/Layout/Layout'

const Register = () => {
    return (
        <Layout title="Register Ecommerce">
            <div className="register">
                <h1>Register Page</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label">
                            Email Address
                        </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Phone
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">
                            Address
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" />
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