import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import { ToastContainer, } from 'material-react-toastify';
// import 'material-react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />-
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <main style={{ minHeight: '80vh' }}>
                <ToastContainer />
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Ecommerce app",
    description: "Mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Bidyut"
}

export default Layout