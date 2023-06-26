import React from 'react'
import HeaderAdmin from '../components/TableAdmin/HeaderAdmin'
import Logo from '../assets/img/header/logoJ.png'
import '../style/form.css'
import { Link } from 'react-router-dom'

const AdminManageRetail = () => {
    return (
        <>
            <HeaderAdmin />
            <main style={{ marginTop: '-190px' }}>
                <div className="box">
                    <div className="inner-box">
                        <div className="forms-wrap">

                            {/* FORM START */}
                            <form className="sign-in-form">
                                <div className="logo">
                                    <img src={Logo} />
                                </div>
                                <div className="heading">
                                    <h2>Manage Retail</h2>
                                    <h6>*make sure add the correct information</h6>
                                </div>
                                <div className="actual-form">

                                    {/* Retail name */}
                                    <div className="input-wrap">
                                        <label className="label">Retail Name</label>
                                        <input
                                            type="text"
                                            name="Retail Name"
                                            placeholder="Retail Name" minLength={4}
                                            className="input-field" autoComplete="off" required
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="input-wrap">
                                        <label className="label">Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            placeholder="Description" minLength={4} className="input-field" autoComplete="off" required
                                        />
                                    </div>

                                    {/* Location */}
                                    <div className="input-wrap">
                                        <label className="label">Location</label>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Location" minLength={4} className="input-field" autoComplete="off" required
                                        />
                                    </div>

                                    {/* Submit */}
                                    <input type="submit" value="Submit" className="register" />
                                    <Link to={"/admin"}>
                                        <input type="submit" value="Cancel" className="cancel" />
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="carousel">
                            <div className="images-wrapper">
                                <img src="https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8416.jpg" className="image img-1 show" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default AdminManageRetail