(this["webpackJsonppath-algorithm-visualizer"]=this["webpackJsonppath-algorithm-visualizer"]||[]).push([[0],{39:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),s=a.n(r),o=(a(44),a(45),a(46),a(6)),l=a(7),c=a(11),u=a(10),d=a(16),h=a(12),v=a(23),g=a(28),f=a(38),m=a(27),p=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g.a,{expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(g.a.Brand,{href:"."},"Pathfinding Algorithm Visualizer"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:"mr-auto"},i.a.createElement(m.a,{title:"Algorithms",id:"basic-nav-dropdown",className:"my-dropdown"},i.a.createElement(m.a.Item,{href:"#",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("Dijkstra")}},"Djikstra's"),i.a.createElement(m.a.Item,{href:"#",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("BFS")}},"BFS"),i.a.createElement(m.a.Item,{href:"#",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("DFS")}},"DFS")),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.clearBoard},"Clear Board"),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.changeWeights},"New Weights"),i.a.createElement(v.a,{className:"visualize-it-button",onClick:this.props.visualize},"Visualize It!")))))}}]),t}(n.Component)),b=(a(54),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.row,n=(e.isEnd,e.isStart,e.isVisited,e.isWall,e.onMouseDown),r=e.onMouseEnter,s=e.onMouseUp,o=e.weight;return i.a.createElement("div",{className:"node-box"},i.a.createElement("div",{id:"node-".concat(a,"-").concat(t),className:"node ".concat(y(this.props)),onMouseDown:function(){return n(a,t)},onMouseEnter:function(){return r(a,t)},onMouseUp:function(){return s()}},i.a.createElement("p",null,o)))}}]),t}(n.Component)),y=function(e){return e.isEnd?"node-end":e.isStart?"node-start":e.isWall?"node-wall":" "},w=function(){function e(){Object(o.a)(this,e),this.visitedSpeed=10,this.shortestSpeed=50}return Object(l.a)(e,[{key:"animate",value:function(e,t){for(var a=this,n=function(n){if(n===e.length)return setTimeout((function(){a.animateShortestPath(t)}),10*n),{v:void 0};setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),a.visitedSpeed*n)},i=0;i<=e.length;i++){var r=n(i);if("object"===typeof r)return r.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,a=function(a){setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path"}),t.shortestSpeed*a)},n=0;n<e.length;n++)a(n)}},{key:"updateSpeed",value:function(e,t){this.visitedSpeed=e,this.shortestSpeed=t}}]),e}(),S=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getUnvisitedNeighbors",value:function(e,t){var a=[],n=e.col,i=e.row;return i>0&&a.push(t[i-1][n]),i<t.length-1&&a.push(t[i+1][n]),n>0&&a.push(t[i][n-1]),n<t[0].length-1&&a.push(t[i][n+1]),(a=a.filter((function(e){return!e.isVisited}))).filter((function(e){return!e.isWall}))}},{key:"getShortestPath",value:function(e,t){for(var a=[],n=t;null!==n&&n!==e;)a.unshift(n),n=n.previous;return a.unshift(e),a}},{key:"getAllNodes",value:function(e){for(var t=[],a=0;a<20;a++)for(var n=0;n<50;n++)e[a][n].isVisited||e[a][n].isWall||t.push(e[a][n]);return t}}]),e}(),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[];t.distance=0,t.weight=0;for(var i=this.getAllNodes(e);0!==i.length;){this.sortNodesByDistance(i);var r=i.shift();if(r.distance===1/0)return n;if(r.isVisited=!0,n.push(r),r===a)return n;var s=this.getUnvisitedNeighbors(r,e),o=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var h=u.value,v=r.distance+h.weight;v<h.distance&&(h.distance=v,h.previous=r)}}catch(g){l=!0,c=g}finally{try{o||null==d.return||d.return()}finally{if(l)throw c}}}}},{key:"sortNodesByDistance",value:function(e){e.sort((function(e,t){return e.distance-t.distance}))}}]),t}(S);E.weighted=!0;var k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=[];for(t.isVisted=!0,t.previous=null,n.push(t),i.push(t);0!==n.length;){var r=n.shift();if(r===a)return i;var s=this.getUnvisitedNeighbors(r,e),o=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var h=u.value;h.isVisited=!0,h.previous=r,n.push(h),i.push(h)}}catch(v){l=!0,c=v}finally{try{o||null==d.return||d.return()}finally{if(l)throw c}}}return i}}]),t}(S);k.weighted=!1;var j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=[];for(t.isVisted=!0,t.previous=null,n.push(t),i.push(t);0!==n.length;){var r=n.pop();if(r===a)return i;i.push(r);var s=this.getUnvisitedNeighbors(r,e),o=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var h=u.value;h.isVisited=!0,h.previous=r,n.push(h)}}catch(v){l=!0,c=v}finally{try{o||null==d.return||d.return()}finally{if(l)throw c}}}return i}}]),t}(S);j.weighted=!1;var O=function(){function e(t,a,n){Object(o.a)(this,e),this.grid=this.initializeGrid(t,a,n)}return Object(l.a)(e,[{key:"initializeNode",value:function(e,t,a,n,i){var r="0";return a&&(r=Math.floor(5*Math.random())+1),{col:t,row:e,isEnd:e===i[0]&&t===i[1],isStart:e===n[0]&&t===n[1],isVisited:!1,isWall:!1,distance:1/0,previous:null,weight:r}}},{key:"initializeGrid",value:function(e,t,a){for(var n=[],i=0;i<20;i++){for(var r=[],s=0;s<50;s++)r.push(this.initializeNode(i,s,e,t,a));n.push(r)}return n}},{key:"toggleStart",value:function(e,t){this.grid[e][t].isStart=!this.grid[e][t].isStart,this.grid[e][t].isWall=!1}},{key:"toggleEnd",value:function(e,t){this.grid[e][t].isEnd=!this.grid[e][t].isEnd,this.grid[e][t].isWall=!1}},{key:"toggleWall",value:function(e,t){this.grid[e][t].isWall=!this.grid[e][t].isWall}}]),e}(),W=(a(55),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={algo:E,algoText:"Dijkstra's",speed:"fast",grid:new O(E.weighted,[9,9],[9,39]),mouseIsPressed:!1,animator:new w,visualize:!1,start:[9,9],prevStart:null,end:[9,39],prevEnd:null,movingStart:!1,movingEnd:!1},a.visualize=a.visualize.bind(Object(d.a)(a)),a.speedChange=a.speedChange.bind(Object(d.a)(a)),a.algoChange=a.algoChange.bind(Object(d.a)(a)),a.clearBoard=a.clearBoard.bind(Object(d.a)(a)),a.newWeights=a.newWeights.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleMouseDown",value:function(e,t){var a=this.state,n=a.grid,i=a.start,r=(a.prevStart,a.end);a.movingStart;e===i[0]&&t===i[1]?this.setState({movingStart:!0}):e===r[0]&&t===r[1]?this.setState({movingEnd:!0}):n.toggleWall(e,t),this.setState({grid:n,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(e,t){var a=this.state,n=a.grid,i=a.start,r=a.end,s=a.mouseIsPressed,o=a.movingStart,l=a.movingEnd;a.prevStart;s&&(o?(n.toggleStart(e,t),n.toggleStart(i[0],i[1]),this.setState({start:[e,t],movingStart:!0})):l?(n.toggleEnd(e,t),n.toggleEnd(r[0],r[1]),this.setState({end:[e,t],movingEnd:!0})):n.toggleWall(e,t),this.setState({grid:n}))}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1,movingStart:!1,movingEnd:!1})}},{key:"algoChange",value:function(e){this.clearBoard(!1);var t=null,a=null,n=null,i=this.state,r=i.grid,s=i.start,o=i.end;switch(e){case"Dijkstra":t=E,a="Dijkstra's",n=new O(E.weighted,s,o);break;case"BFS":t=k,a="Breadth-First Search",n=new O(k.weighted,s,o);break;case"DFS":t=j,a="Depth-First Search",n=new O(j.weighted,s,o);break;default:return}n=this.keepWalls(r,n),this.setState({algo:t,algoText:a,grid:n})}},{key:"speedChange",value:function(e){var t=[0,0],a=t.visitedSpeed,n=t.shortestSpeed;switch(e){case"slow":a=100,n=500;break;case"average":a=50,n=250;break;case"fast":a=10,n=50;break;default:return}this.state.animator.updateSpeed(a,n)}},{key:"visualize",value:function(){var e=this.state,t=e.grid,a=e.algo,n=e.visualized,i=e.start,r=e.end,s=e.animator;n&&(this.clearBoard(!1),this.setState({visualized:!1}));var o=new a,l=t.grid[i[0]][i[1]],c=t.grid[r[0]][r[1]],u=o.traverse(t.grid,l,c),d=o.getShortestPath(l,c);s.animate(u,d),this.setState({visualized:!0})}},{key:"clearBoard",value:function(e){for(var t=this.state,a=t.grid,n=(t.start,t.end,0);n<20;n++)for(var i=0;i<50;i++){var r=a.grid[n][i];document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node ",r.isVisited=!1,r.previous=null,r.distance=1/0,r.isWall&&e?r.isWall=!1:r.isWall&&(document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node node-wall"),9===n&&9===i&&(document.getElementById("node-".concat(9,"-").concat(9)).className="node node-start",r.isStart=!0),9===n&&39===i&&(document.getElementById("node-".concat(9,"-").concat(39)).className="node node-end",r.isEnd=!0)}this.setState({grid:a,visualized:!1})}},{key:"newWeights",value:function(){this.clearBoard(!1);for(var e=this.state,t=e.grid,a=e.algo,n=e.start,i=e.end,r=new O(a.weighted,n,i),s=0;s<20;s++)for(var o=0;o<50;o++)t.grid[s][o].isWall&&(r.grid[s][o].isWall=!0);this.setState({grid:r})}},{key:"keepWalls",value:function(e,t){for(var a=0;a<20;a++)for(var n=0;n<50;n++)e.grid[a][n].isWall&&(t.grid[a][n].isWall=!0);return t}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed;return i.a.createElement("div",null,i.a.createElement(p,{visualize:this.visualize,changeAlgo:this.algoChange,changeSpeed:this.speedChange,clearBoard:this.clearBoard,changeWeights:this.newWeights}),i.a.createElement("h3",null,"The current algorithm is ",this.state.algoText,"."),i.a.createElement("div",{className:"board"},a.grid.map((function(t,a){return i.a.createElement("div",{key:a},t.map((function(t,a){var r=t.row,s=t.col,o=t.isEnd,l=t.isStart,c=t.isWall,u=t.weight;return i.a.createElement(b,{key:a,col:s,row:r,isEnd:o,isStart:l,isWall:c,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp()},weight:u})})))}))))}}]),t}(n.Component));var N=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement(W,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.bf23d117.chunk.js.map