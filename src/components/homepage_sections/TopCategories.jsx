import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { topCategoriesUrl} from "../../apiData/api";
import Slider from "react-slick";
import LeftArrow from '../../images/assets/left-arrow.svg';
import RightArrow from '../../images/assets/right-arrow.svg';


const TopCategories = () => {
    
    // Storing response in the state variables for
    const [topCategoriesData,setTopCategoriesData] = useState([]);
    // fetching Top Categories
    const topCategories = async () => {
        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        try {
            const fetchResponse = await fetch(topCategoriesUrl, options);
            const response = await fetchResponse.json();
            // console.log(response);
            setTopCategoriesData(response);
            
        } catch (error) {
            console.log("Error while fetching top Categories.");
        }
    };

    

    useEffect(() => {
        topCategories();
    },[]);
    // console.log("this is data");
    // console.log(topCategoriesData.categories[0].name);
    // responsive slider
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img className="arrow" src={LeftArrow} alt="prevArrow" {...props} />
      );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img className="arrow" src={RightArrow} alt="nextArrow" {...props} />
      );
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll:3,
        initialSlide: 0,
        nextArrow: <SlickArrowRight />,
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
    const image1 = "http://3.7.254.1/static/assets/categories/";
    // styles are added in misc.scss
    return (
        <>
        <div className="top-categories-background">
            <div className="top-categories">
                <h2 className="section-heading">Top Categories</h2>

                <Slider {...settings}>
                
                {
                    topCategoriesData && topCategoriesData.categories && topCategoriesData.categories.map((element) =>{
                        return(
                            <Link to={"get-courses/?category=" + element.id}>
                            <div className=" tile-container px-3">
                                <div className="d-flex justify-content-center">
                                    <div className="tile" key={element.id}>
                                        <img src={image1+element.name+'/'+element.image} className="slider-image" alt="alternate"/>
                                        <h4 className="slider-title my-2">{element.name}</h4>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
                </Slider>
            </div>
            </div>
            <hr/>
        </>
    );
};

export default TopCategories;
