import "../css/styles.css";

import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import store from "./store";

import TestParagraph from "./components/TestParagraph";
import TestButton from "./components/TestButton";

const obj = { prop: "something" };
const spreadObj = { ...obj, arrowFn };
const arrowFn = () => { };

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<TestParagraph text="This paragraph is rendered by React" />
					<TestButton />
				</div>
			</Provider>
		);
	}
}

render(<App />, document.querySelector(".app"));

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("service-worker.js")
		.then((registration) => {
			console.log("Service Worker registration successful: ", registration);
		})
		.catch((error) => {
			console.log("Service Worker registration failed: ", error);
		});
}

export default hot(App);