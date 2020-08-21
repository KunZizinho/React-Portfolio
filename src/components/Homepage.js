import React from 'react';


function Homepage() {

    return (
        <div className='row' style={{height:"800", backgroundColor:'white', top:'10px', margin:'5px', padding:'5px 5px 5px 5px', maxWidth:'100%',marginBottom:'100px'}}>

            <div className='article'style={{width:'47%', backgroundImage:'linear-gradient(lightgray, white)', position: 'relative', bottom:'-30px',height:'98%', boxShadow:'-25px 25px 25px 10px', float:'right', marginRight:'50px', marginLeft:'30px',}}>

                <section style={{backgroundImage:'linear-gradient(lightgray, white)',marginRight:'5px',marginLeft:'5px',
                    padding:'6px', minWidth:'500px',fontSize:'17px', maxHeight:'850px', position:'relative', zIndex:'4px', overflow:'visible',}}>

                        <h4 id='homepage' style={{fontFamily:'Dancing Script', fontSize:'36px', textAlign:'center', fontWeight:'bolder'}}>How dod i got here?!?</h4>
                        <p style={{fontFamily:'Satisfy', textAlign:'center',fontSize:'26px',fontWeight:'bold'}}>Well let’s start from the beginning.
                            <br></br>
                            Hi, My name is Mario.
                        </p>
                        <p style={{fontFamily:'Satisfy', fontSize:'21px'}}> I am  Web Developer leveraging a background in IT mainly  Networking.  Recently I’ve joined Development field as I’m finishing Bootcamp  for  <b>Full Stack Development from Rutgers University.</b> With newly developed skills and certification in JavaScript, Bootstrap, jQuery, MySQL, MongoDB, Sequelize, ORM, Heroku, Node.js, Express.js, HTTP, API, React.js, and responsive web design.
                        With each project, my aim is to best engage my audience for an impactful user-experience.</p>
                        <br></br>
                        <p style={{fontFamily:'Satisfy', fontSize:'21px'}}>
                        I applied aspects of UX and agile development in a recent project where I worked to develop a professional business website for a local Dental office. Excited to leverage skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web. 
                        </p>
                        <br></br>
                    
                    </section>

            </div>

            <article className='article' style={{width:'47%', backgroundImage:'linear-gradient(lightgray, white)', position: 'relative', bottom:'-30px',height:'98%', boxShadow:'-25px 25px 25px 10px', float:'left'}}>
                    <section style={{backgroundImage:'linear-gradient(lightgray, white)',marginRight:'5px',marginLeft:'5px',
                    padding:'6px', minWidth:'500px',fontSize:'16px', maxHeight:'850px', position:'relative', zIndex:'4px', overflow:'visible'}}>
                        <h4 style={{textAlign:'center', fontFamily:'Dancing Script', fontSize:'30px', fontWeight:'bold'}}>Things you will fing on my portfolio</h4>
                        <br></br>
                        <p style={{fontFamily:'Satisfy', fontSize:'20px', marginLeft:'5px', marginRight:'5px'}}>
                        Contrary to popular belief, Lorem Ipsum is not just a random text, but has its roots in classical Latin literature from the year 45 BC, which means that it is over 2000 years old. Richard McClintock, a professor of Latin at Hampden-Sydney College in Virginia, searched for one of the strangest Latin words, consectetur, from the Lorem Ipsum text, and going through quotations of that word in classical literature, discovered an undoubted source. Lorem Ipsum comes from paragraphs 1.10.32 and 1.10.33 of Cicero's work entitled "de Finibus Bonorum et Malorum" (Extremes of Good and Evil), written in 45 BC This work is a treatise on the theory of ethics, and was very popular in the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet ..", comes from paragraph 1.10.32.
                        </p><br></br>
                        <p style={{fontFamily:'Satisfy', fontSize:'20px'}}>
                        For those interested, a standard section of Lorem Ipsum used since the 16th century can be found below on this page. Parts 1.10.32 and 1.10.33 from the work "de Finibus Bonorum et Malorum" were literally transferred from the original, accompanied by an English translation by H. Rackham from 1914.
                        </p>
                    </section>

            </article>
                
            
        </div>
    );
};

export default Homepage;
// backgroundImage:'linear-gradient(lightgray, white)
