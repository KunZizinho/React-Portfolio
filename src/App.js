import React from 'react';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import MarioKozic from './components/marioSolo.jpg';
import './style.css';
import WorkExperiance from './components/WorkExperiance';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="jumbotron-fluid" style={{maxWidth: '100%', boxSizing:'border-box' }}>
      <NavBar />,
      <div style={{marginLeft:'40%', marginTop:'15px'}}>
        <section className='one-fourth' id='html' style={{}}>
          <img src={MarioKozic} style={{borderRadius:'15%', boxShadow:'-15px 15px 15px 15px'}}/>
        </section>
      </div>
      <Homepage />,
      <WorkExperiance />,
      <Projects />,
      <Footer />

    </div>
  );
}

export default App;
