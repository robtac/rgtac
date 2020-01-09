import React from "react";
import Navi from "../Navi";
import "../../animate.scss";
import "./styles.scss";

import ReactGA from "react-ga";

export default class Layout extends React.Component {
	componentDidMount() {
		ReactGA.initialize("UA-155863208-1");
		ReactGA.pageview(document.location.pathname);
	}

	render() {
		return (
			<div>
				<Navi />
				{this.props.children}
			</div>
		);
	}
}
