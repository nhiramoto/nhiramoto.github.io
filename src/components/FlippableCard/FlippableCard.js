import React, { Component } from 'react';
import './FlippableCard.sass';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

class FlippableCard extends Component {

    handleMouseClick(e) {
        console.log('e:', e);
        let container = $(e.target).closest('.card-container');
        if (container.hasClass('flipped')) {
            container.removeClass('flipped');
        } else {
            $('.flipped').removeClass('flipped');
            container.addClass('flipped');
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="FlippableCard">
                <div className="card-container">
                    <div className="card-front">
                        <h2 className="card-header dark-bg" onClick={this.handleMouseClick}>
                            {this.props.title}
                        </h2>
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
                        <h2 className="card-header dark-bg" onClick={this.handleMouseClick}>
                            {this.props.title}
                        </h2>
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
            </div>
        );
    }
}

export default FlippableCard;

