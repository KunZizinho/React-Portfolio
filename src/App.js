import React from 'react';
import NavBar from './components/NavBar';
import Bar from './components/Bar';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import './style.css';

function App() {
  return (
    <div className="jumbotron-fluid" style={{maxWidth: '100%', boxSizing:'border-box' }}>
      <NavBar />,
      <Homepage />,
      <Bar />,
      <Contact />,

    </div>
  );
}

export default App;
