import React from 'react';
import Logo from '../assets/img/header/logoJ.png';
import product from '../assets/laptop.jpg';
import '../style/form.css';
import { FaCcPaypal } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';


const PaymentProduct = () => {
    return (
        <>
            <Header />
            <main>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">
                            <form className="sign-in-form">
                                <div className="logo">
                                    <img src={Logo} alt="jumpstart" />
                                </div>
                                <div className="heading">
                                    <h2>Product name</h2>
                                    <h6>Price : </h6>
                                    <p className="text-yellow-500 font-bold text-lg">$110</p>
                                </div>
                                <div className="actual-form">
                                    <div className="input-wrap">
                                        <label className="label">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="Username" minLength={2} className="input-field" autoComplete="off" required
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address" minLength={4} className="input-field" autoComplete="off" required
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <label className="label">Message</label>
                                        <input
                                            style={{ width: '100%' }}
                                            type="text"
                                            name="message"
                                            placeholder="Message" minLength={4}
                                            className="input-field-message" autoComplete="off" required
                                        />
                                    </div>
                                    <div className="input-wrap">
                                        <select style={{ marginTop: '50px' }} name="Select Retail Region" className="input-field" required>
                                            <option value="">Select Retail Region</option>
                                            <option value="region1">Region 1</option>
                                            <option value="region2">Region 2</option>
                                            <option value="region3">Region 3</option>
                                        </select>
                                    </div>

                                    <div className="input-wrap flex">
                                    </div>


                                    {/* BUTTON PAYPALL */}
                                    <div className="input-wrap relative">
                                        <input type="submit" value="PayPal" className="paypal pr-10" />
                                        <div className="absolute inset-y-5 right-0 flex items-center pr-3 pointer-events-none">
                                            <FaCcPaypal className="w-10 h-10 text-white" />
                                        </div>
                                    </div>


                                    {/* BUTTON BUY */}
                                    <input type="submit" value="Buy" className="sign-btn" />
                                </div>
                            </form>
                        </div>
                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src={product} className="image img-1 show" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    )
}

export default PaymentProduct