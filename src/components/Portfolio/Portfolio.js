import React, { Component } from 'react';
import './Portfolio.sass';
import FlippableCard from '../FlippableCard/FlippableCard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

library.add(faPuzzlePiece);

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <h1><span className="header-icons"><FontAwesomeIcon icon={faPuzzlePiece} /></span> Portfolio</h1>
                <ul id="project-list" className="">
                    <li>
                        <FlippableCard title="Personal Webpage"
                            desc="This webpage containing my experiences and projects."
                            longDesc="This webpage hosted on Github Pages containing information about my experiences, education and projects. This webpage was developed using JavaScript, React, SASS/CSS, HTML."
                            link="https://github.com/nhtoshiaki/nhtoshiaki.github.io" />
                    </li>
                    <li>
                        <FlippableCard title="LocStat"
                        desc="A Web Scraper that reports the statistical informations from Git repositories."
                        longDesc="A Web Scraper that reports the statistics of source lines of code from public Git repositories hosted on Github. This tool was developed using Python and Scrapy."
                        link="https://github.com/nhtoshiaki/LocStat" />
                    </li>
                    <li>
                        <FlippableCard title="GitView"
                        desc="A data visualization tool for Git repositories."
                        longDesc="A tool that uses information visualization techniques to represent changes made to each version of projects that uses Git as version control system. This tool was developed using JavaScript, Node.js, Electron, D3, HTML and SASS/CSS."
                        link="https://github.com/nhtoshiaki/GitView" />
                    </li>
                    <li>
                        <FlippableCard title="vis-tagcloud"
                        desc="A data visualization tool for keywords of co-authored articles."
                        longDesc="A webapp tool that uses Tag Cloud and a Graph based visualization technique to represent the most relevant keywords from co-authored articles published by researchers. This tool was developed using PHP, HTML, JavaScript, D3, jQuery/AJAX, HTML, SASS/CSS and MySQL."
                        link="https://github.com/nhtoshiaki/vis-tagcloud" />
                    </li>
                    <li>
                        <FlippableCard title="Simpleton"
                        desc="A virtual machine that evaluates simple arithmetic expressions."
                        longDesc="A simple virtual machine that evaluates basic arithmetic expressions and performs basic memory read and write operations. This simple virtual machine was developed using C++ and GNU Make."
                        link="https://github.com/nhtoshiaki/Simpleton" />
                    </li>
                    <li>
                        <FlippableCard title="n-hub (mockup)"
                        desc="A mockup of an aggregator."
                        longDesc="A mockup of an aggregator that gathers email, chat, calendar and news feed. This mockup was developed using JavaScript, Node.js, Electron, HTML and SASS/CSS."
                        link="https://github.com/nhtoshiaki/n-hub" />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Portfolio;

