import React,{useState,useEffect} from 'react';
import Slider from "react-slick";
import summer from "../../images/assets/ColorfulSummer.png"
import { teachersUrl } from '../../apiData/api';
import LeftArrow from '../../images/assets/left-arrow.svg';
import RightArrow from '../../images/assets/right-arrow.svg';

const Teachers = () => {
    
    const [teachersData,setTeacherData] = useState([]);

    const getTeachers = async () => {
        const options = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type':'application/json',
                "Access-Control-Allow-Origin":'*'
            }
        };
        const fetchResponse = await fetch(teachersUrl,options);
        const response = await fetchResponse.json();
        setTeacherData(response);
        // console.log(response);
    };
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
                breakpoint: 762,
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

    useEffect(() => {
        getTeachers();
    },[]);
    // console.log(teachersData.teachers[0].firstname);
    const image1 = "http://3.7.254.1/static/assets/teachers/";
    return (
        <>
            <div className="section">
                <h2 className="section-heading">Meet the Team</h2>


                <Slider {...settings}>
                
                    {
                        teachersData && teachersData.teachers && teachersData.teachers.map((element) => {
                            return( 
                            <div className="teacher-tile"> 
                                <div className="d-flex justify-content-center px-3">
                                    <div key={element.id} className="teacher-tile-container  pb-3">
                                        <img src={`${image1}T${element.id}/${element.profile_picture}`} className="teacher-slider-image" alt="alternate"/>
                                        <div className="teacher-tile-bottom mt-4">
                                            <h4 className="teacher-slider-title text-center">{element.firstname} {element.lastname}</h4>
                                            <h4 className="my-2 teacher-post text-center">{element.qualifications}</h4>
                                            <p className="pb-2 teacher-experience text-center">{element.experience}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                   

                </Slider>
            </div>
        </>    
    )
}

export default Teachers;
