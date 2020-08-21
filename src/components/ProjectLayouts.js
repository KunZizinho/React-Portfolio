import React from "react";
import CarouselOfProgress from "./CarouselOfProgress";


 function Portfolio() {

    return (
      <div className='jumbotron-fluid' style={{maxWidth:'90%', backgroundImage:'linear-gradient(lightgray, white)', marginLeft:'100px', padding:'10px', minHeight:'100px', boxShadow:'15px 15px 15px 15px darkgray'}}>
              <CarouselOfProgress />
        </div>
    );

};

export default Portfolio;
