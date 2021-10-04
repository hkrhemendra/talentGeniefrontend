import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start bg-dark text-muted">
            {/* <!-- div: Social media --> */}
            <div className="footer-top d-flex justify-content-center  p-4 ">
                {/* <!-- Left --> */}
                <div className="footer-top-heading pr-4 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div className="footer-top-heading">
                    <a href="" className="mr-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="mr-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="mr-4 text-reset">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    
                    <a href="" className="mr-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="mr-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    
                </div>
                {/* <!-- Right --> */}
                
            </div>
            {/* <!-- div: Social media --> */}
            
            {/* <!-- div: Links  --> */}
            <div className="footer-bottom">
                <div className="footer-bottom-container container text-center text-md-start">
                    {/* <!-- Grid row --> */}
                    <div className="footer-bottom-container-row row ">
                        {/* <!-- Grid column --> */}
                        <div className="footer-bottom-container-row-col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">
                            {/* <!-- Content --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Kids Passion
                            </h6>
                            <p>
                                Description about the company
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="footer-bottom-container-row-col col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <Link to="/courses" className="text-reset">
                                    Courses
                                </Link>
                            </p>    
                            <p>
                                <Link to="/competetion" className="text-reset">
                                Competetion
                                </Link>
                            </p> 
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="footer-bottom-container-row-col col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            
                            <p>
                                <a href="#!" className="text-reset">
                                    Contact Us
                                </a>
                            </p>
                            <p>
                                <Link to="/about" className="text-reset">
                                    About Us
                                </Link>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">
                                    Help
                                </a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="footer-bottom-container-row-col col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p>
                                <i className="fas fa-home mr-3"></i> Hyderabad, IN
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i>
                                info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 91 999 888
                                9996
                            </p>
                            <p>
                                <i className="fas fa-print mr-3"></i> + 01 234 567
                                89
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </div>
            {/* <!-- div: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="footer-copyright text-center p-4">
                <span>© 2021 Copyright : </span>
                <Link to="/">Kids Passion</Link>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;
