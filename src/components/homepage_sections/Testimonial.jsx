import React from "react";
import Slider from "react-slick";
import LeftArrow from '../../images/assets/left-arrow.svg';
import RightArrow from '../../images/assets/right-arrow.svg';
import testimonialData from './testimonialData';
const Testimonial = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props} />
      );
    
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
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
                    slidesToShow:1,
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

    // testimonialData.map((x)=>console.log(x.name));
    return (
        <>
            <div className="section">
                <h2 className="section-heading">Testimonials</h2>


                <Slider {...settings}>
                    {
                        testimonialData.map((element) => {
                            return(
                                <div className="testimonial-tile"> 
                        <div className="d-flex justify-content-center ">
                            <div className="testimonial-tile-container  pb-3">
                                <img src={element.image_url} className="testimonial-slider-image" alt="alternate"/>
                                <div className="testimonial-tile-bottom pt-2 ">
                                    <div className="testimonial-tile-bottom-container container" >
                                        <div className="row  no-gutters">
                                            <div className="testimonial-tile-col col-8">
                                                <h4 className="testimonial-slider-title text-start mb-0">{element.name}</h4>
                                            </div>
                                            <div className="testimonial-tile-col col-4 text-center">
                                                <i class="fas fa-quote-right pt-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="pt-1 testimonial-description text-start">{element.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    
                </Slider>
                
                
            </div>
        </>    
    );
}

export default Testimonial;
