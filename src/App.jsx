import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import './Sass/main.scss';
// components
import NavbarR from './components/NavbarR.jsx';
import Footer from './components/Footer.jsx';
// pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Courses from './Pages/Courses';
import Competetion from './Pages/Competetion';
import Blogs from './Pages/Blogs';

import FreeTrial from './Pages/FreeTrial';
import UserProfile from './Pages/UserProfile';
import FreeClasses from './Pages/FreeClasses';
import SingleCourse from './components/SingleCourse';
import CompetetionInfo from './Pages/CompetetionInfo';
// Context
import UserContext from './components/UserContext';

const App = () => {
    
    const [accessToken,setAccessToken] = useState(null);
    return(
        // All components here
        // Client side routing
        <>
        <UserContext.Provider value={{accessToken,setAccessToken} }>
            <NavbarR/>
            <Switch>
            {/* Home Page */}
                <Route exact path='/' component={Home}/>
            {/* Courses Page */}
                <Route exact path='/get-courses' component={Courses}/>
            {/* Competetion Page */}
                <Route exact path='/competetion' component={Competetion}/>
            {/* Blogs Page */}
                <Route exact path='/blogs' component={Blogs}/>
            {/* Join As A Teacher */}
                {/* <Route exact path='/join-as-a-teacher' component={JoinTeacher}/> */}
            {/* Free Trial Page */}
                <Route exact path='/free-trial' component={FreeTrial}/>
            {/* Login Page */}
                <Route exact path='/login' component={Login}/>
            {/* Signup Page */}
                <Route exact path='/signup' component={Signup} />
            {/*  User Proflie */}
                <Route exact path='/user-profile' component={UserProfile} />
            {/*  Free Classes */}
                <Route exact path='/free-classes' component={FreeClasses} />
            {/* SingleCourse */}
                <Route path="/batch-details/:id" component={SingleCourse}/>
            {/* Competetion Details Info */}
                <Route path="/get-competitions-details/:category_fk" component={CompetetionInfo}/>
            </Switch>

            {/* footer */}
            <Footer/>
        
        </UserContext.Provider>
            
        </>
    );
}

export default App;