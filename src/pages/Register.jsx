import React from "react";
import Logo from "../assets/img/header/logoJ.png";
import "../style/form.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "../service/Service";
import { useNavigate } from "react-router-dom";
const Register = () => {
const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();

    // Get the form data
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Create the data object
    const data = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      // Call the register method from the service
      const response = await Service.register(data);
      alert(response.data)
      navigate("/login")
      // Handle the response here (e.g., show success message, redirect user, etc.)
    } catch (error) {
      // Handle errors here (e.g., show error message)
      console.error(error);
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {/* FORM START */}
              <form className="sign-in-form" onSubmit={handleRegister}>
                <div className="logo">
                  <img src={Logo} />
                </div>
                <div className="heading">
                  <h2>Get Join</h2>
                  <h6>Already have account?</h6>
                  <a href="/login" className="toggle">
                    Login
                  </a>
                </div>
                <div className="actual-form">
                  {/* USERNAME */}
                  <div className="input-wrap">
                    <label className="label">First name</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="firstname"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="input-wrap">
                    <label className="label">Last name</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="lastname"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="input-wrap">
                    <label className="label">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="input-wrap">
                    <label className="label">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      minLength={4}
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                  </div>

                  {/* REGISTER */}
                  <button type="submit" className="register">
                    Register
                  </button>
                  <p className="text">
                    Forgotten your password or you login datails?
                    <a href="/term">Get help</a> signing in
                  </p>
                </div>
              </form>
            </div>
            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000"
                  className="image img-1 show"
                  alt=""
                />
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
      <Footer />
    </>
  );
};

export default Register;
