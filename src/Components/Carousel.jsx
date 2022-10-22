import React from "react";
import '../Styles/Carousel.css'
const Carousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" height={460} src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide01.jpg?1666335028985" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block caption-container">
                            <h4>WE MEET YOUR FINANCIAL<br /> 
                                INVESTMENT NEEDS</h4>
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide03.jpg?1666335047041" alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block caption-container">
                            <h4>WE WILL HELP TO CREATE<br /> 
                                YOUR WEALTH</h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://livedemo00.template-help.com/wt_55458/images/page-1_slide02.jpg?1666335030498" alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block caption-container">
                            <h4>SIMPLE INVESTING<br /> 
                                PROSPEROUS FUTURE</h4>
                             
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}


export default Carousel;