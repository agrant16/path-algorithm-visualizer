(this["webpackJsonppath-algorithm-visualizer"]=this["webpackJsonppath-algorithm-visualizer"]||[]).push([[0],{39:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),s=a.n(r),o=(a(44),a(45),a(46),a(6)),c=a(7),l=a(12),u=a(10),d=a(16),h=a(13),v=a(23),g=a(27),f=a(38),m=a(33),p=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g.a,{expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(g.a.Brand,{href:"."},"Pathfinding Algorithm Visualizer"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:"mr-auto"},i.a.createElement(m.a,{title:"Algorithms",id:"basic-nav-dropdown",className:"my-dropdown"},i.a.createElement(m.a.Item,{href:"#",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("Dijkstra")}},"Djikstra's"),i.a.createElement(m.a.Item,{href:"#",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("BFS")}},"BFS")),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.clearBoard},"Clear Board"),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.changeWeights},"New Weights"),i.a.createElement(v.a,{className:"visualize-it-button",onClick:this.props.visualize},"Visualize It!")))))}}]),t}(n.Component)),b=(a(54),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.row,n=(e.isEnd,e.isStart,e.isVisited,e.isWall,e.onMouseDown),r=e.onMouseEnter,s=e.onMouseUp,o=e.weight;return i.a.createElement("div",{id:"node-".concat(a,"-").concat(t),className:"node ".concat(w(this.props)),onMouseDown:function(){return n(a,t)},onMouseEnter:function(){return r(a,t)},onMouseUp:function(){return s()}},o)}}]),t}(n.Component)),w=function(e){return e.isEnd?"node-end":e.isStart?"node-start":e.isWall?"node-wall":" "},y=function(){function e(){Object(o.a)(this,e),this.visitedSpeed=10,this.shortestSpeed=50}return Object(c.a)(e,[{key:"animate",value:function(e,t){for(var a=this,n=function(n){if(n===e.length)return setTimeout((function(){a.animateShortestPath(t)}),10*n),{v:void 0};setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),a.visitedSpeed*n)},i=0;i<=e.length;i++){var r=n(i);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,a=function(a){setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path"}),t.shortestSpeed*a)},n=0;n<e.length;n++)a(n)}},{key:"updateSpeed",value:function(e,t){this.visitedSpeed=e,this.shortestSpeed=t}}]),e}(),k=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"getUnvisitedNeighbors",value:function(e,t){var a=[],n=e.col,i=e.row;return i>0&&a.push(t[i-1][n]),i<t.length-1&&a.push(t[i+1][n]),n>0&&a.push(t[i][n-1]),n<t[0].length-1&&a.push(t[i][n+1]),(a=a.filter((function(e){return!e.isVisited}))).filter((function(e){return!e.isWall}))}},{key:"getShortestPath",value:function(e,t){for(var a=[],n=t;n!==e;)a.unshift(n),n=n.previous;return a.unshift(e),a}}]),e}(),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"traverse",value:function(e,t,a){var n=[];t.distance=0,t.weight=0;for(var i=this.getAllNodes(e);0!==i.length;){this.sortNodesByDistance(i);var r=i.shift();if(r.distance===1/0)return n;if(r.isVisited=!0,n.push(r),r===a)return n;var s=this.getUnvisitedNeighbors(r,e),o=!0,c=!1,l=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var h=u.value,v=r.distance+h.weight;v<h.distance&&(h.distance=v,h.previous=r)}}catch(g){c=!0,l=g}finally{try{o||null==d.return||d.return()}finally{if(c)throw l}}}}},{key:"getAllNodes",value:function(e){for(var t=[],a=0;a<20;a++)for(var n=0;n<50;n++)e[a][n].isVisited||e[a][n].isWall||t.push(e[a][n]);return t}},{key:"sortNodesByDistance",value:function(e){e.sort((function(e,t){return e.distance-t.distance}))}}]),t}(k);j.weighted=!0;var E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=[];for(t.isVisted=!0,t.previous=null,n.push(t),i.push(t);0!==n.length;){var r=n.shift();if(r===a)return i;var s=this.getUnvisitedNeighbors(r,e),o=!0,c=!1,l=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var h=u.value;h.isVisited=!0,h.previous=r,n.push(h),i.push(h)}}catch(v){c=!0,l=v}finally{try{o||null==d.return||d.return()}finally{if(c)throw l}}}}}]),t}(k);E.weighted=!1;var O=function(){function e(t){Object(o.a)(this,e),this.grid=this.initializeGrid(t)}return Object(c.a)(e,[{key:"initializeNode",value:function(e,t,a){var n="-";return a&&(n=Math.floor(5*Math.random())+1),{col:t,row:e,isEnd:9===e&&39===t,isStart:9===e&&9===t,isVisited:!1,isWall:!1,distance:1/0,previous:null,weight:n}}},{key:"initializeGrid",value:function(e){for(var t=[],a=0;a<20;a++){for(var n=[],i=0;i<50;i++)n.push(this.initializeNode(a,i,e));t.push(n)}return t}},{key:"toggleWall",value:function(e,t){this.grid[e][t].isWall=!this.grid[e][t].isWall,this.grid[e][t].isVisited=!this.grid[e][t].isVisited}}]),e}(),S=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={algo:j,algoText:"Dijkstra's",speed:"fast",grid:new O(j.weighted),mouseIsPressed:!1,animator:new y,visualize:!1},a.visualize=a.visualize.bind(Object(d.a)(a)),a.speedChange=a.speedChange.bind(Object(d.a)(a)),a.algoChange=a.algoChange.bind(Object(d.a)(a)),a.clearBoard=a.clearBoard.bind(Object(d.a)(a)),a.newWeights=a.newWeights.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleMouseDown",value:function(e,t){this.state.grid.toggleWall(e,t),this.setState({mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){this.state.mouseIsPressed&&(this.state.grid.toggleWall(e,t),this.setState({mouseIsPressed:!0}))}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"algoChange",value:function(e){this.clearBoard();var t=this.state,a=t.algo,n=t.algoText,i=t.grid;switch(e){case"Dijkstra":n="Dijkstra's",i=new O((a=j).weighted);break;case"BFS":n="Breadth-First Search",i=new O((a=E).weighted);break;default:return}this.setState({algo:a,algoText:n,grid:i})}},{key:"speedChange",value:function(e){var t=[0,0],a=t.visitedSpeed,n=t.shortestSpeed;switch(e){case"slow":a=100,n=500;break;case"average":a=50,n=250;break;case"fast":a=10,n=50;break;default:return}this.state.animator.updateSpeed(a,n)}},{key:"visualize",value:function(){var e=this.state,t=e.grid,a=e.algo;e.visualized&&(this.clearBoard(),this.setState({visualized:!1}));var n=new a,i=t.grid[9][9],r=t.grid[9][39],s=n.traverse(t.grid,i,r);console.log(s.map((function(e){return e.previous})));var o=n.getShortestPath(i,r);console.log(o),this.state.animator.animate(s,o),this.setState({visualized:!0})}},{key:"clearBoard",value:function(){for(var e=this.state.grid,t=0;t<20;t++)for(var a=0;a<50;a++){var n=e.grid[t][a];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node ",n.isWall=!1,n.isVisited=!1,n.previous=null,n.distance=1/0,9===t&&9===a&&(document.getElementById("node-".concat(9,"-").concat(9)).className="node node-start",n.isStart=!0),9===t&&39===a&&(document.getElementById("node-".concat(9,"-").concat(39)).className="node node-end",n.isEnd=!0)}this.setState({visualized:!1})}},{key:"newWeights",value:function(){this.clearBoard();var e=this.state.algo,t=new O(e.weighted);this.setState({grid:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed;return i.a.createElement("div",null,i.a.createElement(p,{visualize:this.visualize,changeAlgo:this.algoChange,changeSpeed:this.speedChange,clearBoard:this.clearBoard,changeWeights:this.newWeights}),i.a.createElement("h3",null,"The current algorithm is ",this.state.algoText,"."),i.a.createElement("div",{className:"board"},a.grid.map((function(t,a){return i.a.createElement("div",{key:a},t.map((function(t,a){var r=t.row,s=t.col,o=t.isEnd,c=t.isStart,l=t.isWall,u=t.weight;return i.a.createElement(b,{key:a,col:s,row:r,isEnd:o,isStart:c,isWall:l,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp()},weight:u})})))}))))}}]),t}(n.Component));var N=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.4449bac6.chunk.js.map