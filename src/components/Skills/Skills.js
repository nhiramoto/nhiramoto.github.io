import React, { Component } from 'react';
import './Skills.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud';

library.add(faCogs);

class Skills extends Component {
    constructor() {
        super();
        this.draw = this.draw.bind(this);
    }

    componentDidMount() {
        let width = 500;
        let height = 500;
        this.color = d3.scaleOrdinal().domain([0, 100]).range(['black', '#333333', '#4b5151', '#58A8D5', '#256c94']);
        this.opacity = d3.scalePow().exponent(2).domain([0, 100]).range([0.6, 1]);
        let fontSize = d3.scalePow().exponent(4).domain([0,100]).range([20,150]);
        let svg = d3.select('#skills-content')
            .append('svg')
            .attr('width', '500px')
            .attr('height', '500px');
        let root = svg.append('g');
        this.wordcloud = root.append("g")
            .attr('class','wordcloud')
            .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');
        d3.json('/resources/skills.json').then(data => {
            console.dir(data);
            d3Cloud()
                .size([width, height])
                .words(data)
                .timeInterval(20)
                .rotate(() => ~~(Math.random() * 2) * 90)
                .fontSize(d => fontSize(d.level))
                .fontWeight(['bold'])
                .padding(3)
                .text(d => d.skill)
                .spiral('archimedean')
                .on('end', words => this.draw(words))
                .start();
        });
    }

    draw(words) {
        this.wordcloud.selectAll('text')
            .data(words)
            .enter().append('text')
                .attr('class','word')
                .style('fill', d => this.color(d.level))
                .style('font-size', d => d.size + 'px')
                .style('font-family', 'Montserrat')
                .style('font-weight', 'bold')
                .style('cursor', 'pointer')
                .style('opacity', d => this.opacity(d.level))
                .attr('text-anchor', 'middle')
                .attr('transform', d => 'translate(' + d.x + ',' + d.y + ')rotate(' + d.rotate + ')')
                .text(d => { console.log('d: ' + d); return d.text; })
            .on('mouseover', this.handleMouseOver)
                .on('mouseout', this.handleMouseOut);
    }

    handleMouseOver(d, i) {
        d3.select(this)
            .transition()
                .duration(500)
                .ease(d3.easeElastic)
                .style('font-size', d => d.size * 1.5 + 'px');
    }

    handleMouseOut(d, i) {
        d3.select(this)
            .transition()
                .duration(800)
                .ease(d3.easeElastic)
                .style('font-size', d => d.size + 'px');
    }

    render() {
        return (
            <div className="Skills">
                <h1><span className="header-icons"><FontAwesomeIcon icon={faCogs} /></span> Skills</h1>
                <div id="skills-content"> </div>
            </div>
        );
    }
}

export default Skills;

