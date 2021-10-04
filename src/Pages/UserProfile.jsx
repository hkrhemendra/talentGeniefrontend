import React, { useEffect, useContext } from "react";
import isLoggedIn from "../components/isLoggedIn";
import { useHistory } from "react-router-dom";
import UserContext from "../components/UserContext";
import ractangle from "../images/assets/ractangle.svg";


const UserProfile = () => {
  const checkLog = isLoggedIn();
  const history = useHistory();

  const logger = useContext(UserContext);

  console.log(checkLog);
  useEffect(() => {
    if (logger == null) {
      history.push("/login");
    }
  }, []);

  console.log(logger.accesstoken);
  return ( <>
      <div>
        <div className="welcome">
          <h1>Welcome User!</h1>
        </div>
        {/* {checkLog ? 
            ( */}
        {/* ) : (<h3>Please log in</h3>)} */}
        <img
          src={ractangle}
          className="img-ractangle img-responsive img-fluid"
          alt=""></img>

         <div className="mainbar navbar-expand-md bg-light" id="main-bar">
            <ul className=" navbar-nav">
              <li className="nav-item">
              <a href="#" className="nav-link">Courses</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Competitions</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Performance</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Settings</a>
              </li>
            </ul>
          </div>
      <div className="container-fluid" id="new"></div>
      



         </div>
         
          
    
</>
  );
};

export default UserProfile;
