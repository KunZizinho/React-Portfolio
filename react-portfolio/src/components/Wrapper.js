import React from 'react';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Main from './Main';

function Wrapper() {

    return (
        <div className="wrapper">

            <NavBar />
            <Carousel />
            <Main />

        </div>
    );
};

export default Wrapper;