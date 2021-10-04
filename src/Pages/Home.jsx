import React from 'react';
import ReactGA from 'react-ga';
import amuse from '../images/amuse.svg';
import TopCategories from '../components/homepage_sections/TopCategories';
import TopCourses from '../components/homepage_sections/TopCourses';
import FreeClasses from '../components/homepage_sections/FreeClasses';
import Teachers from '../components/homepage_sections/Teachers';
import Testimonial from  '../components/homepage_sections/Testimonial';
// Adding Google Analytics
ReactGA.initialize('UA-201766739-1');
// Adding Page View Property
ReactGA.pageview('/');

const Home = () => {
    return(<>
        <div className="container no-gutters">
            <div className="row content-head align-items-center justify-content-center">
                <div className="col-lg-6 d-flex  justify-content-start align-items-center flex-column">
                    <img className="img-amuse img-responsive" src={amuse} alt="skill hut"/>
                </div>
                <div className="right-heading col-lg-6 d-flex  justify-content-start align-items-center flex-column">
                    <div><h2 className="heading-1">Make Time For<br/></h2>
                    <h2 className="heading-2">Creativity<br/></h2>
                    <h2 className="heading-3">To Kid's Passion<br/></h2>
                    <p className="mx-5" >lorem ipsum dolor sit lorem, consectetur adip</p></div>
                </div>
            </div>
        </div>
        <hr/>
        <TopCategories/>
        <TopCourses/>
        <FreeClasses/>
        <Testimonial/> 
        {/* videos section not yet done by backend */}
        <Teachers/>
    </>);
}

export default Home;