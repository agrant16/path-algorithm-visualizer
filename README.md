# Path Algorithm Visualizer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is built using React.js and Bootstrap through react-bootstrap. 

## How to Use the App


A live demo of the application is [here](http://agrant16.github.io/path-algorithm-visualizer).
This app is best viewed and used on screens with a width of 1300px or larger. 
It is a simple React.js app and is not built to be responsive. 

### Selecting an Algorithm and Running the Visualizer

You can select a path algorithm using the Algorithms dropdown menu from the navbar.
Currently only Dijkstra's algorithm is implemented. 
The starting node for the algorithm is represented by the green node on the graph and the end node is represented by the red node.
You cannot currently change the positions of the starting and ending nodes, though that is a planned feature. 
Once an algorithm is selected you can visualize the algorithm by pressing the "Visualize It!" button. 
Doing so will change the color of nodes on the grpah in the order they are visited. 
Once the end node is reached the shortest path will be displayed. 

### Weighted Graphs and Non-Weighted Graphs
The app will automatically generate edge weights for algorithms that are meant for weighted graphs. 
These edge weights represent the distance to travel to that node from its neighbors, and are displayed in the center of each node. 
In the case of this app neighbors are considered to be those nodes directly next to the current node in the four main directions: up, down, left, right.
If the algorithm does not need these weights, then none will be generated.

### Building Walls

You can build walls to eliminate some nodes from the graph. 
To do so simply click on a node in the graph and it will change colors to black, signifying that it is now a wall. 
You can click your mouse, hold it and drag it in order to create larger walls. 
Clicking, or dragging your cursor over, existing walls will make turn those walls back to normal nodes. 
Note that if you add walls after running the visualizer without first clearing the board these walls will be destroyed when you run the visualizer again. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
