import React from 'react';
import ReactGA from 'react-ga';
import amuse from '../images/amuse.svg';
import summer from '../images/assets/ColorfulSummer.png'
import genie from '../images/assets/basic.png'
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
            <div className="row content-head custom-container">
                <div className="col-lg-4 d-flex align-self-center custom-flex">
                    {/* <img className="img-amuse img-responsive" src={amuse} alt="skill hut"/> */}
                    <div className="right-heading left-heading">
                        <h1 className="heading-1">
                            Discover Your Creative Side
                        </h1>
                        <a href="" className="heading-button"> <button className="btn carousel-button" > Book Free Trail</button></a>
                    </div>
                </div>
                <div className="right-heading col-lg-8 d-flex justify-content-end">
                    <img src={genie} alt="" className="genie-carousel " width="100%" height="600"/>
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
        <div className="explore">
            <h1>
                Explore your Creative Side with Talent Genie
            </h1>            
        </div>
        
                
    </>);
}

export default Home;