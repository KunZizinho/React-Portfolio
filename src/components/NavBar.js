import React from "react";
// import React, { Component } from 'react';
import styled from 'styled-components';


  const Button = styled.button`
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    box-shadow:7px 7px 6px 6px;
    float: right;
    margin: 6px;
    margin-top:30px;
    color: ${props => (props.primary ? 'black' : 'darkgray')};
    border: ${props =>
    props.primary ? '1px solid black' : '1px solid darkgray'};
    padding: 0.30em 1.3em;
      &:hover {
      color: black;
     background : ${props =>
        props.primary ? 'darkgray' : 'gray'};
    } `;



  function NavBar () {

      return (
        <div className='sticky-top ' style={{maxWidth:'100%', backgroundImage:'linear-gradient(lightgray, white)', border:'solid 0.2px', margin:'8px', padding:'10px', minHeight:'100px', boxShadow:'-15px 15px 15px 15px'}}>

            <div className='navbar navbar-expand-sm bg navbar fixed-top' style={{maxWidth:'100%',display:'inline-block'}}>

                  <h1 style={{fontFamily:'Fredericka the Great', textAlign:'center',margin:"5px",paddingTop:'10px', fontSize:'50px', letterSpacing:'1.8px', maxWidth:'500px', float:'left', paddingLeft:'40px'}}>Mario Kozic</h1>

                   <p style={{ marginLeft:'150px',marginRight:'220px', maxWidth:'250px', textAlign:'center', paddingLeft:'1px', paddingRight:'15px', float:'left', marginTop:'30px', boxShadow:'7px 7px 6px 6px', fontSize:'15px', fontFamily:'Courgette',paddingTop:'3px', paddingBottom:'2px'}}>Web Developer / Software Engineer</p>

                  <a href='#contact'><Button>Contact Info</Button></a>
                  <a href='#carousel-Controls'><Button>Portfolio</Button></a>
                  <a href='#barSection'><Button>Bar</Button></a>
                  {/* <a href='#'><Button></Button></a> */}
                  
              </div>
          </div>
        );

  };

export default NavBar;
  
