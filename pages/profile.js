import React from "react";
import Icon from "../components/Icon/Icon";
import Link from "next/link";
import emergence from "emergence.js";
import Layout from "../components/layout";
import ReactAnimated from "../components/react-animated/react-animated";

export default class Profile extends React.Component {
	componentDidMount() {
		emergence.init();
		if (typeof window !== "undefined") {
			window.WOW = require("wowjs");
		}
		new WOW.WOW().init();
	}

	componentDidUpdate() {
		emergence.init();
	}

	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<img
							src="./profile-cropped.png"
							alt="Profile"
							className="rounded-circle profile"
						/>
						<h1>Robert Tacescu</h1>
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-4 col-xs-3 col-lg-2 align-content-center">
									<a href="https://github.com/robtac" target="_blank">
										<div className="d-flex flex-column">
											<img
												src="./icons/github.svg"
												className="profile-icon align-self-center"
											/>
											<p className="align-self-center">Github</p>
										</div>
									</a>
								</div>
								<div className="col-4 col-xs-3 col-lg-2 align-content-center">
									<a
										href="https://www.linkedin.com/in/robert-tacescu-990845128/"
										target="_blank"
									>
										<div className="d-flex flex-column">
											<img
												src="./icons/linkedin.svg"
												className="profile-icon align-self-center"
											/>
											<p>LinkedIn</p>
										</div>
									</a>
								</div>
								<div className="col-4 col-xs-3 col-lg-2 align-content-center">
									<a href="./Resume-RobertTacescu.pdf" target="_blank">
										<div className="">
											<img
												src="./icons/file-pdf.svg"
												className="profile-icon align-self-center"
											/>
											<p>Resume</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-3 col-md-5 col-6">
								<ReactAnimated />
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-3 col-md-5 align-items-center">
								<p className="text-primary">
									<strong>I built this website in React!</strong>
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-primary text-white text-center">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="section-heading">SKILLS</h2>
								<hr className="border-white" />
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row justify-content-md-center">
							<div className="col-lg-3 col-6">
								<Icon title="HTML" name="html5" />
							</div>
							<div className="col-lg-3 col-6">
								<Icon title="JavaScript" name="js" />
							</div>
							<div className="col-lg-3 col-6">
								<Icon title="React.js" name="react" />
							</div>
							<div className="col-lg-3 col-6">
								<Icon title="Node.js" name="node" />
							</div>
						</div>
						<div className="row justify-content-md-center">
							<div className="col-lg-3 col-6">
								<Icon title="Java" name="java" />
							</div>
							<div className="col-lg-3 col-6 ">
								<Icon title="Python" name="python" />
							</div>
							<div className="col-lg-3 col-6 ">
								<Icon title="Linux" name="linux" />
							</div>
							<div className="col-lg-3 col-6 ">
								<Icon title="Android" name="android" />
							</div>
						</div>
						<div className="row justify-content-md-center">
							<div className="col-lg-3 col-6">
								<Icon title="ROS" name="ros" />
							</div>
							<div className="col-lg-3 col-6">
								<Icon title="C#" name="csharp" />
							</div>
							<div className="col-lg-3 col-6">
								<Icon title="C++" name="cpp" />
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="text-center jumboimage">
					<div className="cover-image">
						<img
							src="./back1.jpg"
							alt="Phone Background"
							className="cover-image"
						/>
					</div>
					<div className="container">
						<div className="row cover-over">
							<div className="col-md-12 text-left">
								<h2 className="section-heading">About Me</h2>
								<li>
									2023: SpaceX Application Software Engineer Internship
								</li>
								<li>
									2022: SpaceX Software Engineer Internship
								</li>
								<li>
									2021: Torc Robotics Software Engineer Internship
								</li>
								<li>
									2020: GlobalFoundries Software Engineer Internship/Co-op
								</li>
								<li>
									2019: {" "}
									<Link href="/hackumass2019" className="link-light">
										HackUMass 2019: Project Odin
									</Link>
								</li>
								<li>
									2019: {" "}
									<Link href="/ai" className="link-light">
										AI Bear Recognition
									</Link>
								</li>
								<li>
									2015 ~ 2018:{" "}
									<Link href="/safecopter" className="link-light">
										Safecopter Project
									</Link>
								</li>
								<li>
									2014 ~ 2018:{" "}
									<Link href="/frc" className="link-light">
										FRC Robotics
									</Link>
								</li>
							</div>
						</div>
					</div>
				</section>

				<section
					className="bg-primary text-white text-center color-inverse"
					id="concept"
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="section-heading">PROJECTS</h2>
								<hr className="border-white" />
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6 slide-left" data-emergence="hidden">
								<Link href="/safecopter">
									<img src="./quad3.png" alt="Safecopter Exploded View" />
								</Link>
								<Link href="/safecopter">
									<p>Safecopter</p>
								</Link>
							</div>
							<div className="col-md-6 slide-right" data-emergence="hidden">
								<Link href="/frc">
									<img src="./frc.png" alt="FRC Logo" />
								</Link>
								<Link href="/frc">
									<p>FRC Robotics</p>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
