import React, { Component } from 'react';
import './Introduction.sass';

class Introduction extends Component {
    render() {
        return (
            <div className="Introduction">
                <div className="Introduction-container">
                    <div className="info">
                        <div className="name hoverable"><span className="long-name">Nicolau</span><span className="short-name">N</span> <span className="last-name long-name">Hiramoto</span><span className="last-name short-name">H</span></div>
                        <div className="desc hoverable">Computer Scientist, Linux enthusiast.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;

