import React, { Component } from 'react';
import ProfilePic from './ProfilePic.jpg';

import './Intro.css';


class Intro extends Component {
    render() {
        return (
            <div className="Intro__Container">
                <img src={ProfilePic} alt="Bonn Wonghansa"/>
                <div className="Title">
                    <h1>Bonn Wonghansa</h1>
                    <h2>Full-Stack Engineer</h2>
                </div>
            </div>
            
        );
    }
}

export default Intro;