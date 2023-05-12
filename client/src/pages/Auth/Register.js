import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Layout title="Register Ecommerce App">
            <section className="login-and-signup">
                <div className="login-form">
                    <input type="radio" name="tab" className="tab" id="sign-up-tab" defaultChecked />
                    <label htmlFor="sign-up-tab" className="tab-header">SIGN UP</label>
                    <input type="radio" name="tab" className="tab" id="sign-in-tab" defaultChecked />
                    <label htmlFor="sign-in-tab" className="tab-header">SIGN IN</label>
                    <form id="form2">
                        <div className="form-input">
                            <label htmlFor="email">Username or email address *</label>
                            <input type="text" className="input" id="username" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Password *</label>
                            <input type="password" className="input" id="password" required />
                        </div>
                        <input type="checkbox" id="check" /><span style={{ color: '#7c7c7c', paddingLeft: 6 }}>Remember me</span>
                        <Link to="/forget" id='forget'>Forgot Your Password</Link>
                        {/* <Link href="/" id="forget">Forgot your password?</Link> */}
                        <div className="submit-btn-signup">
                            <input type="submit" id="sign-in" className="submit-button" defaultValue="SIGN IN" />
                        </div>
                        <p style={{ textAlign: 'center', color: '#858585', fontSize: 15 }}>Sign in with social account</p>
                        <div className="signin-socail-links">
                            <Link href="#"><img className='bb' src="images/facebook.png" alt width="30px" /></Link>
                            <Link href="#"><img src="images/footer3.png" alt width="30px" /></Link>
                            <Link href="#"><img src="images/footer4.png" alt width="30px" /></Link>
                        </div>
                    </form>
                    <form id="form1">
                        <div className="form-input">
                            <label htmlFor="email">Your Email address *</label>
                            <input type="email" className="input" id="email" required />
                            {/* <i class="icon fas fa-cloud"></i> */}
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Phone *</label>
                            <input type="tel" className="input" id="new-password" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{1}" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Password *</label>
                            <input type="password" className="input" id="new-password" required />
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Confirm Password *</label>
                            <input type="password" className="input" id="new-password" required />
                        </div>
                        <div className="app">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our<span> <a href>privacy policy.</a></span> </div>
                        <input type="checkbox" id="check" required /><span id="agree">I agree to the <a href>privacy policy.</a></span><br />
                        <div className="submit-btn-signup">
                            <input type="submit" id="sign-up" className="submit-button" defaultValue="SIGN UP" />
                        </div>
                        <p style={{ textAlign: 'center', color: '#858585', fontSize: 15 }}>Sign in with social account</p>
                        <div className="signin-socail-links">
                            <a href="#"><img src="images/facebook.png" alt width="30px" /></a>
                            <a href="#"><img src="images/footer3.png" alt width="30px" /></a>
                            <a href="#"><img src="images/footer4.png" alt width="30px" /></a>
                        </div>
                    </form>
                </div>
            </section>

        </Layout>
    )
}

export default Register