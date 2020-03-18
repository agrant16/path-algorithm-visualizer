# Path Algorithm Visualizer

![Gif of Dijkstra's with walls](https://github.com/agrant16/path-algorithm-visualizer/blob/master/path-visualizer-gif.gif)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is built using React.js and Bootstrap through react-bootstrap. 

## Currently Implemented Algorithms
* [Dijkstra's Shortest Path](https://en.wikipedia.org/w/index.php?title=Special:Search&search=Dijkstra%27s+algorithm)
* [Breadth-First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
* [Depth-First Search](https://en.wikipedia.org/wiki/Depth-first_search)

## How to Use the App


A live demo of the application is [here](http://agrant16.github.io/path-algorithm-visualizer).
This app is best viewed and used on screens with a width of 1300px or larger. 
It is a simple React.js app and is not built to be responsive. 

### Selecting an Algorithm and Running the Visualizer

You can select a path algorithm using the Algorithms dropdown menu from the navbar.
The starting node for the algorithm is represented by the green node on the graph and the end node is represented by the red node.
You cannot currently change the positions of the starting and ending nodes, though that is a planned feature. 
Once an algorithm is selected you can visualize the algorithm by pressing the "Visualize It!" button. 
Doing so will change the color of nodes on the grpah in the order they are visited. 
Once the end node is reached the shortest path will be displayed in yellow. 

### Weighted Graphs and Non-Weighted Graphs
The app will automatically generate edge weights for algorithms that are meant for weighted graphs. 
These edge weights represent the distance to travel to that node from its neighbors, and are displayed in the center of each node. 
In the case of this app neighbors are considered to be those nodes directly next to the current node in the four main directions: up, down, left, right.
If the algorithm does not need these weights none will be generated, and a "-" will be displayed in place of a numerical value.

### Building Walls

You can build walls to eliminate some nodes from the graph. 
To do so simply click on a node in the graph and it will change colors to black, signifying that it is now a wall. 
You can click your mouse, hold it and drag it in order to create larger walls. 
Clicking, or dragging your cursor over, existing walls will turn those walls back to normal nodes. 
You can adjust walls during the animation, but note that because of the way the animation is done it will not have any effect on the current visualization. 
It will, however, affect subsequent visualizations. 
