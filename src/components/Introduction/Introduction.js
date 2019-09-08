import React, { Component } from 'react';
import './Introduction.sass';
import Tag from '../Tag/Tag';

class Introduction extends Component {
    render() {
        return (
            <div className="Introduction">
                <div className="Introduction-container">
                    <div className="info">
                        <div className="name hoverable intro-rows"><span className="long-name">Nicolau</span><span className="short-name">N</span> <span className="last-name long-name">Hiramoto</span><span className="last-name short-name">H</span></div>
                        <div className="desc hoverable intro-rows">
                            <Tag name="Software Engineer" />
                            <Tag name="Computer Scientist" />
                            <Tag name="Linux enthusiast" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;

