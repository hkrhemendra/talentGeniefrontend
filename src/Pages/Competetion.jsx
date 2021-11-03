import React, { useEffect, useState, useContext} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import ReactGA from "react-ga";
import compSample from "../images/comp-sample.svg";
import perks from "../images/perks.svg";
import { competitionUrl } from "../apiData/api";
import UserContext from "../../src/components/UserContext";
import Login from "./Login";

// Adding Google Analytics
ReactGA.initialize("UA-201766739-1");
// Adding Page View Property
ReactGA.pageview("/competetion");

const Competetion = () => {
    const {accessToken,setAccessToken} = useContext(UserContext);
    let history = useHistory();

    const [compData, setCompData] = useState([]);

    const enrolCompetetion=()=> {
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer '+ accessToken,
            },
        };
        fetch("http://localhost:8000/api/v1/enrollment/1/enroll",options)
            .then(res => res.json())
            .then(
                (result) => {
                    alert("You are Enrolled Successfully in competition");
                    console.log(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    
    const getCompetetions = async () => {
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        try {
            const fetchResponse = await fetch(competitionUrl, options);
            const response = await fetchResponse.json();
            console.log(response);
            if (response.status === 1) {
                setCompData(response);
            } else if (response.status === 0) {
                console.log("Status 0 : There is some error");
            }
        } catch (error) {
            console.log(
                "Error while fetching Competetions with an error-- " + error
            );
        }
    };

    useEffect(() => {
        getCompetetions();
    }, []);
    console.log("data");
    console.log(compData);

    const competetion_enroll =()=>{
        if(accessToken!==null){
            console.log("You are Logged In");
            enrolCompetetion();
        }else{
            history.push('/signup')
        }
    }

    return (
        <>
            <div className="section">
                <h2 className="section-heading">Free Classes</h2>

                <div className="container-fluid">
                    <div className="no-guttersfree-class-section row d-flex align-items-center justify-content-center">
                        {compData &&
                            compData.upcoming_competition &&
                            compData.upcoming_competition.map((element) => {
                                return (
                                    <>
                                        
                                        <div className="col-12 col-sm-6 col-md-4 px-0 d-flex justify-content-center pb-4">
                                        <Link to={"/get-competitions-details/" + element.category_fk} className="remove-default-underline">
                                            <img
                                                className="img-comp"
                                                src={compSample}
                                                alt="alternate"
                                                key={element.id}
                                            />
                                            <button className="btn-comp btn btn-danger">
                                                REGISTER
                                            </button>
                                        </Link>
                                        </div>
                                        
                                    </>
                                );
                            })}
                    </div>

                    <div className="up-comp-container container">
                        <h2 className="up-comp-heading text-center">
                            Upcoming Competetion
                        </h2>
                       
                        <div className="row">


                            <div className="col-6 p-0">
                                <ul className="up-comp-list up-comp-list-left">
                                {compData &&
                            compData.upcoming_competition &&
                            compData.upcoming_competition.map((element) => {
                                return (
                                    <><li>{element.title}</li></>)
                                })
                                }   
                                </ul>
                            </div>


                            <div className="col-6 p-0">
                                <ul className="up-comp-list">
                                {compData &&
                                compData.upcoming_competition &&
                                compData.upcoming_competition.map((element) => {
                                return (
                                    <><li>Starts on {element.registration_start.substr(0,10)}</li></>)
                                })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Enrol Button */}
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={competetion_enroll} >
                            Enroll
                        </button>
                    </div>

                    {/* video section static*/}
                    <div className="comp-vid-section container">
                        <div className="row">
                            <div className="col-12 col-lg-6 comp-video py-4">
                                <iframe
                                    className="embed-responsive-item"
                                    title="description-video"
                                    src="https://youtube.com/embed/LLF3GMfNEYU?rel=0"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="col-12 col-lg-6 comp-perks py-4">
                                <img className="img-responsive" src={perks} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Competetion;
