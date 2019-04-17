import React, { Component } from 'react';
import './Card.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <h2 className="card-header">{this.props.title}</h2>
                <div className="card-content">
                    <p>{this.props.desc}</p>
                    <span className="btn-group">
                        <a className="btn" title="Source Code" href="{this.props.link}" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="svg-icon" />
                        </a>
                    </span>
                </div>
            </div>
        );
    }
}

export default Card;

