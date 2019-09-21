import React, { Component } from 'react';
import './Skills.sass';
import Tag from '../Tag/Tag';

class Skills extends Component {
    render() {
        return (
            <div className="Skills">
                <h1>Skills</h1>
                <Tag name="Java" />
                <Tag name="JavaScript" />
                <Tag name="Python" />
                <Tag name="HTML" />
                <Tag name="CSS, SASS" />
                <Tag name="C/C++" />
            </div>
        );
    }
}

export default Skills;

