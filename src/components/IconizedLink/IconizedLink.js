import React, { Component } from 'react';
import './IconizedLink.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class IconizedLink extends Component {
    render() {
        let icon, style, text;
        text = this.props.text ? this.props.text : this.props.link;
        if (this.props.icon === "github") {
            icon = faGithub;
        } else if (this.props.icon === "email") {
            icon = faEnvelope;
        } else if (this.props.icon === "codepen") {
            icon = faCodepen;
        } else if (this.props.icon === "linkedin") {
            icon = faLinkedin;
        }
        if (this.props.color === 'blue') {
            style = {
                backgroundColor: '#004fb0',
                color: '#EFEFEF'
            }
        } else if (this.props.color === "cyan") {
            style = {
                backgroundColor: 'darkcyan',
                color: '#EFEFEF'
            }
        } else if (this.props.color === "purple") {
            style = {
                backgroundColor: '#55557f',
                color: '#EFEFEF'
            }
        } else if (this.props.color.startsWith('#')) {
            style = {
                backgroundColor: this.props.color,
                color: '#EFEFEF'
            }
        }
        return (
            <div className="IconizedLink" >
                <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <span className="icon" style={style}>
                        <FontAwesomeIcon icon={icon} className="svg-icon" />
                    </span>
                    <span className="link" style={style}>
                        {text}
                    </span>
                </a>
            </div>
        );
    }
}

export default IconizedLink;
