import React, { Component } from 'react';
import './About.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub);
library.add(faEnvelope);

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
                                <a href="https://github.com/nhtoshiaki" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="hoverable clickable" />
                                </a>
                                <a href="mailto:nicolau.hiramoto@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} className="hoverable clickable" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

