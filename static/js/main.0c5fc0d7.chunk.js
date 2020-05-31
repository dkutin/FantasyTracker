(this.webpackJsonpfantasytracker=this.webpackJsonpfantasytracker||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),c=t.n(r),s=(t(13),t(1)),o=t(2),m=t(4),i=t(3),u=t(7),p=t.n(u),E=(t(14),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{id:"home"},l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null,"Fantasy Tracker"),l.a.createElement("p",null,"A Yahoo! Fantasy based Application to track and display NBA trends"),l.a.createElement("hr",{className:"intro"})))}}]),t}(n.Component)),d=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{classname:"row"},l.a.createElement("hr",null),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null," Made by Dmitry Kutin ")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null," Check out my ",l.a.createElement("a",{className:"link",href:"https://github.com/dkutin"}," Github ")," ")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"Green: Player performing well. ",l.a.createElement("br",null),"Yellow: Unsure of players performance. ",l.a.createElement("br",null),"Red: Player is under performing. ",l.a.createElement("br",null)))))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data){console.log(this.props.data);var e=this.props.data.players.map((function(e){var a=e.info,t=e.analysis,n="";return n=t[1]>=t[2]?"green":t[1]>=t[4]?"yellow":"red",l.a.createElement("div",{key:a.player_id,className:"six-col player-item"},l.a.createElement("div",{className:"player-image",id:n},l.a.createElement("img",{alt:a.full_name,src:a.image})," ",l.a.createElement("br",null),l.a.createElement("span",{className:"player-name"}," ",a.full_name)),l.a.createElement("div",{className:"player-info"},l.a.createElement("div",{className:"player-analysis"},l.a.createElement("span",{className:"analysis"},"One Week: ",t[1]),l.a.createElement("br",null),l.a.createElement("span",{className:"analysis"},"Two Weeks: ",t[2]),l.a.createElement("br",null),l.a.createElement("span",{className:"analysis"},"One Month: ",t[4]),l.a.createElement("br",null))))}))}return l.a.createElement("section",null,l.a.createElement("div",{className:"featured-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two-col"},l.a.createElement("h2",null,"Top Fantasy Players"),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col"))),l.a.createElement("div",{className:"two-col"},l.a.createElement("h2",null,"Top Fantasy Players in Your League"),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col")),l.a.createElement("div",{className:"three-col"},l.a.createElement("p",null,"3 Col")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,l.a.createElement("h2",null," All Fantasy Players"),e))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={foo:"bar",playerData:{}},n}return Object(o.a)(t,[{key:"getPlayerData",value:function(){p.a.ajax({url:"/playerData.json",dataType:"json",cache:!1,success:function(e){this.setState({data:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getPlayerData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E,null),l.a.createElement(h,{data:this.state.data}),l.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0c5fc0d7.chunk.js.map