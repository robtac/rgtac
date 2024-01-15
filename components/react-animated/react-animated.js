import React from "react";
import styles from "./react-animated.module.scss";

export default class ReactAnimated extends React.Component {
	render() {
		return (
			<div>
				<img
					src="./react.svg"
					className={styles.AppLogo}
					alt="logo"
				/>
			</div>
		);
	}
}
