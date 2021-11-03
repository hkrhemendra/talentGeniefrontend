import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { freeCoursesUrl } from "../../apiData/api";

const FreeClasses = () => {
    const [freeCourseData, setFreeCourseData] = useState([]);

    const getFreeCourses = async () => {
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
            console.log(response);
            console.log(freeCoursesUrl);
            setFreeCourseData(response);
        } catch (error) {
            console.log("Error while fetching free courses :(");
            console.log(freeCoursesUrl);
        }
    };

    useEffect(() => {
        getFreeCourses();
    }, []);
    const image1 =
        "https://images.unsplash.com/photo-1537365587684-f490102e1225?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60";

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
    console.log(freeCourseData.free_courses);
    return (
        <>
        <div className="free-classes-background">
            <div className="section">
                <Link to="free-classes">
                    <h2 className="section-heading">Free Classes</h2>
                </Link>

                <div className="container-fluid">
                    <div className="no-guttersfree-class-section row d-flex align-items-center justify-content-center">
                        {freeCourseData &&
                            freeCourseData.free_courses &&
                            freeCourseData.free_courses
                                .slice(0, 3)
                                .map((element) => {
                                    return (

                                        
                                        <div className="my-2 col-12 col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center">
                                        <Link to={"batch-details/" + element.id} >
                                            <div className=" box-free-class zoom">
                                                <img
                                                    className="img-free-class"
                                                    src={image1}
                                                    alt="alternate"
                                                />
                                                <h4 className="title-free-class mt-3">
                                                    {
                                                        element.courses[0]
                                                            .course_name
                                                    }
                                                </h4>
                                                <h5 className="time-free-class">
                                                    Starting From :{" "}
                                                    {parseInt(
                                                        element.batch_start.substring(
                                                            8,
                                                            10
                                                        )
                                                    )}{" "}
                                                    {
                                                        months[
                                                            parseInt(
                                                                element.batch_start.substring(
                                                                    5,
                                                                    7
                                                                )
                                                            )
                                                        ]
                                                    }
                                                    <span className="inheritBgColor ">
                                                        {" "}
                                                        {element.time_from.substring(
                                                            0,
                                                            5
                                                        )}
                                                    </span>
                                                </h5>
                                                {/* book free trial button */}
                                                <div className="btn-box container-fluid text-center">
                                                    <button class="btn btn-book-trial mt-2">
                                                        Book Free trial
                                                    </button>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                       
                                    );
                                })}
                    </div>
                </div>
            </div>
            
            <hr />
            </div>
        </>
    );
};

export default FreeClasses;
