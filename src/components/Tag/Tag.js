import React, { Component } from 'react';
import './Tag.sass';

class Tag extends Component {
    render() {
        return (
            <div className="Tag" >
                <div className="tag-name">{this.props.name}</div>
            </div>
        );
    }
}

export default Tag;
