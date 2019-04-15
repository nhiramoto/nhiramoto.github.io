import React, { Component } from 'react';
import './Portfolio.sass';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <ul id="project-list" className="">
                    <li className="card">
                        <h2 className="card-header">Title</h2>
                        <div className="card-content">
                            <p>Description here...</p>
                            <span className="btn-group">
                                <a className="btn" href="#">Link</a>
                            </span>
                        </div>
                    </li>
                    <li className="card">
                        <h2 className="card-header">Project 2</h2>
                        <div className="card-content">
                            <p>Description here...</p>
                            <span className="btn-group">
                                <a className="btn" href="#">Link</a>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;

