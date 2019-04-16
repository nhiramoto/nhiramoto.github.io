import React, { Component } from 'react';
import './Portfolio.sass';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <ul id="project-list" className="">
                    <li className="card">
                        <h2 className="card-header">LocStat</h2>
                        <div className="card-content">
                            <p>A Web Scraper that reports the statistics of source code lines from Git repositories.</p>
                            <span className="btn-group">
                                <a className="btn" href="https://github.com/nhtoshiaki/LocStat">Source Code</a>
                            </span>
                        </div>
                    </li>
                    <li className="card">
                        <h2 className="card-header">GitView</h2>
                        <div className="card-content">
                            <p>A visualization tool for Git repositories.</p>
                            <span className="btn-group">
                                <a className="btn" href="https://github.com/nhtoshiaki/GitView">Source Code</a>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;

