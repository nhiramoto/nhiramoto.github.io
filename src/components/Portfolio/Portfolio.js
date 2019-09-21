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
                        <Card title="Personal Webpage" desc="This webpage containing information about my experiences and projects." link="https://github.com/nhtoshiaki/nhtoshiaki.github.io" />
                    </li>
                    <li>
                        <Card title="LocStat" desc="A Web Scraper that reports the statistics of source code lines from Git repositories." link="https://github.com/nhtoshiaki/LocStat" />
                    </li>
                    <li>
                        <Card title="GitView" desc="A tool that uses Information Visualization techniques to represent changes made to Git repositories." link="https://github.com/nhtoshiaki/GitView" />
                    </li>
                    <li>
                        <Card title="n-hub (mockup)" desc="A mockup of an aggregator of email, chat, calendar and news feed." link="https://github.com/nhtoshiaki/n-hub" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;

