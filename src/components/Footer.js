import React from 'react';
import githubLogo from '../github.png';
import linkedinLogo from '../linkedin.png';
import emailLogo from '../mail.png';
import { Overlay } from 'react-bootstrap';

function Footer() {

    return (
        <div className='sticky-bottom' style={{maxWidth:'100%', backgroundImage:'linear-gradient(lightgray, white)', border:'solid 0.2px', margin:'8px', padding:'10px', minHeight:'100px', boxShadow:'-15px 15px 15px 15px'}}>
            <div id='contact'>
                <h2 style={{fontFamily:'Fredericka the Great', textAlign:'center',margin:"5px",paddingTop:'10px', fontSize:'50px', letterSpacing:'1.8px', maxWidth:'500px', float:'left', paddingLeft:'40px'}}> Reach out on :</h2>
                <div style={{ marginLeft:'25px', paddingLeft:'25px'}}>
                    <button style={{ float:'right',  marginRight:'15px'}}>
                        <a href='https://www.github.com/KunZizinho'>
                            <img src={githubLogo} style={{width:'70px'}}/>
                        </a>
                    </button>
                    <button style={{float:'right', marginRight:'15px'}}>
                        <a href='https://www.linkedin.com/in/mario-kozic-557346160/'>
                            <img src={linkedinLogo} style={{width:'70px'}}/>
                        </a>
                    </button>
                    <button style={{float:'right', marginRight:'15px'}}>
                        <a href='mailto:Kun.zizinho@gmail.com'>
                            <img src={emailLogo} style={{width:'70px'}}/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Footer;