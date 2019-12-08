import React, { Component } from 'react';
import './Experience.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faGraduationCap);
library.add(faBriefcase);

class Academic extends Component {
    render() {
        return (
            <div className="Academic">
                <h1>
                    <span className="header-icons"><FontAwesomeIcon icon={faBriefcase} />
                    </span> Experience &amp; Education</h1>
                <ul className="historic">
                    <li>
                        <span className="years">2019 - current</span>
                        <span className="qualification">Software Developer</span>
                        <span className="institution">Sweda Informática</span>
                        <span className="location">SP, Brazil</span>
                    </li>
                    <li>
                        <span className="years">2013 - 2018</span>
                        <span className="qualification">Bachelor of Computer Science</span>
                        <span className="institution">Faculdade de Ciências e Tecnologia - UNESP</span>
                        <span className="location">SP, Brazil</span>
                    </li>
                    <li>
                        <span className="years">2010 - 2011</span>
                        <span className="qualification">Electronics Technician</span>
                        <span className="institution">ETEC Julio de Mesquita</span>
                        <span className="location">SP, Brazil</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Academic;
