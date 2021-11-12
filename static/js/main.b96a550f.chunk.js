(this["webpackJsonppath-algorithm-visualizer"]=this["webpackJsonppath-algorithm-visualizer"]||[]).push([[0],{39:function(e,t,a){e.exports=a(56)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(20),r=a.n(s),o=(a(44),a(45),a(46),a(6)),l=a(7),d=a(11),c=a(10),u=a(15),h=a(12),v=a(24),g=a(28),f=a(38),m=a(13),p=(a(47),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g.a,{expand:"lg",bg:"dark",variant:"dark"},i.a.createElement(g.a.Brand,{href:"."},"Pathfinding Algorithm Visualizer"),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{className:"mr-auto"},i.a.createElement(m.a,{title:"Algorithms",id:"basic-nav-dropdown",disabled:this.props.visualized},i.a.createElement(m.a.Item,{href:"#dijkstra",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("Dijkstra")}},"Djikstra's"),i.a.createElement(m.a.Item,{href:"#bellman-ford",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("Bellman-Ford")}},"Bellman-Ford"),i.a.createElement(m.a.Item,{href:"#bfs",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("BFS")}},"BFS"),i.a.createElement(m.a.Item,{href:"#dfs",className:"my-dropdown-item",onClick:function(){return e.props.changeAlgo("DFS")}},"DFS")),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.changeWeights,disabled:this.props.visualized},"New Weights"),i.a.createElement(v.a,{className:"visualize-it-button",onClick:this.props.visualize,disabled:this.props.visualized},"Visualize It!"),i.a.createElement(v.a,{className:"non-visualize-button",onClick:this.props.clearBoard,disabled:this.props.visualized},"Clear Board"),i.a.createElement(m.a,{title:"Maze Algorithms",id:"basic-nav-dropdown",className:"my-dropdown",disabled:this.props.visualized},i.a.createElement(m.a.Item,{href:"#random",className:"my-dropdown-item",onClick:function(){e.props.generateMaze("Random")}},"Random Walls"),i.a.createElement(m.a.Item,{href:"#recursive-division",className:"my-dropdown-item",onClick:function(){e.props.generateMaze("RecursiveDivision")}},"Recursive Division")),i.a.createElement(m.a,{title:"Speed",id:"basic-nav-dropdown",className:"my-dropdown",disabled:this.props.visualized},i.a.createElement(m.a.Item,{href:"#slow",className:"my-dropdown-item",onClick:function(){e.props.changeSpeed("Slow")}},"Slow"),i.a.createElement(m.a.Item,{href:"#average",className:"my-dropdown-item",onClick:function(){e.props.changeSpeed("Average")}},"Average"),i.a.createElement(m.a.Item,{href:"#fast",className:"my-dropdown-item",onClick:function(){e.props.changeSpeed("Fast")}},"Fast"))))))}}]),t}(n.Component)),w=(a(54),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).nodeType=function(e){return e.isEnd?"node-end":e.isStart?"node-start":e.isWall?"node-wall":" "},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.col,a=e.row,n=(e.isEnd,e.isStart,e.isVisited,e.isWall,e.onMouseDown),s=e.onMouseEnter,r=e.onMouseUp,o=e.weight;return i.a.createElement("div",{className:"node-box"},i.a.createElement("div",{id:"node-".concat(a,"-").concat(t),className:"node ".concat(this.nodeType(this.props)),onMouseDown:function(){return n(a,t)},onMouseEnter:function(){return s(a,t)},onMouseUp:function(){return r()}},i.a.createElement("p",null,o)))}}]),t}(n.Component)),b=function(){function e(){Object(o.a)(this,e),this.visitedSpeed=10,this.shortestSpeed=50}return Object(l.a)(e,[{key:"animate",value:function(e,t){for(var a=this,n=function(n){if(n===e.length)return setTimeout((function(){a.animateShortestPath(t)}),a.visitedSpeed*n),{v:void 0};setTimeout((function(){var t=e[n];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-visited"}),a.visitedSpeed*n)},i=0;i<=e.length;i++){var s=n(i);if("object"===typeof s)return s.v}}},{key:"animateShortestPath",value:function(e){for(var t=this,a=function(a){setTimeout((function(){var t=e[a];document.getElementById("node-".concat(t.row,"-").concat(t.col)).className="node node-shortest-path"}),t.shortestSpeed*a)},n=0;n<e.length;n++)a(n)}},{key:"updateSpeed",value:function(e,t){this.visitedSpeed=e,this.shortestSpeed=t}}]),e}(),y=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"getUnvisitedNeighbors",value:function(e,t){var a=[],n=e.col,i=e.row;return i>0&&a.push(t[i-1][n]),i<t.length-1&&a.push(t[i+1][n]),n>0&&a.push(t[i][n-1]),n<t[0].length-1&&a.push(t[i][n+1]),(a=a.filter((function(e){return!e.isVisited}))).filter((function(e){return!e.isWall}))}},{key:"getShortestPath",value:function(e,t){for(var a=[],n=t;null!==n&&n!==e;)a.unshift(n),n=n.previous;return a.unshift(e),a}},{key:"getAllNodes",value:function(e){for(var t=[],a=0;a<19;a++)for(var n=0;n<49;n++)e[a][n].isVisited||e[a][n].isWall||t.push(e[a][n]);return t}}]),e}();y._time=12.5;var k=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[];t.distance=0,t.weight=0;for(var i=this.getAllNodes(e);0!==i.length;){this.sortNodesByDistance(i);var s=i.shift();if(s.distance===1/0)return n;if(s.isVisited=!0,n.push(s),s===a)return n;var r=this.getUnvisitedNeighbors(s,e),o=!0,l=!1,d=void 0;try{for(var c,u=r[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value,v=s.distance+h.weight;v<h.distance&&(h.distance=v,h.previous=s)}}catch(g){l=!0,d=g}finally{try{o||null==u.return||u.return()}finally{if(l)throw d}}}}},{key:"sortNodesByDistance",value:function(e){e.sort((function(e,t){return e.distance-t.distance}))}}]),t}(y);k.weighted=!0,k.text="Dijkstra's shortest path algorithm works on weighted graphs and\nguarantees the shortest path. This algorithm works similarly to breadth-first\nsearch in that it begins at the start node and then works it's way outward in\nall directions. As it works outwards it checks the edges (u,v,w) to see if\nu.distance + w is less than v.distance. If so it updates v.distance to hold\nu.distance + w. It continues this process until no more nodes can be visited,\nor until the destination node is found.";var S=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=[];for(t.isVisted=!0,t.previous=null,n.push(t),i.push(t);0!==n.length;){var s=n.shift();if(s===a)return i;var r=this.getUnvisitedNeighbors(s,e),o=!0,l=!1,d=void 0;try{for(var c,u=r[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value;h.isVisited=!0,h.previous=s,n.push(h),i.push(h)}}catch(v){l=!0,d=v}finally{try{o||null==u.return||u.return()}finally{if(l)throw d}}}return i}}]),t}(y);S.weighted=!1,S.text="Breadth-first search works on unweighted graphs and\n  guarantees the shortest path. This algorithm works by beginning at the\n  starting node and visiting each of its neighbors. It then moves to\n  each neighbor and visits any of its unvisited neighbors. It repeats this\n  process spreading out across the graph until all nodes that can be visited\n  have been, or until we reach the destination node.";var E=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=[];for(t.isVisted=!0,t.previous=null,n.push(t),i.push(t);0!==n.length;){var s=n.pop();if(s===a)return i;s.isVisited=!0,i.push(s);var r=this.getUnvisitedNeighbors(s,e),o=!0,l=!1,d=void 0;try{for(var c,u=r[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value;h.previous=s,n.push(h)}}catch(v){l=!0,d=v}finally{try{o||null==u.return||u.return()}finally{if(l)throw d}}}return i}}]),t}(y);E.weighted=!1,E._time=25,E.text="Depth-first search works on unweighted graphs and does not\n  guarantee the shortest path. This algorithm visits one node at a time. At\n  each node it visits it selects an unvisited neighbor and moves to\n  that node. It repeats this process until it reaches a node with no unvisited\n  neighbors. It then backtracks to a node which has unvisited neighbors and\n  moves forward down that path. It repeats this until all nodes that can\n  be visited have been, or until it reaches the destination node.";var j=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"traverse",value:function(e,t,a){var n=[],i=this.getAllNodes(e);t.previous=null,t.distance=0;for(var s=Array(931).fill(!1),r=0;r<930;r++){var o=!0,l=!1,d=void 0;try{for(var c,u=i[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var h=c.value,v=this.getUnvisitedNeighbors(h,e),g=h.row,f=h.col;!s[49*g+f]&&v.length>0&&(n.push(h),s[49*g+f]=!s[49*g+f]);var m=!0,p=!1,w=void 0;try{for(var b,y=v[Symbol.iterator]();!(m=(b=y.next()).done);m=!0){var k=b.value,S=h.distance+k.weight;S<k.distance&&(k.distance=S,k.previous=h)}}catch(E){p=!0,w=E}finally{try{m||null==y.return||y.return()}finally{if(p)throw w}}}}catch(E){l=!0,d=E}finally{try{o||null==u.return||u.return()}finally{if(l)throw d}}}return n}}]),t}(y);function O(e){!function e(t,a,n,i,s,r){if(a){if(i-n<2)return;var o=2*Math.floor(N(s,r)/2);!function(e,t,a,n){for(var i=2*Math.floor(N(t,a)/2)+1,s=2*Math.floor(N(t,a)/2)+1,r=t;r<=a;r++)r!==i&&r!==s&&e.toggleWall(n,r)}(t,n,i,o),e(t,!a,n,i,s,o-1),e(t,!a,n,i,o+1,r)}else{if(r-s<2)return;var l=2*Math.floor(N(n,i)/2);!function(e,t,a,n){for(var i=2*Math.floor(N(t,a)/2)+1,s=2*Math.floor(N(t,a)/2)+1,r=t;r<=a;r++)r!==i&&r!==s&&e.toggleWall(r,n)}(t,s,r,l),e(t,!a,n,l-1,s,r),e(t,!a,l+1,i,s,r)}}(e,!0,1,47,1,17),function(e,t,a){for(var n=0;n<a;n++)if(0===n||n===a-1)for(var i=0;i<t;i++)e.grid[n][i].isWall||e.toggleWall(n,i);else e.grid[n][0].isWall||e.toggleWall(n,0),e.grid[n][t-1].isWall||e.toggleWall(n,t-1)}(e,49,19)}function N(e,t){return Math.floor(Math.random()*(t-e+1)+e)}j.weighted=!0,j.text='Bellman-Ford\'s works on weighted graphs and guarantees\n  the shortest path. This algorithm works by iterating |V| - 1 times over\n  all edges in the graph. For each edge (u,v,w) it "relaxes" the edge\n  by checking to see if u.distance + w is less than v.distance.\n  If so, then v.distance is updated to hold u.distance + w. After |V| - 1\n  interations we will know the shortest path from the start node to the end node.\n  For this visualization I consider a node visited the first time an edge\n  including the node is looked at. In this manner any node with no edges, i.e\n  a single node surrounded by walls, is never visited.';var z=function(){function e(t,a,n){Object(o.a)(this,e),this.grid=this.initializeGrid(t,a,n)}return Object(l.a)(e,[{key:"initializeNode",value:function(e,t,a,n,i){var s="0";return a&&(s=Math.floor(9*Math.random())+1),{col:t,row:e,isEnd:e===i[0]&&t===i[1],isStart:e===n[0]&&t===n[1],isVisited:!1,isWall:!1,distance:1/0,previous:null,weight:s}}},{key:"initializeGrid",value:function(e,t,a){for(var n=[],i=0;i<19;i++){for(var s=[],r=0;r<49;r++)s.push(this.initializeNode(i,r,e,t,a));n.push(s)}return n}},{key:"toggleStart",value:function(e,t){this.grid[e][t].isStart=!this.grid[e][t].isStart}},{key:"toggleEnd",value:function(e,t){this.grid[e][t].isEnd=!this.grid[e][t].isEnd}},{key:"toggleWall",value:function(e,t){this.grid[e][t].isWall=!this.grid[e][t].isWall}}]),e}(),W=(a(55),[9,9]),M=[9,39],I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).state={algo:k,algoText:"Dijkstra's",speed:"Fast",grid:new z(k.weighted,W,M),mouseIsPressed:!1,animator:new b,visualized:!1,start:W,end:M,movingStart:!1,movingEnd:!1},a.visualize=a.visualize.bind(Object(u.a)(a)),a.speedChange=a.speedChange.bind(Object(u.a)(a)),a.algoChange=a.algoChange.bind(Object(u.a)(a)),a.clearBoard=a.clearBoard.bind(Object(u.a)(a)),a.newWeights=a.newWeights.bind(Object(u.a)(a)),a.generateMaze=a.generateMaze.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleMouseDown",value:function(e,t){var a=this.state,n=a.grid,i=a.start,s=a.end;a.visualized||(e===i[0]&&t===i[1]?this.setState({movingStart:!0}):e===s[0]&&t===s[1]?this.setState({movingEnd:!0}):n.toggleWall(e,t),this.setState({grid:n,mouseIsPressed:!0}))}},{key:"handleMouseEnter",value:function(e,t){var a=this.state,n=a.grid,i=a.start,s=a.end,r=a.mouseIsPressed,o=a.movingStart,l=a.movingEnd,d=a.visualized;r&&!d&&(o?(n.toggleStart(e,t),n.toggleStart(i[0],i[1]),this.setState({start:[e,t],movingStart:!0})):l?(n.toggleEnd(e,t),n.toggleEnd(s[0],s[1]),this.setState({end:[e,t],movingEnd:!0})):n.toggleWall(e,t),this.setState({grid:n}))}},{key:"handleMouseUp",value:function(){this.state.visualized||this.setState({mouseIsPressed:!1,movingStart:!1,movingEnd:!1})}},{key:"algoChange",value:function(e){var t=this.state,a=t.grid,n=t.start,i=t.end;if(!t.visualized){var s={};switch(this.unvisitNodes(!1,n,i),e){case"Dijkstra":s.newAlgo=k,s.newAlgoText="Dijkstra's",s.newGrid=new z(k.weighted,n,i);break;case"BFS":s.newAlgo=S,s.newAlgoText="Breadth-First Search",s.newGrid=new z(S.weighted,n,i);break;case"DFS":s.newAlgo=E,s.newAlgoText="Depth-First Search",s.newGrid=new z(E.weighted,n,i);break;case"Bellman-Ford":s.newAlgo=j,s.newAlgoText="Bellman-Ford",s.newGrid=new z(j.weighted,n,i);break;default:return}s.newGrid=this.keepWalls(a,s.newGrid),this.setState({algo:s.newAlgo,algoText:s.newAlgoText,grid:s.newGrid})}}},{key:"speedChange",value:function(e){var t={};switch(e){case"Slow":t.visitedSpeed=75,t.shortestSpeed=375;break;case"Average":t.visitedSpeed=25,t.shortestSpeed=125;break;case"Fast":t.visitedSpeed=10,t.shortestSpeed=50;break;default:return}this.state.animator.updateSpeed(t.visitedSpeed,t.shortestSpeed)}},{key:"visualize",value:function(){var e=this,t=this.state,a=t.grid,n=t.algo,i=t.visualized,s=t.start,r=t.end,o=t.animator;if(!i){this.unvisitNodes(!1,s,r),this.setState({visualized:!0});var l=new n,d=a.grid[s[0]][s[1]],c=a.grid[r[0]][r[1]];d.isWall&&(d.isWall=!d.isWall),c.isWall&&(c.isWall=!c.isWall);var u=l.traverse(a.grid,d,c),h=l.getShortestPath(d,c);o.animate(u,h);var v=u.length*o.visitedSpeed+h.length*o.shortestSpeed;setTimeout((function(){return e.setState({visualized:!1})}),v)}}},{key:"unvisitNodes",value:function(e,t,a){for(var n=this.state.grid,i=0;i<19;i++)for(var s=0;s<49;s++){var r=n.grid[i][s];document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node ",r.isVisited=!1,r.previous=null,r.distance=1/0,e?r.isWall=!1:r.isWall&&(document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node node-wall"),i===t[0]&&s===t[1]&&(document.getElementById("node-".concat(t[0],"-").concat(t[1])).className="node node-start",r.isStart=!0),i===a[0]&&s===a[1]&&(document.getElementById("node-".concat(a[0],"-").concat(a[1])).className="node node-end",r.isEnd=!0)}this.setState({grid:n,visualized:!1})}},{key:"clearBoard",value:function(){this.state.visualized||(this.unvisitNodes(!0,W,M),this.setState({start:W,end:M}))}},{key:"newWeights",value:function(){var e=this.state,t=e.grid,a=e.algo,n=e.start,i=e.end;if(!e.visualized){this.unvisitNodes(!1,n,i);for(var s=new z(a.weighted,n,i),r=0;r<19;r++)for(var o=0;o<49;o++)t.grid[r][o].isWall&&(s.grid[r][o].isWall=!0);this.setState({grid:s})}}},{key:"keepWalls",value:function(e,t){for(var a=0;a<19;a++)for(var n=0;n<49;n++)e.grid[a][n].isWall&&(t.grid[a][n].isWall=!0);return t}},{key:"generateMaze",value:function(e){var t=this.state,a=t.grid,n=t.start,i=t.end;switch(this.unvisitNodes(!0,n,i),e){case"Random":!function(e){for(var t=0;t<19;t++)for(var a=0;a<49;a++){var n=Math.random();!(n<=.1||n>=.85)||e.grid[t][a].isStart||e.grid[t][a].isEnd||e.toggleWall(t,a)}}(a);break;case"RecursiveDivision":O(a);break;default:return}this.setState({grid:a}),this.unvisitNodes(!1,n,i)}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,n=t.mouseIsPressed,s=t.visualized,r=t.algo;return i.a.createElement("div",null,i.a.createElement(p,{visualize:this.visualize,changeAlgo:this.algoChange,changeSpeed:this.speedChange,clearBoard:this.clearBoard,changeWeights:this.newWeights,visualized:s,generateMaze:this.generateMaze}),i.a.createElement("h3",null,"The current algorithm is ",this.state.algoText,"."),i.a.createElement("div",{className:"information"},r.text),i.a.createElement("div",{className:"board"},a.grid.map((function(t,a){return i.a.createElement("div",{key:a},t.map((function(t,a){var s=t.row,r=t.col,o=t.isEnd,l=t.isStart,d=t.isWall,c=t.weight;return i.a.createElement(w,{key:a,col:r,row:s,isEnd:o,isStart:l,isWall:d,mouseIsPressed:n,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseUp:function(){return e.handleMouseUp()},weight:c})})))}))))}}]),t}(n.Component);var A=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"App"},i.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.b96a550f.chunk.js.map
