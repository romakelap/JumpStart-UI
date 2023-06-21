import React from 'react'
import Logo from '../assets/img/header/logoJ.png'
import '../style/form.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
const AdminLogin = () => {
    return (
        <>
        <Header/>
        <main>
            <div className="boxlogin">
                <div className="inner-box">
                    <div className="forms-wrap">


                        {/* FORM */}
                        <form className="sign-in-form">
                            <div className="logo">
                                <img src={Logo} alt="Marry meals" />
                            </div>
                            <div className="heading">
                                <h2>Welcome Back</h2>
                                <h6>Admin Jumpstart</h6>
                            </div>
                            <div className="actual-form">

                                {/* USERNAME */}
                                <div className="input-wrap">
                                    <label className="label">Username</label>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email" minLength={4} 
                                        className="input-field" autoComplete="off" required />
                                </div>

                                {/* PASSWORD */}
                                <div className="input-wrap">
                                    <label className="label">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password" minLength={4} className="input-field" autoComplete="off" required />
                                </div>

                                {/* SUBMIT */}
                                <input type="submit" value="Login" className="sign-btnlog" />

                                <p className="text">
                                    Forgotten your password or you login datails?
                                    <a href="/term">Get help</a> Term
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="carousel">
                        <div className="images-wrapper">
                            <img src="https://i.ibb.co/QXnW738/admin.png" className="imagelog img-1 show" alt="" />
                        </div>

                        <div className="text-wrap">
                            <div className="text-group">
                                <h3>Manage your Product</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
       
    )
}

export default AdminLogin