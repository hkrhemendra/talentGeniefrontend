import React, {useEffect, useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {compDetail} from "../apiData/api";
import ratingStar from "../images/assets/rating-star.svg";
import "react-accessible-accordion/dist/fancy-example.css";
import clock from "../images/assets/comp-clock.svg";

import UserContext from '../components/UserContext';
// accordion
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import cAge from "../images/assets/c-age-group.svg";
import campWinBro from "../images/assets/comp-win-bro.svg";

const CompetetionInfo = (props) => {

    // function intoArray(str) {
    //     return str.split(" ");
    // }
    const image1 = "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    const logger = useContext(UserContext);
    const history = useHistory();
    // Saving the comp detail in state variable
    const [competetionDetail,setCompetionDetail] = useState([]);
    const [enrollStatus,setEnrollStatus] = useState('');
    const getCompetetionInfo = async () => {

        const options = {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        try{
            const fetchResponse = await fetch((compDetail + props.match.params.category_fk),options);
            const response = await fetchResponse.json();
            // console.log(response.competition_details[0]);
            if(response.status === 1) {
                setCompetionDetail(response);
            }
            else{
                console.log("Error while setting competetionDetail State variable");
            }
        }
        catch(error) {
            console.log("Error while fetching competetion: " +error)
        }
    };
    const enrollApi = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization':`Bearer ${logger.accessToken}`,
            }
        };

        try {
            const fetchResponse = await fetch(compDetail + props.match.params.category_fk +"/enroll",options);
            const response = await fetchResponse.json();
            console.log(response);
            setEnrollStatus(response);
        }
        catch(error) {
            console.log("error while registering the user " + error);
        }
    };
    
    const enrollMe = () => {
        if(logger.accessToken === null) {
            alert("please Signup first");
            history.push("/signup");
        }
        else{
            // call enroll api
            enrollApi()
            alert('registerd user ' + (logger.accessToken));
            console.log(logger.accessToken);
        }
    };

    useEffect(() => {
        getCompetetionInfo();
    },[]);

    console.log(enrollStatus.message);
    const onEnrollClick =() => {
        if(enrollStatus.message === 0) {
            
        } 
    }
    return (
        <div className="container comp-info">
        
            {
                (competetionDetail.status && competetionDetail.competition_details[0]) ?
                    (
                        <>
                            <div className="container">
                            <div className=" mb-2 single-course-row row">
                        <div className="col-12 mb-2">
                            <div className="rating-learners-comp d-flex flex-row justify-content-around">
                                <p className="rating">
                                    {" "}
                                    {competetionDetail.competition_details[0].rating}{" "}
                                </p>
                                <img
                                    className="rating-star-c"
                                    src={ratingStar}
                                    alt="rating-star"
                                />
                                
                            </div>
                        </div>
                        {/* left image */}
                        <div className="single-course-img col-12 col-lg-8">
                            <img src={image1} alt="course" />
                        </div>

                        {/* right column */}
                        <div className="single-course-col col-12 col-lg-4 text-center">
                            <h2 className="single-course-title my-2">
                                {competetionDetail.competition_details[0].title}
                            </h2>

                            <div className="row inheritBgColor mb-4 d-flex justify-content-center">
                                
                                <div className="inheritBgColor col-6">
                                    <img
                                        className="img-responsive icons-course p-0"
                                        src={cAge}
                                        alt="Steps"
                                    />
                                    <span className="icons-title">
                                        {
                                            competetionDetail.competition_details[0]
                                                .minage
                                        }
                                        -
                                        {
                                            competetionDetail.competition_details[0]
                                                .maxage
                                        }{" "}
                                        years
                                    </span>
                                </div>
                            </div>

                            <div className="py-2 schedule-tile row inheritBgColor d-flex flex-column justify-content-center align-content-center">
                                
                                <div className="py-2 px-4 start-date">
                                    <span className="inheritBgColor start-date-text">
                                         Registration Starting from
                                    </span>
                                </div>
                                <p className="schedule-tile-items schedule-tile-text inheritBgColor">
                                    
                                    {
                                        competetionDetail.competition_details[0].registration_start.substring(0,10)
                                    }
                                    {" " +competetionDetail.competition_details[0].registration_start.substring(11,16)}
                                </p>
                                <img
                                    className="inheritBgColor comp-clock-alarm p-0"
                                    src={clock}
                                    alt="Remaining"
                                />
                                
                                
                                

                                <div className="py-2 px-4 start-date">
                                    <span className="inheritBgColor start-date-text">
                                        Starting from
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
                                            Competetion Details
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {
                                            competetionDetail.competition_details[0]
                                                .discription
                                        }
                                    </AccordionItemPanel>
                                </AccordionItem>

                                {/* Prerequisites */}
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Materials Required
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        {
                                            competetionDetail.competition_details[0]
                                                .requirements
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
                                    {/* <AccordionItemPanel>
                                        {
                                            competetionDetail.competition_details[0]
                                                .teacher
                                        }
                                    </AccordionItemPanel> */}
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="inheritBgColor accordion-right col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center">
                            <div className="inheritBgColor my-4 enroll-btns-container d-flex">
        
                                <button onClick={enrollMe} className={enrollStatus.status ? ("hide-this") : ("btn btn-primary btn-participate")}>
                                    Participate Now
                                </button>

                                <div className={enrollStatus.status ? ("py-2 px-4 start-date") : ("hide-this")}>
                                    <span className="inheritBgColor start-date-text">
                                        {enrollStatus.message}
                                    </span>
                                </div>
                            </div>
                            <div className=" mt-3 course-price-container">
                                <p className="course-price">
                                    <strong className="inheritBgColor">
                                       For Free
                                    </strong>{" "}
                                    
                                </p>
                            </div>
                            <img
                                className="my-5 certificate"
                                src={campWinBro}
                                alt="win"
                            />
                        </div>
                    </div>
                            </div>
                        </>
                    ) 
                    : 
                    (<h2>Please Wait</h2>)
                
            }

        </div>
    )
}

export default CompetetionInfo;
