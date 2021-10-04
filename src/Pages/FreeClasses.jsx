import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { freeCoursesUrl } from "../apiData/api";

import mushroom from "../images/assets/mushroom.png";
import piano from "../images/assets/piano.jpg";
import facebook from "../images/assets/facebook.png";
import instagram from "../images/assets/instagram.png";
import whatsapp from "../images/assets/whatsapp.png";
import designBg from "../images/assets/bg-img.svg";
import creativity from "../images/assets/creativity.png";

const FreeClasses = () => {
    const [freeCourse, setFreeCourse] = useState([]);
    const getFreeClasses = async () => {
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        try {
            const fetchResponse = await fetch(freeCoursesUrl, options);
            const response = await fetchResponse.json();
            console.log(response.free_courses);
            setFreeCourse(response);
        } catch (error) {
            console.log("following error while fetching free classes " + error);
        }
    };
    console.log(freeCourse.status && freeCourse.free_courses);
    useEffect(() => {
        getFreeClasses();
    }, []);
    return (
        <>
            <div className="heading">
                <h2>Free Classes</h2>
            </div>

            <section className="freeclass py-5 my-5" id="freeclass">
                <div className="container">
                    <div className="row mx-2 d-flex ">
                    {freeCourse && freeCourse.status && freeCourse.free_courses && freeCourse.free_courses.map((element) => {
                        return(
                            <div className="col-12 col-md-6 col-lg-4 zoom" key={element.id}>
                            <div className="single_tile shadow text-center ">
                                {
                                    <div className="class_image">
                                        <img
                                            src={piano}
                                            className="img-piano  img-responsive img-fluid"
                                            alt=""
                                        ></img>
                                    </div>
                                }
                                <div className="class-caption my-3">
                                    <h5>
                                        <Link to={"/batch-details/" + element.id}>{element.courses[0].course_name}</Link>
                                    </h5>
                                    <div className="age py-1">
                                        <span>{element.courses[0].minage}-{element.courses[0].maxage}</span>
                                        <span> Years</span>
                                    </div>
                                    <div className="date">
                                        <span className="mr-1">
                                            {element.batch_start }, {element.time_from}
                                        </span>
                                    </div>
                                    <div className="bookforfree">
                                        <a href="#" class="btn btn-success">
                                            Book for FREE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }) }
                    </div>
                </div>
            </section>
            <div class="shareclass container-fluid p-0 d-flex justify-content-evenly">
                <div className="justify-content-center inheritBgColor">
                <span>Share these online courses with your Friends</span>
                <div className="icon">
                    <a href="#">
                        <img
                            src={facebook}
                            className="img-icon img-responsive img-fluid"
                            alt=""
                        ></img>
                    </a>
                    <a href="#">
                        <img
                            src={instagram}
                            className="img-icon img-responsive img-fluid"
                            alt=""
                        ></img>
                    </a>
                    <a href="#">
                        <img
                            src={whatsapp}
                            className="img-icon img-responsive img-fluid"
                            alt=""
                        ></img>
                    </a>
                </div></div>
                <img
                    src={creativity}
                    className="create img-responsive img-fluid float-left"
                    alt=""
                ></img>
            </div>
        </>
    );
};

export default FreeClasses;
