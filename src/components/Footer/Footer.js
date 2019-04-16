import React, { Component } from 'react';
import './Footer.sass';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="contact-links">
                    <a className="contact-link" href="mailto:nicolau.hiramoto@gmail.com">Email</a>
                    <a className="contact-link" href="https://github.com/nhtoshiaki">Github</a>
                    <a className="contact-link" href="https://codepen.io/nhtoshiaki">Codepen.io</a>
                </div>
            </div>
        );
    }
}

export default Footer;

