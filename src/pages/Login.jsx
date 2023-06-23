import React from 'react';
import Logo from '../assets/img/header/logoJ.png';
import '../style/form.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Header />
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
                                    <h6>Not yet have account?</h6>
                                    <a href="/register" className="toggle">Register</a>
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
                                    <Link to='/profile'>
                                        <input type="submit" value="Login" className="sign-btnlog" />
                                    </Link>
                                    <p className="text">
                                        Forgotten your password or you login datails?
                                        <a href="/term">Get help</a> Term
                                    </p>
                                </div>
                            </form>
                        </div>
                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" className="imagelog img-1 show" alt="" />
                            </div>

                            <div className="text-wrap">
                                <div className="text-group">
                                    <h3>Welcome to jumpstart</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login