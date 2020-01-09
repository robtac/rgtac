import React from "react";
import ImageZoom from "react-medium-image-zoom";
import "../styles.scss";

// export default function Image ({src, alt}) {
//   return (
//     <div>

//       <ImageZoom
//         image={{
//           src: src,
//           alt: alt
//         }}
//         zoomImage={{
//           src: src,
//           alt: alt,
//           className: "no-animation"
//         }}
//       />
//     </div>
//   )
// }

export default class Image extends React.Component {

	render() {
		return (
			<div>
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
