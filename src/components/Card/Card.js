import React, { Component } from 'react';
import './Card.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <h2 className="header dark-bg">{this.props.headerText}</h2>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;
