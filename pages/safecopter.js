import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Image from "../components/Image";
import ReactPlayer from 'react-player/youtube';

export default class Safecopter extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<div className="row">
							<div className="embed-responsive embed-responsive-16by9 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
								{/* <iframe
									title="Safecopter"
									width="640"
									height="360"
									src="https://www.youtube.com/embed/dchzdfMpMYg"
									frameBorder="0"
									className="embed-responsive-item"
									allowFullScreen="0"
								/> */}
								<ReactPlayer url="https://www.youtube.com/embed/dchzdfMpMYg"
									width="640"
									height="360"
									controls={true}
									playing={true}
									loop={true}
									muted={true} />
							</div>
						</div>
						<h1>Safecopter</h1>
						<p className="lead text-muted">The Quadcopter that Never Crashes</p>
						<div>
							<a href="https://github.com/robtac/Safecopter" target="_blank">
								View the source code
							</a>
							{" | "}
							<Link href="/awards">
								<a>View Safecopter's awards</a>
							</Link>
						</div>
					</div>
					<br />
					<div className="container">
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<Image src="./quad1.jpg" alt="Safecopter In Person" />
								<br />
								<p align="justify">
									Integrating an array of time-of-flight 3D cameras, the
									algorithm uses coordinate transformations to convert the point
									clouds provided by each camera into a main one, creating a
									360° snapshot of the environment within a six-meter radius.
									The challenge is to develop an algorithm fast enough to
									provide collision avoidance decisions in real time.
								</p>
								<Image src="./quad-graph.png" alt="Safecopter data graph" />
							</div>
							<div className="col-md-6">
								<p align="justify">
									Multicopters have a wide range of applications from
									surveillance to package delivery and medical support. Although
									growing in popularity, they are not used yet on an industrial
									scale for safety reasons. The goal of Safecopter is to develop
									a modular collision detection and avoidance system that would
									make flying a multicopter in autonomous or tele-operated mode
									completely safe and responsive to the changing environment.
								</p>
								<Image src="./quad2.png" alt="Safecopter Exploded View" />
								<br />
								<p align="justify">
									Based on the research of multiple collision detection
									algorithms, the octree spatial partitioning system proved to
									be the most efficient. In comparison to the point cloud based
									algorithm, it was more than 320 times faster. Developed in
									C++, the algorithm was able to achieve this level of
									performance by organizing the data into tree-like hierarchies
									and performing binary operations.
								</p>
							</div>
						</div>
						<br />
						<div className="row justify-content-md-start">
							<div className="col-md-12">
								<p align="justify">
									A key element of developing an advanced collision avoidance
									algorithm is the ability to simulate complex indoor and
									outdoor environments. Safecopter was modeled in 3D and, using
									the Gazebo physics simulator, different scenarios were tested,
									without running the risk of causing an expensive crash.
								</p>
							</div>
							<div className="col-md-10 offset-md-1">
								<Image
									src="./quad-screenshot.png"
									alt="Screenshot of Safecopter Simulation"
								/>
							</div>
							<div className="col-md-12">
								<br />
								<p align="justify">
									This project has won numerous international awards at the
									Intel International Science and Engineering Fair (ISEF). For
									more details, see the <Link href="/awards"><a>awards page</a></Link>.
								</p>
								<br />
								<p align="left">Many thanks to these companies for sponsoring this project...</p>
							</div>
							<div className="row col-md-12 offset-md-1">
								<div className="col-md-3">
									<p align="center">IFM!</p>
									<img src="./icon-ifm.png" alt="IFM" />
								</div>
								<div className="col-md-3 offset-md-1">
									<p align="center">PMD Technologies!</p>
									<img src="./icon-pmd.jpg" alt="PMD" />
								</div>
								<div className="col-md-4 offset-md-1">
									<p align="center">Nvidia!</p>
									<img src="./icon-nvidia.jpg" alt="Nvidia" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
