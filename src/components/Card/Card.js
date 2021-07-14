import React, { Component } from 'react';
import './Card.sass';

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
