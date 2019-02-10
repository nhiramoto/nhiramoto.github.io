import React, { Component } from 'react';
import './About.sass';
import IconizedLink from '../IconizedLink/IconizedLink';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About-container">
                    <div className="info-container">
                        <div className="info">
                            <div className="name hoverable">nh<span className="second-name">toshiaki</span></div>
                            <div className="desc hoverable">Computer Scientist, Programmer, Linux enthusiast.</div>
                            <div className="links">
                                <a href="https://www.codewars.com/users/nhtoshiaki" target="_blank" rel="noopener noreferrer">
                                    <img src="https://www.codewars.com/users/nhtoshiaki/badges/large" alt="" />
                                </a>
                                <IconizedLink icon="github" color="blue" link="https://github.com/nhtoshiaki" />
                                <IconizedLink icon="email" color="red" link="mailto:nicolau.hiramoto@gmail.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

