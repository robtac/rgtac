import React from "react";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

export default class Image extends React.Component {

	render() {
		return (
			<div className={this.props.className}>
				<Zoom
					zoomImg={{
						src: this.props.src,
						alt: this.props.alt,
						className: "no-animation"
					}}
					>
					<img src={this.props.src} alt={this.props.alt} className="animated"/>
				</Zoom>
			</div>
		);
	}
}
