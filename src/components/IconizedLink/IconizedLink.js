import React, { Component } from 'react';
import './IconizedLink.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faGithub);
library.add(faEnvelope);

class IconizedLink extends Component {
    render() {
        let icon;
        if (this.props.icon === "github") {
            icon = faGithub;
        } else if (this.props.icon === "email") {
            icon = faEnvelope;
        }
        return (
            <div className="IconizedLink">
                <span className="icon">
                    <FontAwesomeIcon icon={icon} className="svg-icon" />
                </span>
                <span className="link">
                    {this.props.link}
                </span>
            </div>
        );
    }
}

export default IconizedLink;