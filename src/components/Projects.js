import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ds from './daySched.gif';
import pg from './passGen.gif';
import qz from './quizz.gif';
import wa from './weatherApp.gif';

function Projects() {

    return(
        <div className="jumbotron-flex" id='projects' style={{ backgroundImage:'linear-gradient(lightgray, white)', margin:'30px',  boxShadow:'-25px 25px 25px 10px'}}>
            <h1 style={{width:'inherit', margin:'10px', textAlign:'center', fontFamily:'Dancing Script', fontSize:'46px', fontWeight:'bolder'}}>Projects</h1>
            <Carousel style={{marginTop:'30px', padding:'10px'}}>
                <Carousel.Item style={{marginLeft:'200px'}}>
                    <img src={ds} style={{width:'75%'}}/>
         
                </Carousel.Item>
                <Carousel.Item style={{marginLeft:'250px'}}>
                    <img src={pg} style={{width:'75%'}}/>

                </Carousel.Item>
                <Carousel.Item style={{marginLeft:'250px'}}>
                    <img src={qz} style={{width:'75%'}}/>

                </Carousel.Item>
                <Carousel.Item style={{marginLeft:'250px'}}>
                    <img src={wa} style={{width:'75%'}}/>

                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Projects;