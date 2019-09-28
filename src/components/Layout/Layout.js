import React, { Component } from 'react';
import $ from 'jquery';
import './Layout.sass';
import Introduction from '../Introduction/Introduction';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';

class Layout extends Component {

    constructor() {
        super();
        this.handleNavItemMouseEnter = this.handleNavItemMouseEnter.bind(this);
        this.handleNavItemMouseOut = this.handleNavItemMouseOut.bind(this);
    }

    componentDidMount() {
        this.setState({
            navBtnWidth: $('.navbar a').css('width')
        });
    }
    
    handleNavItemMouseEnter(e) {
        $(e.target).clearQueue();
        $(e.target).animate({
            width: $(e.target).get(0).scrollWidth
        }, 300, () => {
            $(e.target).width('auto');
        });
    }

    handleNavItemMouseOut(e) {
        $(e.target).animate({
            width: this.state.navBtnWidth
        }, 300);
    }

    render() {
        return (
            <div id="layout-container">
                <nav className="navbar">
                    <ul className="bubbles">
                        <li><a href="#introduction" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Introduction</a></li>
                        <li><a href="#experience" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Experience</a></li>
                        <li><a href="#portfolio" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Portfolio</a></li>
                        <li><a href="#skills" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Skills</a></li>
                        <li><a href="#footer" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Contact</a></li>
                    </ul>
                </nav>
                <section id="introduction" className="section">
                    <Introduction />
                </section>
                <section id="experience" className="section">
                    <Experience />
                </section>
                <section id="portfolio" className="section">
                    <Portfolio />
                </section>
                <section id="skills" className="section">
                    <Skills />
                </section>
                <section id="footer" className="section">
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Layout;
