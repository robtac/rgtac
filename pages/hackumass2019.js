import React from "react";
import Layout from "../components/Layout/layout";

export default class frc extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Project Odin</h1>
						<p><i>Winner of Best AR/VR Hack, and 3rd place overall at HackUMass 2019</i></p>
					</div>
					<br />
					<div className="container">
						<div className="row justify-content-md-start">
							<div className="col-md-7">
								<p align="justify">
									Odin is a project to assist those who are deaf or hearing
									impaired by using a combination of sensors and sound placement
									algorithms to project the information onto AR glasses. It can
									then detect and classify the sound, notifying the user where
									the sound is coming from and what it is.
								</p>
								<p align="justify">
									This project was created in collaboration with my teammates
									Hannan Rhodes, Bill Ray, and Keerthan Ekbote.{" "}
									<a
										href="https://github.com/HannanSolo/hackUMass-Odin"
										target="_blank"
									>
										Find the code here
									</a>
								</p>
							</div>
							<div className="col-md-5 d-flex align-items-center">
								<div className="embed-responsive embed-responsive-4by3 d-flex align-items-center">
									<iframe
										title="Safecopter"
										width="640"
										height="360"
										src="https://youtube.com/embed/iA9r2DP_DuM"
										frameborder="0"
										className="embed-responsive-item"
										allowfullscreen="0"
									/>
								</div>
							</div>
						</div>
						<br />
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h3>How We Built It</h3>
								<p align="justify">
									This project was built through the use of Web Technologies,
									Socket Programming, and ARCore technology. The sensor itself
									was connected to a Raspberry Pi, which served as the "brains"
									of the sensor. The Pi was able to send data through a TCP
									connection to a running Express server, which then processed
									the data and relayed that information to the mobile app. At
									each of these stages, data had to be transformed according to
									necessities. For example, noisy microphone data from the Pi
									had to be high-pass filtered, and processed to extract X Y Z
									vector components for the direction of the sound. In addition,
									we were able to use audio clips gathered from the microphones,
									and use IBM's Audio Classification API to classify the types
									of noise that the sensor was hearing.
								</p>
							</div>
							<div className="col-md-6">
								<h3>Technologies Used</h3>
								<p align="justify">
									<ul>
										<li>Javascript</li>
										<li>Node.js</li>
										<li>Express</li>
										<li>Java</li>
										<li>Python</li>
										<li>Raspberry Pi</li>
										<li>AI/Machine Learning</li>
										<li>Matrix Creator Hat</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
