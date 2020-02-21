import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={'/accolitelogo.png'} className="accoliteLogoLeft" alt="logo"></img>
                {/* <img src={'/accoliteOlympiclogo.png'} className="accoliteLogoRight" alt="logo"></img> */}
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#squads">Squads</a></li>
                <li><a href="#schedule">Schedule</a></li>
                <li><a href="#scores">Scores</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact US</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;