import React, { Component } from 'react';
import './Header.sass';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-container">
                    <div className="info">
                        <div className="name hoverable">Nicolau <span className="last-name">Hiramoto</span></div>
                        <div className="desc hoverable">Computer Scientist, Programmer, Linux enthusiast.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;

