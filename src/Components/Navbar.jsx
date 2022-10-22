import React from "react";
import '../Styles/Navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="nav1">
                    <div className="logo">
                        <a className="navbar-brand logo-name" href="#">Haber</a>
                        <div className="logo-tagline">INVESTMENT COMPANY</div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav-container">
                        <div className="collapse navbar-collapse navlinks col col-7" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active-link" href="#">Home</a>
                                <a className="nav-item nav-link" href="#">About</a>
                                <a className="nav-item nav-link" href="#">Services</a>
                                <a className="nav-item nav-link" href="#">Projects</a>
                                <a className="nav-item nav-link" href="#">Blog</a>
                                <a className="nav-item nav-link" href="#">Contact</a>
                            </div>
                        </div>
                        <div className="social-logos col col-5">
                            <i className="fa-brands fa-2x fa-square-twitter"></i>
                            <i className="fa-brands fa-2x fa-youtube"></i>
                            <i className="fa-sharp  fa-2x fa-solid fa-rss"></i>
                            <i className="fa-brands fa-2x fa-square-facebook"></i>
                            <i className="fa-brands fa-2x fa-square-google-plus"></i>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}


export default Navbar;