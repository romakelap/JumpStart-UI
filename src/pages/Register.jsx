import React from 'react';
import Logo from '../assets/img/header/logoJ.png';
import '../style/form.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Register = () => {
    return (
        <>
        <Header/>
        <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">

                            {/* FORM START */}
                            <form className="sign-in-form">
                                <div className="logo">
                                    <img src={Logo} />
                                </div>
                                <div className="heading">
                                    <h2>Get Join</h2>
                                    <h6>Already have account?</h6>
                                    <a href="/login" className="toggle">Login</a>
                                </div>
                                <div className="actual-form">

                                    {/* USERNAME */}
                                    <div className="input-wrap">
                                        <label className="label">Name</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username" minLength={4} 
                                            className="input-field" autoComplete="off" required 
                                        />
                                    </div>

                                    {/* EMAIL */}
                                    <div className="input-wrap">
                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email" minLength={4} className="input-field" autoComplete="off" required 
                                        />
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="input-wrap">
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password" minLength={4} className="input-field" autoComplete="off" required 
                                        />
                                    </div>

                                    {/* REGISTER */}
                                    <input type="submit" value="Register" className="register" />
                                    <p className="text">
                                        Forgotten your password or you login datails?
                                        <a href="/term">Get help</a> signing in
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000" className="image img-1 show" alt="" />
                            </div>

                            <div className="text-wrap">
                                <div className="text-group">
                                    <h3>Create your Account</h3>
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

export default Register