import React from 'react'
import Layout from '../../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const forget = () => {
    return (
        <Layout title={'Contact Ecommerce'} >
            <section className="login-and-signup">
                <div className="login-form">
                    <input type="radio" name="tab" className="tab" id="sign-in-tab" defaultChecked />
                    <label htmlFor="sign-in-tab" className="tab-header">Forgot Password</label>
                    <form id="form2">
                        <div className="form-input">
                            <label htmlFor="email">Username or email address *</label>
                            <input type="text" className="input" id="username" required />
                        </div>
                        <input type="checkbox" id="check" /><span style={{ color: '#7c7c7c', paddingLeft: 6 }}>Agree to reset your password</span> <a href="index.html" id="forget">Home</a>
                        <div className="submit-btn-signup">
                            <input type="submit" id="sign-in" className="submit-button" defaultValue="Forgot Password" />
                        </div>
                        <p style={{ textAlign: 'center', color: '#858585', fontSize: 15 }}>Sign in with social account</p>
                        <div className="signin-socail-links">
                            <img src="images/facebook.png" alt width="30px" />
                            <img src="images/footer3.png" alt width="30px" />
                            <img src="images/footer4.png" alt width="30px" />
                        </div>
                    </form>
                </div>
            </section>

        </Layout >
    )
}

export default forget