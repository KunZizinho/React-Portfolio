import React from 'react';
import Background from '../CD14419E-77DC-42A9-BE51-6DE573B3EE31.jpg';
import  '../countDown';


function Bar() {

    return (

        <div className='jumbotron-fluid' style={{maxWidth:'100%', backgroundImage:'linear-gradient(lightgray, white)', margin:'8px', padding:'10px', minHeight:'100px', boxShadow:'-15px -15px 15px 15px', marginBottom:'60px'}}>
            <h1 id='barSection' style={{fontFamily:'Special Elite', textAlign:'center', boxShadow:'10px 10px 10px 10px', padding:'5px' }}>Welcome to the Bar section</h1>
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" style={{backgroundImage:`url(${Background})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', minHeight:'600px', opacity:'0.8'}}>
                    <div className="w3-display-topleft w3-padding-large w3-xlarge"></div>
                        <div className="w3-display-middle" id="countDownComingSoon">
                            <h1 className="w3-jumbo w3-animate-top" id="commingSoon" style={{fontFamily:'Special Elite', paddingTop:'250px', paddingLeft:'100px', fontSize:'150px',color:'red'}}>COMING SOON...</h1>
                            <p className="w3-large w3-center" id="countDown" style={{position:'relative',bottom:'0px', background:`rgba(0, 0, 0, 0.5)`, color:'#f1f1f1', width:'100%', textAlign:'center',
                        fontSize:'50px', padding:'10px'}}></p>
                        </div>
                    </div>


            </div>
    );
};

export default Bar;
