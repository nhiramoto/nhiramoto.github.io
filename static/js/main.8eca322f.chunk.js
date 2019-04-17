(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(62)},21:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(15),r=a.n(o),i=(a(21),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),h=(a(23),a(9)),d=a(10),p=a.n(d),E=(a(28),a(33),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Introduction"},c.a.createElement("div",{className:"Introduction-container"},c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"name hoverable"},c.a.createElement("span",{className:"long-name"},"Nicolau"),c.a.createElement("span",{className:"short-name"},"N")," ",c.a.createElement("span",{className:"last-name long-name"},"Hiramoto"),c.a.createElement("span",{className:"last-name short-name"},"H")),c.a.createElement("div",{className:"desc hoverable"},"Computer Scientist, Linux enthusiast."))))}}]),t}(n.Component)),b=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Academic"},c.a.createElement("h1",null,"Academic Formation"),c.a.createElement("ul",{className:"historic"},c.a.createElement("li",null,c.a.createElement("span",{className:"years"},"2013 - 2018"),c.a.createElement("span",{className:"qualification"},"Bachelor of Computer Science"),c.a.createElement("span",{className:"institution"},"Faculdade de Ci\xeancias e Tecnologia - UNESP"),c.a.createElement("span",{className:"location"},"SP, Brazil")),c.a.createElement("li",null,c.a.createElement("span",{className:"years"},"2010 - 2011"),c.a.createElement("span",{className:"qualification"},"Electronics Technician"),c.a.createElement("span",{className:"institution"},"ETEC Julio de Mesquita"),c.a.createElement("span",{className:"location"},"SP, Brazil"))))}}]),t}(n.Component)),f=(a(43),a(48),a(7)),v=a(11),N=a(8);f.b.add(N.b);var O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Card"},c.a.createElement("h2",{className:"card-header"},this.props.title),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,this.props.desc),c.a.createElement("span",{className:"btn-group"},c.a.createElement("a",{className:"btn",title:"Source Code",href:"{this.props.link}",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(v.a,{icon:N.b,className:"svg-icon"})))))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Portfolio"},c.a.createElement("h1",null,"Portfolio"),c.a.createElement("ul",{id:"project-list",className:""},c.a.createElement("li",null,c.a.createElement(O,{title:"LocStat",desc:"A Web Scraper that reports the statistics of source code lines from Git repositories.",link:"https://github.com/nhtoshiaki/LocStat"})),c.a.createElement("li",null,c.a.createElement(O,{title:"GitView",desc:"A tool that uses Information Visualization techniques to represent changes made to Git repositories.",link:"https://github.com/nhtoshiaki/GitView"}))))}}]),t}(n.Component),k=(a(55),a(60),a(12));f.b.add(N.b),f.b.add(k.a),f.b.add(N.a);var g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a;return a=this.props.text?this.props.text:this.props.link,"github"===this.props.icon?e=N.b:"email"===this.props.icon?e=k.a:"codepen"===this.props.icon&&(e=N.a),"blue"===this.props.color?t={backgroundColor:"#004fb0",color:"#EFEFEF"}:"cyan"===this.props.color?t={backgroundColor:"darkcyan",color:"#EFEFEF"}:"purple"===this.props.color&&(t={backgroundColor:"#55557f",color:"#EFEFEF"}),c.a.createElement("div",{className:"IconizedLink"},c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("span",{className:"icon",style:t},c.a.createElement(v.a,{icon:e,className:"svg-icon"})),c.a.createElement("span",{className:"link",style:t},a)))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("div",{className:"footer-text"},c.a.createElement("p",null,"This webpage was developed with React and stylized from scratch with Sass. See the source code ",c.a.createElement("a",{href:"https://github.com/nhtoshiaki/nhtoshiaki.github.io",target:"_blank",rel:"noopener noreferrer"},"here"),".")),c.a.createElement("div",{className:"contact-links"},c.a.createElement(g,{icon:"email",link:"mailto:nicolau.hiramoto@gmail.com",text:"nicolau.hiramoto@gmail.com",color:"purple"}),c.a.createElement(g,{icon:"github",link:"https://github.com/nhtoshiaki",text:"Github",color:"blue"}),c.a.createElement(g,{icon:"codepen",link:"https://codepen.io/nhtoshiaki/",text:"Codepen.io",color:"cyan"})))}}]),t}(n.Component),M=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleNavItemMouseEnter=e.handleNavItemMouseEnter.bind(Object(h.a)(Object(h.a)(e))),e.handleNavItemMouseOut=e.handleNavItemMouseOut.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({navBtnWidth:p()(".navbar a").css("width")})}},{key:"handleNavItemMouseEnter",value:function(e){p()(e.target).clearQueue(),p()(e.target).animate({width:p()(e.target).get(0).scrollWidth},300,function(){p()(e.target).width("auto")})}},{key:"handleNavItemMouseOut",value:function(e){p()(e.target).animate({width:this.state.navBtnWidth},300)}},{key:"render",value:function(){return c.a.createElement("div",{id:"layout-container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"bubbles"},c.a.createElement("li",null,c.a.createElement("a",{href:"#introduction",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Introduction")),c.a.createElement("li",null,c.a.createElement("a",{href:"#academic",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Academic")),c.a.createElement("li",null,c.a.createElement("a",{href:"#portfolio",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Portfolio")),c.a.createElement("li",null,c.a.createElement("a",{href:"#footer",onMouseEnter:this.handleNavItemMouseEnter,onMouseOut:this.handleNavItemMouseOut},"Contact")))),c.a.createElement("section",{id:"introduction",className:"section"},c.a.createElement(E,null)),c.a.createElement("section",{id:"academic",className:"section"},c.a.createElement(b,null)),c.a.createElement("section",{id:"portfolio",className:"section"},c.a.createElement(j,null)),c.a.createElement("section",{id:"footer",className:"section"},c.a.createElement(y,null)))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(M,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.8eca322f.chunk.js.map