import React, { Component } from 'react';
import './Academic.sass';

class Academic extends Component {
    render() {
        return (
            <div className="Academic">
                <h1>Academic Formation</h1>
                <ul className="historic">
                    <li>
                        <span className="years">2013 - 2018</span>
                        <span className="qualification">Bachelor of Computer Science</span>
                        <span className="institution">Faculdade de Ciências e Tecnologia - UNESP</span>
                        <span className="location">Presidente Prudente - SP, Brazil</span>
                    </li>
                    <li>
                        <span className="years">2010 - 2011</span>
                        <span className="qualification">Electronics Technician</span>
                        <span className="institution">ETEC Julio de Mesquita</span>
                        <span className="location">Santo André - SP, Brazil</span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Academic;

