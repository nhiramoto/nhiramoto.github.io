import React, { Component } from 'react';
import $ from 'jquery';
import './Layout.sass';
import Introduction from '../Introduction/Introduction';
import Academic from '../Academic/Academic';
import Portfolio from '../Portfolio/Portfolio';
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
                        <li><a href="#academic" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Academic</a></li>
                        <li><a href="#portfolio" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Portfolio</a></li>
                        <li><a href="#footer" onMouseEnter={this.handleNavItemMouseEnter} onMouseOut={this.handleNavItemMouseOut}>Contact</a></li>
                    </ul>
                </nav>
                <section id="introduction" className="section">
                    <Introduction />
                </section>
                <section id="academic" className="section">
                    <Academic />
                </section>
                <section id="portfolio" className="section">
                    <Portfolio />
                </section>
                <section id="footer" className="section">
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Layout;
