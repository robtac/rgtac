import React from "react";
import Layout from "../components/layout";
import Image from "../components/Image";

export default class Certifications extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Certifications</h1>
					</div>
					<div className="container">
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h2>Machine Learning</h2>
								<p align="justify">
									Machine learning is the science of getting computers to act
									without being explicitly programmed. In the past decade,
									machine learning has given us self-driving cars, practical
									speech recognition, effective web search, and a vastly
									improved understanding of the human genome.
								</p>
                <Image src="./cert1.jpg" alt="Machine Learning Certification" />
							</div>
							<div className="col-md-6">
								<h2>Full-Stack Web Development with React</h2>
								<p align="justify">
									This specialization focuses on Node.js and the React
									Ecosystem, including the latest frameworks in React, React
									Native, and Node.js.
								</p>
                <Image src="./cert2.jpg" alt="Full Stack React Certification" />
							</div>
						</div>
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h2>Front-End Web UI Frameworks and Tools: Bootstrap 4</h2>
								<p align="justify">
									This course gives an overview of client-side web UI
									frameworks, in particular Bootstrap 4. It teaches about grids
									and responsive design, Bootstrap CSS and JavaScript
									components. It also teaches the basics of Node.js and NPM and
									task runners like Grunt and Gulp.
								</p>
							</div>
							<div className="col-md-6">
								<h2>Front-End Web Development with React</h2>
								<p align="justify">
									This course explores Javascript based front-end application
									development, and in particular the React library. This course
									used JavaScript ES6 for developing React application. It also
									teaches an introduction to the use of Reactstrap for Bootstrap
									4-based responsive UI design.
								</p>
							</div>
						</div>
						<div className="row justify-content-md-start">
							<div className="col-md-6">
								<h2>Multiplatform Mobile App Development with React Native</h2>
								<p align="justify">
									This course focuses on developing truly cross-platform, native
									iOS and Android apps using React Native and the Expo SDK.
									React Native uses modern JavaScript to get truly native UI and
									performance while sharing skills and code with the web.
								</p>
							</div>
							<div className="col-md-6">
								<h2>
									Server-Side Development with NodeJS, Express, and MongoDB
								</h2>
								<p align="justify">
									This course deals with all things server-side. The entire
									course is based around the NodeJS platform. It starts with an
									overview of the Web protocols, and includes NodeJS: Express,
									MongoDB and Mongoose, the REST API, and authentication and
									security.
								</p>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
