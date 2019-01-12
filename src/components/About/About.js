import React, { Component } from 'react';
import './About.sass';

class About extends Component {
    render() {
        return (
            <div className="About">
                <div className="About-container">
                    <div className="info-container">
                        <div className="info">
                            <div className="name hoverable">nh<span className="second-name">toshiaki</span></div>
                            <div className="desc hoverable">Computer Scientist, Programmer, Linux lover.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

