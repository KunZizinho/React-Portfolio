import React from "react";
// import React, { Component } from 'react';
// import styled from 'styled-components';
import { Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";






  function NavBar () {

      return (
        <div className='sticky-top ' style={{maxWidth:'100%', backgroundImage:'linear-gradient(lightgray, white)', border:'solid 0.2px', margin:'8px', padding:'10px', minHeight:'100px', boxShadow:'-15px 15px 15px 15px'}}>

            <div className='navbar navbar-expand-sm bg navbar fixed-top' style={{maxWidth:'100%',display:'inline-block'}}>

                  <h1 style={{fontFamily:'Fredericka the Great', textAlign:'center',margin:"5px",paddingTop:'10px', fontSize:'50px', letterSpacing:'1.8px', maxWidth:'500px', float:'left', paddingLeft:'40px'}}>Mario Kozic</h1>

                   <p style={{ marginLeft:'150px',marginRight:'220px', maxWidth:'250px', textAlign:'center', paddingLeft:'1px', paddingRight:'15px', float:'left', marginTop:'30px', boxShadow:'7px 7px 6px 6px', fontSize:'25px', fontFamily:'Courgette',paddingTop:'3px',paddingLeft:'5px', paddingBottom:'2px'}}>Web Developer</p>
                   <Dropdown>
                     <DropdownToggle variant='success' id='dropdown-basic' style={{fontSize:'40px', margin:'13px', float:'right', backgroundColor:'lightgrey', fontFamily:'Fredericka the Great', color:'black'}}>Menu</DropdownToggle>
                     <DropdownMenu>
                       <DropdownItem href='#homepage' style={{fontSize:'28px', fontFamily:'Courgette'}}>About Me</DropdownItem>
                       <DropdownItem href='#experiance' style={{fontSize:'28px', fontFamily:'Courgette'}}>Work Experiance</DropdownItem>
                       <DropdownItem href='#projects' style={{fontSize:'28px', fontFamily:'Courgette'}}>Projects</DropdownItem>
                       <DropdownItem href='#contact' style={{fontSize:'28px', fontFamily:'Courgette'}}>Contact</DropdownItem>
                     </DropdownMenu>
                   </Dropdown>
              </div>
          </div>
        );

  };

export default NavBar;
  
