import React, { useState } from 'react';
import Logo from '../assets/img/header/logoJ.png';
import '../style/form.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Service from '../service/Service';
import { useNavigate } from 'react-router-dom';
import { GiConsoleController } from "react-icons/gi";

const Login = () => {
    const navigate = useNavigate();
    const [credentialsInvalid, setCredentialsInvalid] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const data = {
            email,
            password,
        };
        Service.login(data)
            .then(response => {
                setCredentialsInvalid(false);
                sessionStorage.setItem('token', response.token);
                navigate("/products");
            }).catch(error => {
                setCredentialsInvalid(true);
            });
    };
    return (
        <>
            <Header />
            <main>
                <div className="boxlogin">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            {/* FORM */}
                            <form className="sign-in-form" onSubmit={handleLogin}>

                                <div className="logo">
                                    <img src={Logo} alt="Marry meals" />
                                </div>
                                <div className="heading">
                                    <h2>Welcome Back</h2>
                                    <h6>Not yet have account? <a href="/register" className="toggle">Register</a></h6>
                                </div>
                                <div className="actual-form">
                                    {
                                        credentialsInvalid &&
                                        <h1 className="text-sm bg-red-100 text-red-600 border-2 border-red-600 text-center p-2 rounded-lg">Email or Password incorrect</h1>
                                    }
                                    {/* USERNAME */}
                                    <div className="input-wrap">
                                        <label className="label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="input-field" autoComplete="off" required />
                                    </div>

                                    {/* PASSWORD */}
                                    <div className="input-wrap">
                                        <label className="label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password" className="input-field" autoComplete="off" required />
                                    </div>

                                    {/* SUBMIT */}
                                    <button type="submit" className="sign-btnlog">Login</button>

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
    );
};

export default Login;