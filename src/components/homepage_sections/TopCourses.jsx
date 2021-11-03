import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { topCoursesUrl } from "../../apiData/api";
import Slider from "react-slick";
import LeftArrow from '../../images/assets/left-arrow.svg';
import RightArrow from '../../images/assets/right-arrow.svg';
const TopCourses = () => {

    const [topCoursesData,setTopCoursesData] = useState([]);
    // fetching Top Courses
    const topCourses = async () => {
        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        try {
            const fetchResponse = await fetch(topCoursesUrl, options);
            const response = await fetchResponse.json();
            // console.log("HERE");
            // console.log(response.top_courses.map((element) => {console.log(element.courses[0].id)}));
            setTopCoursesData(response);
            // console.log("inside");
            // console.log(response);
            
        } catch (error) {
            console.log("Error while fetching top Courses.");
            
        }
    };

    useEffect(() => {
        topCourses();
    },[]);
    

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SlickArrowRight  />,
        prevArrow: <SlickArrowLeft />,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const image1 = "https://images.unsplash.com/photo-1545293527-e26058c5b48b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80";
    

   

    return (
        <>
        <div className="top-courses-background">
            <div className="section">
            
                <h2 className="section-heading">Top Courses</h2>

                <Slider {...settings}>
                
                {
                    
                    topCoursesData && topCoursesData.top_courses && topCoursesData.top_courses.slice(0,9).map((element) => {
                        return(
                            <Link to={"batch-details/"+ element.id}>
                            
                            <div className="tile-container">
                                <div className="d-flex justify-content-center px-3">
                                    <div className="tile" key={element.id}>
                                        <img src={image1} className="slider-image" alt="alternate"/>
                                        <h4 className="slider-title">{element.courses[0].course_name}</h4>
                                    </div>
                                </div>
                            </div>
                       
                            </Link>
                        )
                    })
                }
                </Slider>
                     </div>
            
            <hr/>
            </div>
        </>
    )
}


export default TopCourses;
