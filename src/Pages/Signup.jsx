import React, { useState, useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import { Link, useHistory } from "react-router-dom";
import { signUpData } from "../apiData/api"; //api
import UserContext from "../components/UserContext";
import google from '../images/assets/google.svg';
import ReactGA from 'react-ga';
// Adding Google Analytics
// Adding Page View Property
ReactGA.initialize("UA-201766739-1");
ReactGA.pageview("/signup");

// SignUp Page
const Signup = () => {
    const history = useHistory();
    //   State Variables for gettting the input field datas
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        alert("register success");
    };

    const { accessToken, setAccessToken } = useContext(UserContext);
    // function to save the user data from the REGISTER FORM
    const saveUser = async () => {
        let userSignUpData = {
            firstname,
            lastname,
            email,
            password,
            confirm_password,
        };
        console.log(JSON.stringify(userSignUpData));
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userSignUpData),
        };

        try {
            // waiting for the data
            const fetchResponse = await fetch(signUpData, options);
            const response = await fetchResponse.json();
            console.log(response.status);
            const token = response.accesstoken;
            sessionStorage.setItem("token", response.accesstoken);

            if (response.status === 1) {
                console.log("Account Created!!");
                setAccessToken(response.accesstoken);
                // console.log("Status 1 Login Successful!");
                history.push("/login");
            } else if (response.status === 0) {
                console.log("Please enter valid data!!");
            }
        } catch (error) {
            console.log(`YOU HAVE THIS ERROR: ${error}`);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-8">
                            <div className="card-img-left d-none d-md-flex">
                                {/* <!-- Background image for card set in CSS! --> */}
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                {/* Register */}
                                <h4 className="card-title text-center">
                                    Create Account
                                </h4>
                                <div className="container inheritBgColor">
                                    <div className="row text-center inheritBgColor">
                                        <div className="col-12 inheritBgColor">
                                            <p className="inheritBgColor ">
                                            {/* <img src={facebook} className="inheritBgColor px-3 social-sign"/> */}
                                            <img src={google} class="inheritBgColor px-3 social-sign"/> </p>
                                                       
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="container text-center  white mb-4">
                                    <span className="white">or use your email for registration</span>
                                </div>

                                <form
                                    className="form-signin"
                                    onSubmit={onSubmits}
                                >
                                    {/* First Name */}
                                    <div className="form-label-group">
                                        <input
                                            value={firstname}
                                            onChange={(e) => {
                                                setFirstname(e.target.value);
                                            }}
                                            type="text"
                                            id="inputFirstName"
                                            className="form-control"
                                            placeholder="First Name"
                                            required
                                            autoFocus
                                        />
                                        <label
                                            className="label"
                                            htmlFor="inputFirstName"
                                        >
                                            First Name
                                        </label>
                                    </div>

                                    {/* Last Name */}
                                    <div className="form-label-group">
                                        <input
                                            value={lastname}
                                            onChange={(e) => {
                                                setLastname(e.target.value);
                                            }}
                                            type="text"
                                            id="inputLastName"
                                            className="form-control"
                                            placeholder="Last Name"
                                            required
                                            autoFocus
                                        />
                                        <label
                                            className="label"
                                            htmlFor="inputLastName"
                                        >
                                            Last Name
                                        </label>
                                    </div>

                                    {/* Email Address */}
                                    <div className="form-label-group">
                                        <input
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            type="email"
                                            id="inputEmail"
                                            className="form-control"
                                            placeholder="Email address"
                                            required
                                        />
                                        <label
                                            className="label"
                                            htmlFor="inputEmail"
                                        >
                                            Email address
                                        </label>
                                    </div>

                                    {/* Password */}
                                    <div className="form-label-group">
                                        <input
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            type="password"
                                            id="inputPassword"
                                            className="form-control"
                                            placeholder="Password"
                                            required
                                        />
                                        <label
                                            className="label"
                                            htmlFor="inputPassword"
                                        >
                                            Password
                                        </label>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className="form-label-group">
                                        <input
                                            value={confirm_password}
                                            onChange={(e) => {
                                                setConfirm_password(
                                                    e.target.value
                                                );
                                            }}
                                            type="password"
                                            id="inputConfirmPassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            required
                                        />
                                        <label
                                            className="label"
                                            htmlFor="inputConfirmPassword"
                                        >
                                            Confirm Password
                                        </label>
                                    </div>

                                    {/* Register */}
                                    <div className="container-fluid w-100 px-0 pb-4 white">
                                        
                                        <div className="row">
                                            <div className="col-6"><button
                                            className="button-register btn btn-lg btn-block text-uppercase"
                                            onClick={saveUser}
                                            type="submit"
                                        >
                                            Sign Up
                                        </button></div>
                                            <div className="col-6">
                                            <Link className="text-decoration-none"to="/login">
                                            <button
                                            className=" button-login-a btn btn-lg btn-block text-uppercase"
                                            onClick={saveUser}
                                            type="submit"
                                        >   
                                            Sign In
                                        </button>
                                        </Link></div>

                                        </div>
                                    </div>

                                    {/* <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign up with Facebook</button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
