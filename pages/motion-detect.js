import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import Image from "../components/Image";
import ReactPlayer from 'react-player/youtube';

export default class Safecopter extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Python Motion Detection</h1>
						<p className="lead text-muted">Detecting motion in video using python and ffmpeg</p>
					</div>
					<div className="container">
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<p align="justify">
									One common issue with many long video recordings (such as
									from security or nature cameras) is processing the media
									into a usable format. This software provides a simple and
									intuitive user interface that takes long videos and outputs
									short subsections containing motion that is above a certain threshold.
								</p>
								<Image src="./deer.jpg" alt="Deer" />
							</div>
							<div className="col-md-6">
								<Image src="./ffmpeg-python.png" alt="ffmpeg python" />
								<p align="justify">
									The video is run through a scene change detection algorithm,
									and a temporary file is produced containing the resulting
									information. Then, each frame is given a median score based
									off of the detected motion. Once a certain threshold is met,
									a smart copy algorithm creates a dynamic start and end point,
									and those sections are copied from the video and saved into the
									output folder. The last step is repeated for all subsections
									that fit the motion criteria. Since the video section is copied, there
									is no re-encoding or quality loss.
								</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
