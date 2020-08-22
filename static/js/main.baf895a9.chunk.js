(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){},106:function(e,t,a){},111:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(35),i=a.n(r),c=(a(57),a(2)),s=a(3),l=a(5),u=a(4),m=a(6),d=(a(59),a(11)),h=a(12),p=a.n(h),b=(a(64),a(69),a(74),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Tag"},o.a.createElement("div",{className:"tag-name"},this.props.name))}}]),t}(n.Component)),E=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Introduction"},o.a.createElement("div",{className:"Introduction-container"},o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"name hoverable intro-rows"},o.a.createElement("span",{className:"long-name"},"Nicolau"),o.a.createElement("span",{className:"short-name"},"N")," ",o.a.createElement("span",{className:"last-name long-name"},"Hiramoto"),o.a.createElement("span",{className:"last-name short-name"},"H")),o.a.createElement("div",{className:"desc hoverable intro-rows"},o.a.createElement(b,{name:"Software Developer"}),o.a.createElement(b,{name:"Computer Scientist"}),o.a.createElement(b,{name:"Linux enthusiast"})))))}}]),t}(n.Component),f=(a(76),a(81),a(7)),v=a(9),g=a(14);f.b.add(g.b);var k=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleMouseClick",value:function(e){console.log("e:",e);var t=p()(e.target).closest(".card-container");t.hasClass("flipped")?t.removeClass("flipped"):(p()(".flipped").removeClass("flipped"),t.addClass("flipped"))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"FlippableCard"},o.a.createElement("div",{className:"card-container"},o.a.createElement("div",{className:"card-front"},o.a.createElement("h2",{className:"card-header dark-bg",onClick:this.handleMouseClick},this.props.title),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,this.props.desc),o.a.createElement("span",{className:"btn-group"},o.a.createElement("a",{className:"btn",title:"Source Code",href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.a,{icon:g.b,className:"svg-icon"}))))),o.a.createElement("div",{className:"card-back"},o.a.createElement("h2",{className:"card-header dark-bg",onClick:this.handleMouseClick},this.props.title),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,this.props.longDesc),o.a.createElement("span",{className:"btn-group"},o.a.createElement("a",{className:"btn",title:"Source Code",href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.a,{icon:g.b,className:"svg-icon"})))))))}}]),t}(n.Component),N=a(8);f.b.add(N.e);var O=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Portfolio"},o.a.createElement("h1",null,o.a.createElement("span",{className:"header-icons"},o.a.createElement(v.a,{icon:N.e}))," Portfolio"),o.a.createElement("ul",{id:"project-list",className:""},o.a.createElement("li",null,o.a.createElement(k,{title:"Personal Webpage",desc:"This webpage containing my experiences and projects.",longDesc:"This webpage hosted on Github Pages containing information about my experiences, education and projects. This webpage was developed using JavaScript, React, SASS/CSS, HTML.",link:"https://github.com/nhtoshiaki/nhtoshiaki.github.io"})),o.a.createElement("li",null,o.a.createElement(k,{title:"LocStat",desc:"A Web Scraper that reports the statistical informations from Git repositories.",longDesc:"A Web Scraper that reports the statistics of source lines of code from public Git repositories hosted on Github. This tool was developed using Python and Scrapy.",link:"https://github.com/nhtoshiaki/LocStat"})),o.a.createElement("li",null,o.a.createElement(k,{title:"GitView",desc:"A data visualization tool for Git repositories.",longDesc:"A tool that uses information visualization techniques to represent changes made to each version of projects that uses Git as version control system. This tool was developed using JavaScript, Node.js, Electron, D3, HTML and SASS/CSS.",link:"https://github.com/nhtoshiaki/GitView"})),o.a.createElement("li",null,o.a.createElement(k,{title:"vis-tagcloud",desc:"A data visualization tool for keywords of co-authored articles.",longDesc:"A webapp tool that uses Tag Cloud and a Graph based visualization technique to represent the most relevant keywords from co-authored articles published by researchers. This tool was developed using PHP, HTML, JavaScript, D3, jQuery/AJAX, HTML, SASS/CSS and MySQL.",link:"https://github.com/nhtoshiaki/vis-tagcloud"})),o.a.createElement("li",null,o.a.createElement(k,{title:"Simpleton",desc:"A virtual machine that evaluates simple arithmetic expressions.",longDesc:"A simple virtual machine that evaluates basic arithmetic expressions and performs basic memory read and write operations. This simple virtual machine was developed using C++ and GNU Make.",link:"https://github.com/nhtoshiaki/Simpleton"})),o.a.createElement("li",null,o.a.createElement(k,{title:"n-hub (mockup)",desc:"A mockup of an aggregator.",longDesc:"A mockup of an aggregator that gathers email, chat, calendar and news feed. This mockup was developed using JavaScript, Node.js, Electron, HTML and SASS/CSS.",link:"https://github.com/nhtoshiaki/n-hub"}))))}}]),t}(n.Component),j=(a(91),a(13)),y=a(36);f.b.add(N.b);var w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).draw=e.draw.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.color=j.c().domain([0,100]).range(["black","#333333","#4b5151","#58A8D5","#256c94"]),this.opacity=j.d().exponent(2).domain([0,100]).range([.6,1]);var t=j.d().exponent(4).domain([0,100]).range([20,150]),a=j.e("#skills-content").append("svg").attr("width","500px").attr("height","500px").append("g");this.wordcloud=a.append("g").attr("class","wordcloud").attr("transform","translate(250,250)"),j.b("/resources/skills.json").then(function(a){y().size([500,500]).words(a).timeInterval(20).rotate(function(){return 90*~~(2*Math.random())}).fontSize(function(e){return t(e.level)}).fontWeight(["bold"]).padding(3).text(function(e){return e.skill}).spiral("archimedean").on("end",function(t){return e.draw(t)}).start()})}},{key:"draw",value:function(e){var t=this;this.wordcloud.selectAll("text").data(e).enter().append("text").attr("class","word").style("fill",function(e){return t.color(e.level)}).style("font-size",function(e){return e.size+"px"}).style("font-family","Montserrat").style("font-weight","bold").style("cursor","pointer").style("opacity",function(e){return t.opacity(e.level)}).attr("text-anchor","middle").attr("transform",function(e){return"translate("+e.x+","+e.y+")rotate("+e.rotate+")"}).text(function(e){return e.text}).on("mouseover",this.handleMouseOver).on("mouseout",this.handleMouseOut)}},{key:"handleMouseOver",value:function(e,t){j.e(this).transition().duration(500).ease(j.a).style("font-size",function(e){return 1.5*e.size+"px"})}},{key:"handleMouseOut",value:function(e,t){j.e(this).transition().duration(800).ease(j.a).style("font-size",function(e){return e.size+"px"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Skills"},o.a.createElement("h1",null,o.a.createElement("span",{className:"header-icons"},o.a.createElement(v.a,{icon:N.b}))," Skills"),o.a.createElement("div",{id:"skills-content"}," "))}}]),t}(n.Component),S=(a(96),a(101),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Card"},o.a.createElement("h2",{className:"header dark-bg"},this.props.headerText),o.a.createElement("div",{className:"content"},this.props.children))}}]),t}(n.Component));f.b.add(N.d),f.b.add(N.a);var M=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Academic"},o.a.createElement("h1",null,o.a.createElement("span",{className:"header-icons"},o.a.createElement(v.a,{icon:N.a}))," Experience & Education"),o.a.createElement("div",{className:"historic"},o.a.createElement(S,{headerText:"2019 - current"},o.a.createElement("span",{className:"qualification"},"Software Developer"),o.a.createElement("span",{className:"institution"},"Sweda Inform\xe1tica"),o.a.createElement("span",{className:"location"},"SP, Brazil")),o.a.createElement(S,{headerText:"2013 - 2018"},o.a.createElement("span",{className:"qualification"},"Bachelor of Computer Science"),o.a.createElement("span",{className:"institution"},"Faculdade de Ci\xeancias e Tecnologia - UNESP"),o.a.createElement("span",{className:"location"},"SP, Brazil")),o.a.createElement(S,{headerText:"2010 - 2011"},o.a.createElement("span",{className:"qualification"},"Electronics Technician"),o.a.createElement("span",{className:"institution"},"ETEC Julio de Mesquita"),o.a.createElement("span",{className:"location"},"SP, Brazil"))))}}]),t}(n.Component);a(106),a(111);f.b.add(g.b),f.b.add(N.c),f.b.add(g.a);var C=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t,a;return a=this.props.text?this.props.text:this.props.link,"github"===this.props.icon?e=g.b:"email"===this.props.icon?e=N.c:"codepen"===this.props.icon&&(e=g.a),"blue"===this.props.color?t={backgroundColor:"#004fb0",color:"#EFEFEF"}:"cyan"===this.props.color?t={backgroundColor:"darkcyan",color:"#EFEFEF"}:"purple"===this.props.color&&(t={backgroundColor:"#55557f",color:"#EFEFEF"}),o.a.createElement("div",{className:"IconizedLink"},o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:"icon",style:t},o.a.createElement(v.a,{icon:e,className:"svg-icon"})),o.a.createElement("span",{className:"link",style:t},a)))}}]),t}(n.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Footer dark-bg"},o.a.createElement("div",{className:"footer-text"},o.a.createElement("p",null,"This webpage was developed with React and styled from scratch with Sass. See the source code ",o.a.createElement("a",{href:"https://github.com/nhtoshiaki/nhtoshiaki.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),".")),o.a.createElement("div",{className:"contact-links"},o.a.createElement(C,{icon:"email",link:"mailto:nicolau.hiramoto@gmail.com",text:"nicolau.hiramoto@gmail.com",color:"purple"}),o.a.createElement(C,{icon:"github",link:"https://github.com/nhtoshiaki",text:"Github",color:"blue"}),o.a.createElement(C,{icon:"codepen",link:"https://codepen.io/nhtoshiaki/",text:"Codepen.io",color:"cyan"})))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleNavItemMouseEnter=e.handleNavItemMouseEnter.bind(Object(d.a)(Object(d.a)(e))),e.handleNavItemMouseOut=e.handleNavItemMouseOut.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({navBtnWidth:p()(".navbar a").css("width")})}},{key:"handleNavItemMouseEnter",value:function(e){p()(e.target).clearQueue(),p()(e.target).animate({width:p()(e.target).get(0).scrollWidth},300,function(){p()(e.target).width("auto")})}},{key:"handleNavItemMouseOut",value:function(e){p()(e.target).animate({width:this.state.navBtnWidth},300)}},{key:"render",value:function(){return o.a.createElement("div",{id:"layout-container"},o.a.createElement("nav",{className:"navbar"},o.a.createElement("ul",{className:"bubbles"},o.a.createElement("li",null,o.a.createElement("a",{href:"#introduction",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Introduction")),o.a.createElement("li",null,o.a.createElement("a",{href:"#experience",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Experience")),o.a.createElement("li",null,o.a.createElement("a",{href:"#portfolio",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Portfolio")),o.a.createElement("li",null,o.a.createElement("a",{href:"#skills",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Skills")),o.a.createElement("li",null,o.a.createElement("a",{href:"#footer",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Contact")))),o.a.createElement("section",{id:"introduction",className:"section"},o.a.createElement(E,null)),o.a.createElement("section",{id:"experience",className:"section"},o.a.createElement(M,null)),o.a.createElement("section",{id:"portfolio",className:"section"},o.a.createElement(O,null)),o.a.createElement("section",{id:"skills",className:"section"},o.a.createElement(w,null)),o.a.createElement("section",{id:"footer",className:"section"},o.a.createElement(x,null)))}}]),t}(n.Component),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(I,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){e.exports=a(113)},57:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},91:function(e,t,a){},96:function(e,t,a){}},[[52,2,1]]]);
//# sourceMappingURL=main.baf895a9.chunk.js.map