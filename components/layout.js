import React from "react";
import Navi from "./Navi";
import Head from 'next/head';

import Router from 'next/router'

function trackPageView(url) {
	try {
		window.gtag('config', 'UA-155863208-1', {
			page_location: url
		});
	} catch (error) {
		// silences the error in dev mode
		// and/or if gtag fails to load
	}
}

export default class Layout extends React.Component {
	componentDidMount() {
		Router.onRouteChangeComplete = url => {
			trackPageView(url);
		};
	}

	render() {
		return (
			<div>
				<Head>
					<title>Robert Tacescu</title>
				</Head>
				<Navi />
				{this.props.children}
			</div>
		);
	}
}
