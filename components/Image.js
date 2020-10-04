import React from "react";
import ImageZoom from "react-medium-image-zoom";
import "../styles.scss";

export default class Image extends React.Component {

	render() {
		return (
			<div className={this.props.className}>
				<ImageZoom
					image={{
						src: this.props.src,
						alt: this.props.alt,
					}}
					zoomImage={{
						src: this.props.src,
						alt: this.props.alt,
						className: "no-animation"
					}}
				/>
			</div>
		);
	}
}
