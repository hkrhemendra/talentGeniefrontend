import React,{useState,useContext} from "react";
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";

import UserContext from './UserContext';

const NavbarR = () => {

    const {accessToken,setAccessToken} = useContext(UserContext);
    const history = useHistory();
    const logout = () => {
        setAccessToken(null);
        sessionStorage.clear();
        history.push('/login');
    };

    // hamburger menu state change
    const [showMediaIcon, setShowMediaIcon] = useState(false);
    return (
        <div className="container-fluid p-0">
            <nav className="navbar flex-wrap navbar-expand-lg d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand">Kids <span className="navbar-brand-sub">Passion</span></Link>

            <div className="hamburger-menu" onClick={() => {setShowMediaIcon(!showMediaIcon)}}><i class="fas fa-bars"></i></div>
            
            <div className="collapse navbar-collapse nav-item-container d-flex justify-content-center">
                {/* Link to homepage */}
                        <ul className={showMediaIcon ? ("mobile-menu") : ("navbar-nav") }>
                            <li  className="nav-item">
                                <Link to="/" className="links">Home</Link>
                            </li>                       
                            {/* Link to Courses page */}
                            <li  className="nav-item">
                                <Link to="/get-courses" className="links">Courses</Link>
                            </li>
                            {/* Link to Competetion Page */}
                            <li className="nav-item">
                                <Link to="/competetion" className="links">Competetion</Link>
                            </li>
                            {/* Link to Blogs Page */}
                            <li className="nav-item">
                                <Link to="/blogs" className="links">Blogs</Link>
                            </li>
                            {/* Link to Join As A Teacher */}
                            <li className="nav-item">
                                <Link to={{pathname: "https://docs.google.com/forms/d/e/1FAIpQLSdOVjuOQSUM0SJzt3l9OC_xIcKYm1vOe3gmcfOPOtNvG9L6yQ/viewform?usp=sf_link"}} target="_blank" rel="noopener noreferrer" className="links">JoinUs as Teacher</Link>
                            </li>
                            {/*Link to Free Trial*/}
                            <li className="nav-item">
                                <Link to="/free-classes" className="links">Book Free Trial</Link>
                            </li>
                        </ul>
            </div>
            
                    <div className="inheritBgColor acc-btn-container ">
                        {
                            accessToken ? 
                            (
                                
                        <div className={showMediaIcon ? ("mobile-menu") : ("nav-right") } id="logged-in">
                            {/* link to signup page */}
                            <Link to="/user-profile" className="nav-buttons">
                                <button className="btn btn-sign-up nounderline mb-2" >Welcome! User</button>
                            </Link>
                            
                            {/*link to login page */}
                            <Link to="/" className="nav-buttons">
                                <button onClick={logout} className="btn btn-login nounderline" >Logout</button>
                            </Link>
                        </div>
                            ) 
                            : 
                            (
                                
                        <div className={showMediaIcon ? ("mobile-menu") : ("nav-right") } id="logged-out">
                            {/* link to signup page */}
                            <Link to="/signup" className="nav-buttons">
                                <button className="btn btn-sign-up nounderline" >Sign Up</button>
                            </Link>
                            
                            {/*link to login page */}
                            <Link to="/login" className="nav-buttons">
                                <button className="btn btn-login nounderline" >Login</button>
                            </Link>
                        </div>
                        )
                        }
                        </div>
                        

            </nav>
        </div>
    )
}

export default NavbarR;
