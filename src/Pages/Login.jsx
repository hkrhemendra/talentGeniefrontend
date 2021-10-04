import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import ReactGA from 'react-ga';
import {loginData} from '../apiData/api';
import google from '../images/assets/google.svg';
import UserContext from '../components/UserContext';
// Adding Google Analytics
ReactGA.initialize('UA-201766739-1');
// Adding Page View Property
ReactGA.pageview('/login');
// Login Page
// Stylesheet for this page is in signup.scss
const Login = () => {
    const history = useHistory();
    // email and password as state variables
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    // On Login BUTTON press we are 
    const onSubmits = (event) => {
        event.preventDefault();
    };
    const {accessToken,setAccessToken} = useContext(UserContext);
    // Sending Async/Await Request to the server for fetching user has login account or not if Has Then server responds with the token which we then store in the local storage.
    const loginUser = async () => {
        // data to be send to server
        const loggedInData = {email,password};
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify(loggedInData)
        };

        try {
            const fetchResponse = await fetch(loginData,options);
            const response = await fetchResponse.json();
            
            const token = response.accesstoken;
            sessionStorage.setItem("token", response.accesstoken);
            // Storing the accesstoken in the local storage
            if(response.status === 1) {
                // console.log(token);
                setAccessToken(response.accesstoken);
                
                history.push('/user-profile'); 
            }
            else if(response.status === 0) {
                alert("Login UnSuccessful!");
                setAccessToken(null);
            }
        }
        catch(error) {
            console.log(`You have got the following error: ${error}`);
            
        }
    };
    
    

    // console.log('access token using context');
    // console.log(accessToken);
    return(<>
        <div className="container">
            <div className="row">
            <div className="col-lg-10 col-xl-9 mx-auto">
                <div className="card card-signin flex-row mt-9 mb-4">
                <div className="card-img-left d-none d-md-flex">
                    {/* <!-- Background image for card set in CSS! --> */}
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <div className="container inheritBgColor">
                                    <div className="row text-center inheritBgColor">
                                        <div className="col-12 inheritBgColor">
                                            <p className="inheritBgColor ">
                                            {/* <img src={facebook} className="inheritBgColor px-3 social-sign"/> */}
                                            <img src={google} class="inheritBgColor px-3 social-sign" alt="google-sign"/> </p>
                                                       
                                        </div>
                                    </div> 
                                </div>
                    <div className="container text-center white mb-4"><span className="white">or use your email</span></div>


                    <form className="form-signin " onSubmit={onSubmits}>

                    <div className="form-label-group">
                        <input onChange={(inputEvent) => {setEmail(inputEvent.target.value)}} value={email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
                        <label className="label" htmlFor="inputEmail">Email address</label>
                    </div>                       

                    <div className="form-label-group">
                        <input onChange={(inputEvent) =>{setPassword(inputEvent.target.value)}} value={password} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <label className="label" htmlFor="inputPassword">Password</label>
                    </div>
                    
                    <button onClick={loginUser}  className="button-register btn btn-lg btn-block text-uppercase" type="submit">login</button>
                    
                    
                    
                    
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>    

          
    </>);
}

export default Login;
