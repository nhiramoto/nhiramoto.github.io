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
        let icon, style;
        if (this.props.icon === "github") {
            icon = faGithub;
        } else if (this.props.icon === "email") {
            icon = faEnvelope;
        }
        if (this.props.color === 'blue') {
            style = {
                backgroundColor: '#004fb0',
                color: '#EFEFEF'
            }
        } else if (this.props.color === "cyan") {
            style = {
                backgroundColor: 'cyan',
                color: '#EFEFEF'
            }
        } else if (this.props.color === "red") {
            style = {
                backgroundColor: '#55557f',
                color: '#EFEFEF'
            }
        }
        return (
            <div className="IconizedLink" >
                <a href={this.props.link} rel="noopener" target="_blank">
                    <span className="icon" style={style}>
                        <FontAwesomeIcon icon={icon} className="svg-icon" />
                    </span>
                    <span className="link" style={style}>
                        {this.props.link}
                    </span>
                </a>
            </div>
        );
    }
}

export default IconizedLink;