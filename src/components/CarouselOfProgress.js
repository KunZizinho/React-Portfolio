import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import emplTrac from './emplTrac.gif';
import quizz from './quizz.gif';
import passGen from './passGen.gif';
import daySched from './daySched.gif';
import fitTrack from './fitTrack.gif';
import weatherApp from './weatherApp.gif';


CarouselOfProgress();
function CarouselOfProgress() {

    return (
        <Carousel>
            <h1 id='barSection' style={{fontFamily:'Special Elite', textAlign:'center', boxShadow:'10px 10px 10px 10px', padding:'5px' }}>Bootcamp projects</h1>
            <div id="carousel-Controls" className="carousel-slide" data-ride="carousel" style={{ height:'600px'}}>
                {/* <ol className="carousel-indicators" >
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselIndicators" data-slide-to="5"></li>
                </ol> */}
                <div className="carousel-inner" style={{alignContent:'space-evenly'}}>
                    <div className="carousel-item active" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={emplTrac} alt="First slide" style={{imageResolution:'from-image', minWidth:'80%', marginLeft:'140px'}}/>
                    </div>
                    <div className="carousel-item" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={quizz} alt="Second slide" style={{ imageResolution:'from-image',minWidth:'80%',marginLeft:'140px'}}/>
                    </div>
                    <div className="carousel-item" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={passGen} alt="Third slide" style={{ imageResolution:'from-image',minWidth:'80%',marginLeft:'140px'}}/>
                    </div>
                    <div className="carousel-item" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={daySched} alt="Fourth slide" style={{ imageResolution:'from-image',minWidth:'80%',marginLeft:'140px'}}/>
                    </div>
                    <div className="carousel-item" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={fitTrack} alt="Fifth slide" style={{ imageResolution:'from-image',minWidth:'80%',marginLeft:'140px'}}/>
                    </div>
                    <div className="carousel-item" style={{alignContent:'stretch' }}>
                        <img className="carousel-img" src={weatherApp} alt="Sixth slide" style={{ imageResolution:'from-image',minWidth:'80%',marginLeft:'140px'}}/>
                    </div>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev" style={{backgroundColor:'darkgrey', zIndex:'3'}}>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Prev</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next" style={{backgroundColor:'darkgrey', zIndex:'3'}}>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='se-only'>Next</span>
                </a> */}
            </div>
        </Carousel>
    );

};

export default CarouselOfProgress;