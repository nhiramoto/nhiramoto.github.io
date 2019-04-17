import React, { Component } from 'react';
import './Portfolio.sass';
import Card from '../Card/Card';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <h1>Portfolio</h1>
                <ul id="project-list" className="">
                    <li>
                        <Card title="LocStat" desc="A Web Scraper that reports the statistics of source code lines from Git repositories." link="https://github.com/nhtoshiaki/LocStat" />
                    </li>
                    <li>
                        <Card title="GitView" desc="A tool that uses Information Visualization techniques to represent changes made to Git repositories." link="https://github.com/nhtoshiaki/GitView" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;

