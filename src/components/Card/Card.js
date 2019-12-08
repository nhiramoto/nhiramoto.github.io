import React, { Component } from 'react';
import './Card.sass';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

class Card extends Component {

    handleMouseClick(e) {
        if ($(e.target).hasClass('flipped')) {
            $(e.target).removeClass('flipped');
        } else {
            $('.flipped').removeClass('flipped');
            $(e.target).addClass('flipped');
        }
    }

    render() {
        return (
            <div className="Card" onClick={this.handleMouseClick}>
                <div className="card-front">
                    <h2 className="card-header dark-bg">{this.props.title}</h2>
                    <div className="card-body">
                        <p>{this.props.desc}</p>
                        <span className="btn-group">
                            <a className="btn" title="Source Code" href={this.props.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="svg-icon" />
                            </a>
                        </span>
                    </div>
                </div>
                <div className="card-back">
                    <h2 className="card-header dark-bg">{this.props.title}</h2>
                    <div className="card-body">
                        <p>{this.props.longDesc}</p>
                        <span className="btn-group">
                            <a className="btn" title="Source Code" href={this.props.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="svg-icon" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

