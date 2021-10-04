import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import { coursesUrl } from "../apiData/api";
import ratingStar from "../images/assets/rating-star.svg";

// Adding Google Analytics
ReactGA.initialize("UA-201766739-1");
// Adding Page View Property
ReactGA.pageview("/courses");

const Courses = () => {
    function intoArray(str) {
        return str.split(" ");
    }
    // months array
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

    const [coursesData, setCoursesData] = useState([]);

    const [sortUrl, setSortUrl] = useState("");
    // calling the api method

    const getCourses = async (url) => {
        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        try {
            const fetchResponse = await fetch(url, options);
            const response = await fetchResponse.json();
            console.log(response);
            setCoursesData(response);
        } catch (error) {
            console.warn(
                "Following error arises while fetching course: " + error
            );
        }
    };
    // console.log("Courses Data" +coursesData)
    const image1 ="http://3.7.254.1/static/assets/courses/";

    // category state variables
    const [categ, setCateg] = useState("");
    const [month, setMonth] = useState("");
    const [minage, setMinage] = useState("");
    const [maxage, setMaxage] = useState("");
    const [price, setPrice] = useState("");
    const [level, setLevel] = useState("");
    const [popularity, setPopularity] = useState("");

    const sortData = () => {
        const uri =
            coursesUrl +
            `?category${categ}&minage${
                minage.substring(0, 1) +
                parseInt(minage.substring(0, 4).substring(1, 3))
            }&maxage${
                minage.substring(0, 1) +
                parseInt(minage.substring(4, 7).substring(1, 3))
            }&price${price}&month${month}&level${level}&popularity${popularity}`;
        setSortUrl(uri);
        getCourses(uri);
        console.log(uri);
    };
 
    useEffect(() => {
        sortData();

    }, [sortUrl, categ, month, minage, price, level, popularity]);

    // console.log(coursesData);

    return (
        <div className="course-container container text-center">
            <h1 className="section-heading">All Courses</h1>
      
            {/* dropdown menu */}
            <div className="dropdown-container container my-4">
                <div className="dropdown-container-row row">
                {/* To Reset */}
                    <div  className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                onClick={(e) => {
                                    setCateg("");
                                    setCoursesData("");
                                    setLevel("");
                                    setMonth("");
                                    setPopularity("");
                                    setMaxage("")
                                    setMinage("")
                                    setPrice("")
                                }}
                                className="btn-dropdown btn"
                                type="button"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Category
                            </button>
                            <div className="dropdown-menu">
                                {coursesData &&
                                    coursesData.all_categories &&
                                    coursesData.all_categories.map(
                                        (element) => {
                                            return (
                                                <button
                                                    value={"=" + element.id}
                                                    onClick={(e) => {
                                                        setCateg(
                                                            e.target.value
                                                        );
                                                    }}
                                                    className="dropdown-item"
                                                >
                                                    {element.name}
                                                </button>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    </div>

                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Month Wise
                            </button>
                            <div className="dropdown-menu">
                                {months.map((month, index) => {
                                    return (
                                        <button
                                            className="dropdown-item"
                                            key={index}
                                            value={"=" + parseInt(index + 1)}
                                            onClick={(e) => {
                                                setMonth(e.target.value);
                                            }}
                                        >
                                            {month}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Price
                            </button>
                            <div className="dropdown-menu">
                                <button
                                    value={"=inc"}
                                    onClick={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    Low to High
                                </button>
                                <button
                                    value={"=dec"}
                                    onClick={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    High to Low
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Sort
                            </button>
                            <div className="dropdown-menu">
                                <button
                                    value={"=dec"}
                                    onClick={(e) => {
                                        setPopularity(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    Most Popular
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Age Group
                            </button>
                            <div className="dropdown-menu">
                                <button
                                    value={"=04,=06"}
                                    onClick={(e) => {
                                        setMinage(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    4-6 years
                                </button>
                                <button
                                    value={"=06,=08"}
                                    onClick={(e) => {
                                        setMinage(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    6-8 years
                                </button>
                                <button
                                    value={"=08,=10"}
                                    onClick={(e) => {
                                        setMinage(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    8-10 years
                                </button>
                                <button
                                    value={"=10,=12"}
                                    onClick={(e) => {
                                        setMinage(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    10-12 years
                                </button>
                                <button
                                    value={"=12,=14"}
                                    onClick={(e) => {
                                        setMinage(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    12-14 years
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown-container-col col">
                        <div className="dropdown">
                            <button
                                className="btn-dropdown btn dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                            >
                                Level
                            </button>
                            <div className="dropdown-menu">
                                <button
                                    value="=Beginner"
                                    onClick={(e) => {
                                        setLevel(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    Beginner
                                </button>
                                <button
                                    value="=Intermediate"
                                    onClick={(e) => {
                                        setLevel(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    Intermediate
                                </button>
                                <button
                                    value="=Advanced"
                                    onClick={(e) => {
                                        setLevel(e.target.value);
                                    }}
                                    className="dropdown-item"
                                >
                                    Advanced
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Displaying Courses */}
            {coursesData && coursesData.status && coursesData.all_courses ? (
                coursesData.all_courses.map((element) => {
                    return element.is_active ? (
                        <Link
                            to={"/batch-details/" + element.id}
                            className="remove-default-underline"
                        >
                            <div
                                key={element.id}
                                className="zoom2 course-box-container container"
                            
                            >  
                                <div className="course-box-container-row row" style={{marginTop:"7rem"}}>
                                    <div className="course-box-container-col col-12 my-2">
                                        <div className="course-box-row-in row no-gutters">
                                            <div className="course-box-col-i col-12  col-md-5 ">
                                                <img
                                                    src={`${image1}${element.courses[0].course_code}/${element.courses[0].thumbnail_image}`}           
                                                    className="course-image"
                                                />
                                            </div>
                                            {/* right section of the course */}
                                            <div className="course-box-col-in col-12  col-md-7">
                                                {/* course title */}
                                                <h2 className="course-box-col-in-title">
                                                    {
                                                        element.courses[0]
                                                            .course_name
                                                    }
                                                </h2>

                                                <div className="right-row row">
                                                    <div className="right-col col-9">
                                                        {/* first row */}
                                                        <div className="row">
                                                            <div className="star-col col-7">
                                                                {[
                                                                    ...Array(
                                                                        Math.round(
                                                                            element.rating /
                                                                                2
                                                                        )
                                                                    ),
                                                                ].map(
                                                                    (
                                                                        element
                                                                    ) => {
                                                                        return (
                                                                            <img
                                                                            className="rating-star"
                                                                                src={
                                                                                    ratingStar
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}

                                                                <br />
                                                                <span className="course-text">
                                                                    {
                                                                        element
                                                                            .courses[0]
                                                                            .level
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div className="star-col col-5 d-flex justify-content-center align-items-center">
                                                                <button className="btn btn-secondary btn-user">
                                                                    Demo Class
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* second row */}
                                                        <div className="row-down row py-2">
                                                            <div className="row-down-col col-7 age-group pt-1">
                                                                {
                                                                    element
                                                                        .courses[0]
                                                                        .minage
                                                                }
                                                                -
                                                                {
                                                                    element
                                                                        .courses[0]
                                                                        .maxage
                                                                }{" "}
                                                                years
                                                            </div>
                                                            <div className="row-down-col col-5 text-center">
                                                                <button className="btn btn-primary btn-user">
                                                                    Enroll Now
                                                                </button>
                                                            </div>
                                                        </div>

                                                        {/* third row-down  */}

                                                        <div className="row row-down no-gutters pt-2">
                                                            <div className="row-down-col col-6 ">
                                                                <span className="course-text ">
                                                                    <i className="fas fa-clock"></i>
                                                                    {
                                                                        element.time_from
                                                                    }
                                                                </span>
                                                                <br />
                                                                <span className="course-text ">
                                                                    <i className="far fa-hourglass"></i>
                                                                    {60 *
                                                                        (parseInt(
                                                                            element.time_to
                                                                        ) -
                                                                            parseInt(
                                                                                element.time_from
                                                                            ))}{" "}
                                                                    minutes
                                                                </span>
                                                            </div>
                                                            <div className="row-down-col col-6 text-at-end course-text pt-3">
                                                                {
                                                                    element.batch_start
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-between right-col col-3">
                                                        <div className="days">
                                                            {intoArray(
                                                                element.weekDays
                                                            )
                                                                .slice(0, 6)
                                                                .map(
                                                                    (weekD) => {
                                                                        return (
                                                                            <p>
                                                                                {
                                                                                    weekD
                                                                                }
                                                                            </p>
                                                                        );
                                                                    }
                                                                )}
                                                        </div>
                                                        <div className="price">
                                                            <p className="mb-0">
                                                                {element.price}
                                                                /-
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        ""
                    );
                })
            ) : (
                <h3 className="mt-5">
                    No Courses for selected tag
                    <br />
                    Please Refresh
                </h3>
            )}
        </div>
    );
};

export default Courses;
