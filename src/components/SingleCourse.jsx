import React, { useState, useEffect } from "react";

import { batchUrl, coursesUrl} from "../apiData/api";
import ReactGA from "react-ga";
import ratingStar from "../images/assets/rating-star.svg";
import certificates from "../images/assets/c-certificate.svg";
import "react-accessible-accordion/dist/fancy-example.css";

import Slider from "react-slick";
import LeftArrow from "../images/assets/left-arrow.svg";
import RightArrow from "../images/assets/right-arrow.svg";
import cartoonDesign from "../images/assets/design-cartoon.svg";
// accordion
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";

// images
import cSteps from "../images/assets/c-steps.svg";
import cAge from "../images/assets/c-age-group.svg";
import cAlarm from "../images/assets/c-alarm.svg";
import cHourglass from "../images/assets/c-hourglass.svg";
// Adding Google Analytics
ReactGA.initialize("UA-201766739-1");
// Adding Page View Property

const SingleCourse = (props) => {
    const [singleCourseData, setSingleCourseData] = useState([]);
    const [batchApi,setBatchApi] = useState("");
    
    function intoArray(str) {
        return str.split(" ");
    }
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    const getCourse = async () => {
        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        };

        try {
            const fetchResponse = await fetch(
                batchUrl + props.match.params.id,
                options
            );
            const response = await fetchResponse.json();
            console.log(response);
            // if(response.status)
            setSingleCourseData(response);
            
        } catch (error) {
            console.warn(
                "Following error arises while fetching course: " + error
            );
        }
    };

    const [courseByCategory,setCourseByCategory] = useState([]);
    // fething courses by Category
    const getCourseById = async () => {
        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            }
        };

        try{
            const fetchResponse = await fetch(coursesUrl,options);
            const response = await fetchResponse.json();
            setCourseByCategory(response);
        }
        catch(error) {
            console.log("error in fetching category by id " + error);
        }

    };
    
    useEffect(() => {
        getCourse();
        if(singleCourseData&& singleCourseData.detail && singleCourseData.detail.category_id) {
            setBatchApi(coursesUrl + "?category=" + singleCourseData.detail.category_id);
            getCourseById();
        }
    }, []);
    // console.log(singleCourseData && singleCourseData.detail);

    console.log("Courses" + courseByCategory);
    
    ReactGA.pageview(batchUrl + props.match.params.id);
    const image1 = "http://3.7.254.1/static/assets/courses/";

    const image2 =
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    
    // settings for slick slider

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
    };

    var settings2 = {
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
    return (
        <>
            {singleCourseData && singleCourseData.detail ? (
                <>
                <div className="single-course container">
                    <div className=" mb-2 single-course-row row">
                        <div className="col-12 mb-2">
                            <div className="rating-learners d-flex flex-row justify-content-around">
                                <p className="rating">
                                    {" "}
                                    {singleCourseData.detail.rating / 2}{" "}
                                </p>
                                <img
                                    className="rating-star-c"
                                    src={ratingStar}
                                    alt="rating-star"
                                />
                                <p className="users">
                                    {singleCourseData.detail.users_enrolled}{" "}
                                    Enrolled
                                </p>
                            </div>
                        </div>
                        {/* left image */}
                        <div className="single-course-img col-12 col-lg-8">
                            <img src={`${image1}${singleCourseData.detail.courses[0].course_code}/${singleCourseData.detail.courses[0].thumbnail_image}`} alt="course"/>
                        </div>

                        {/* right column */}
                        <div className="single-course-col col-12 col-lg-4 text-center">
                            <h2 className="single-course-title my-2">
                                {singleCourseData.detail.courses[0].course_name}
                            </h2>

                            <div className="row inheritBgColor mb-4">
                                <div className="inheritBgColor col-6">
                                    <img
                                        className="img-responsive icons-course"
                                        src={cSteps}
                                        alt="Steps"
                                    />
                                    <span className="icons-title">
                                        {
                                            singleCourseData.detail.courses[0]
                                                .level
                                        }
                                    </span>
                                </div>
                                <div className="inheritBgColor col-6">
                                    <img
                                        className="img-responsive icons-course p-0"
                                        src={cAge}
                                        alt="Steps"
                                    />
                                    <span className="icons-title">
                                        {
                                            singleCourseData.detail.courses[0]
                                                .minage
                                        }
                                        -
                                        {
                                            singleCourseData.detail.courses[0]
                                                .maxage
                                        }{" "}
                                        years
                                    </span>
                                </div>
                            </div>

                            <div className="py-2 schedule-tile row inheritBgColor d-flex flex-column justify-content-center align-content-center">
                                <p className="schedule-tile-items schedule-tile-text inheritBgColor">
                                    4 Weeks
                                </p>
                                <img
                                    className="inheritBgColor img-icons2 p-0"
                                    src={cAlarm}
                                    alt="Remaining"
                                />
                                <p className="schedule-tile-items schedule-tile-text inheritBgColor">
                                    On Every
                                </p>
                                <p className="schedule-tile-items schedule-tile-text inheritBgColor d-flex flex-row">
                                    {intoArray(singleCourseData.detail.weekDays)
                                        .slice(0, 6)
                                        .map((weekD) => {
                                            return (
                                                <p className="px-2 mb-0 inheritBgColor">
                                                    {weekD}
                                                </p>
                                            );
                                        })}
                                </p>
                                <p className="schedule-tile-items schedule-tile-text inheritBgColor">
                                    {singleCourseData.detail.time_from.substring(0,5) + '-' + singleCourseData.detail.time_to.substring(0,5)} {60 *
                                        (parseInt(
                                            singleCourseData.detail.time_to
                                        ) -
                                            parseInt(
                                                singleCourseData.detail
                                                    .time_from
                                            ))}{" "}
                                    minutes
                                </p>
                                <img
                                    className="inheritBgColor img-icons2 p-0"
                                    src={cHourglass}
                                    alt="Hourglass"
                                />
                                <div className="py-2 px-4 start-date">
                                    <span className="inheritBgColor start-date-text">
                                        Starting from{" "}
                                        {parseInt(
                                            singleCourseData.detail.batch_start.substring(
                                                8,
                                                10
                                            )
                                        )}{" "}
                                        {
                                            months[
                                                parseInt(
                                                    singleCourseData.detail.batch_start.substring(
                                                        5,
                                                        7
                                                    )
                                                )
                                            ]
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* row 2 */}

                    <div className="row">
                        {/* Accordian */}
                        <div className="col-12 col-lg-8">
                            <Accordion allowMultipleExpanded="true">
                                {/* course Details */}
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Course Details
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {
                                            singleCourseData.detail.courses[0]
                                                .discription
                                        }
                                    </AccordionItemPanel>
                                </AccordionItem>

                                {/* Prerequisites */}
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Prerequisites
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {
                                            singleCourseData.detail.courses[0]
                                                .prerequisites
                                        }
                                    </AccordionItemPanel>
                                </AccordionItem>

                                {/* Instructor */}
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Instructor
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {
                                            singleCourseData.detail.courses[0]
                                                .teacher
                                        }
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="inheritBgColor accordion-right col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                            <div className="inheritBgColor my-2 enroll-btns-container d-flex">
                                <button className="btn btn-secondary enroll-btns">
                                    Free Trial
                                </button>
                                <button className="btn btn-primary enroll-btns">
                                    Enroll Now
                                </button>
                            </div>
                            <div className=" mt-3 course-price-container">
                                <p className="course-price">
                                    <strong className="inheritBgColor">
                                        {singleCourseData.detail.price}/-
                                    </strong>{" "}
                                    INR Only
                                </p>
                            </div>
                            <img
                                className="my-4 certificate"
                                src={certificates}
                                alt="workshops_and_certificates"
                            />
                        </div>
                    </div>

                    {/* row 3 */}

                    <div className="row">
                        <div class="col-12 top mb-4">
                            <p class="cross-line">
                                <span>Our Learners</span>
                            </p>
                        </div>
                        <div className="col-12 h-100 mb-5">
                            <Slider {...settings}>
                                <div className="our-learners-section col-12">
                                    <div className="our-learners-section-tile inheritBgColor d-flex flex-md-row justify-content-start align-items-center">
                                        <img
                                            className="inheritBgColor learners-image"
                                            src={image2}
                                            alt="user"
                                        />
                                        <div className="inheritBgColor">
                                            <h4 className="learner-name inheritBgColor">
                                                Attharv
                                            </h4>
                                            <p className="learner-description inheritBgColor">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quis in a eu tellus iaculis
                                                metus quam. Egestas iaculis
                                                risus elementum blandit cras
                                                egestas enim aliquam sed. Rhoncu
                                                quis pulvinar nunc leo gravida
                                                congue vulputate imperdiet. Ante
                                                euismod diam non fa lisis orci
                                                massa tellus ac.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="our-learners-section col-12">
                                    <div className="our-learners-section-tile inheritBgColor d-flex flex-row justify-content-start align-items-center">
                                        <img
                                            className="inheritBgColor learners-image"
                                            src={image2}
                                            alt="user"
                                        />
                                        <div className="inheritBgColor">
                                            <h4 className="learner-name inheritBgColor">
                                                Attharv
                                            </h4>
                                            <p className="learner-description inheritBgColor">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quis in a eu tellus iaculis
                                                metus quam. Egestas iaculis
                                                risus elementum blandit cras
                                                egestas enim aliquam sed. Rhoncu
                                                quis pulvinar nunc leo gravida
                                                congue vulputate imperdiet. Ante
                                                euismod diam non fa lisis orci
                                                massa tellus ac.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>

                    {/* row 4 similar course using category id */}
                            
                {(courseByCategory.status && courseByCategory && courseByCategory.all_courses) ? (
                    <div className="row">
                            <div class="col-12 top mb-4">
                                <p class="cross-line">
                                    <span>Similar Courses</span>
                                </p>
                            </div>
                                
                        {/* Slider */}
                        <Slider {...settings2}>
                        
                        {
                            
                            courseByCategory && courseByCategory.all_courses && courseByCategory.all_courses.slice(0,9).map((element) => {
                                return(
                                    <div className="tile-container">
                                        <div className="d-flex justify-content-center">
                                            <div className="tile" key={element.id}>
                                                <img src={image1} className="slider-image-course" alt="alternate"/>
                                                <h4 className="slider-title">{element.courses[0].course_name}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </Slider>

                    </div>
                ) : ("") }        
                        

                    
                </div>
                <div className="row mb-5">
                        <div className="col-12 no-gutters">
                            <img className="cartoon-design" src={cartoonDesign} alt="Design_cartoon"/>
                            <p className="share-it text-center">Share the courses with your friends<br/> <span className="social-media-icons"><i class="fab fa-facebook"></i> <i class="fab fa-instagram"></i> <i class="fab fa-whatsapp"></i></span></p>
                        </div>
                </div>
                </>
            ) : (
                <div className="mt-5 pt-5 text-center">
                    <h2>Please Wait</h2>
                </div>
            )}
        </>
    );
};

export default SingleCourse;
