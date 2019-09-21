import React, { Component } from 'react';
import './Footer.sass';
import IconizedLink from '../IconizedLink/IconizedLink';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer-text">
                    <p>This webpage was developed with React and styled from scratch with Sass. See the source code <a href="https://github.com/nhtoshiaki/nhtoshiaki.github.io" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>
                <div className="contact-links">
                    <IconizedLink icon="email" link="mailto:nicolau.hiramoto@gmail.com" text="nicolau.hiramoto@gmail.com" color="purple" />
                    <IconizedLink icon="github" link="https://github.com/nhtoshiaki" text="Github" color="blue" />
                    <IconizedLink icon="codepen" link="https://codepen.io/nhtoshiaki/" text="Codepen.io" color="cyan" />
                </div>
            </div>
        );
    }
}

export default Footer;

