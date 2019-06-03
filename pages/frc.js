import React from "react";
import Layout from "../components/Layout/layout";

export default class frc extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>FIRST FRC</h1>
					</div>
					<br />
					<div className="container">
						<div className="row justify-content-md-start">
							<div className="col-md-8">
								<p align="justify">
									FIRST FRC is an international high school robotics
									competition. Teams have six weeks to build, design, and
									program a robot to compete against like-minded competitors.{" "}
									<a
										href="https://www.firstinspires.org/robotics/frc"
										target="_blank"
									>
										Learn more here
									</a>
								</p>
								<p align="justify">
									For six years, I've had the privilege to be involved with two
									robotics teams: IronHorse Robotics Team 2761, and Stable
									Circuits Robotics Team 6305. As the head programmer, I lead a
									few different projects: a login program, a vision-based target
									identifier, a team-themed Pacman game, and the robot
									programming.
								</p>
							</div>
							<div className="col-md-4 col-xs-8 offset-xs-2 d-flex align-items-center">
								<img src="/static/frc.png" alt="FRC logo" />
							</div>
						</div>
						<br />
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h3>Robot Code</h3>
								<p align="justify">
									The main application of the programming team, the robot code
									is built in Java and runs on an onboard computer called the
									Roborio. It operated utilizing a command-based system, which
									allowed for complex functions to be called in an efficient and
									organized manner. It also employed PID (Position Integral
									Derivative) loops in order to accurately maneuver the robot
									with both the shooter and the drive systems. It would minimize
									the pixel difference on a camera image to align the ball
									shooter to the target.
								</p>
								<img
									src="/static/frc-medal.jpg"
									alt="FRC Medal"
									className="frc-medal"
								/>
							</div>
							<div className="col-md-6">
								<h3>Vision Program</h3>
								<p align="justify">
									This was a Java and OpenCV - based application designed to run
									on a dedicated Raspberry Pi 2 on board a robot. It would
									capture an image, then identify the target's offset from the
									center with an HSV filter, a color filter, and a size filter.
									The robot would then be able to adjust to minimize the pixel
									offset to align the ball shooter to the target.
								</p>
								<div className="embed-responsive embed-responsive-4by3 d-flex align-items-center">
									<iframe
										title="Safecopter"
										width="640"
										height="360"
										src="https://www.youtube.com/embed/twW29lbzIWg"
										frameborder="0"
										className="embed-responsive-item"
										allowfullscreen="0"
									/>
								</div>
							</div>
						</div>
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h3>Pacman Game</h3>
								<p align="justify">
									I made a python Pacman game meant to run on a Raspberry Pi 3.
									The team and I constructed an arcade machine, complete with a
									screen and analog arcade controls. The game was modified to
									replace the ghosts with the FRC letters, and the Pacman
									character with our team logo.
								</p>
							</div>
							<div className="col-md-6">
								<h3>Login Program</h3>
								<p align="justify">
									I developed a Login program application utilizing Java and a
									MySQL server. It operated with a visual JavaFX framework with
									SQL queries requesting, modifying, and adding to a local
									server. It tracked the time individuals spent working in the
									shop by using a barcode scanning system to scan their ID card
									to log in/out the members.
								</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
