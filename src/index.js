// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//Redux
import { Provider } from "react-redux";

// Navigation
import history from "@HistoryFile"

// Component
import App from "./App";

// ReactDOM.render(
//     <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
	<Router history = {history}>
		<App />
	</Router>,
	document.getElementById("root"),
);
