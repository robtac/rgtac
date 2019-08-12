import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Image from "../components/Image";

// import test from 'raw-loader!../TF2 Transfer Learning-Copy2/TF2 Transfer Learning-Copy2.md';

export default class AI extends React.Component {
	render() {
		const input = "# This is a header\n\nAnd this is a paragraph";
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						{/* <ReactMarkdown source={test} /> */}
						<h1>AI Projects</h1>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-md-6">
								<h2>Tensorflow 2.0 Bears Transfer Learning</h2>
								<p align="justify">
									The goal of this project was to create a classifier that is
									able to distinguish between different types of bears, namely
									grizzly, black, and teddy bears. To achieve this, I used
									Tensorflow 2.0 and MobileNetV2 with imagenet weights, and a
									data sample of 269 images of various bears pulled from google.
									<br />
									Training and validation accuracy and loss graphs shown below.
									<br />
									<a target="_blank" href="https://github.com/robtac/TF2-Bears/blob/master/TF2%20Bears%20Transfer.ipynb">
										See the source here!
									</a>
								</p>
								<div className="d-flex">
									<Image src="/static/bears_acc.jpg" alt="Model Accuracy Graph" />
									<Image src="/static/bears_loss.jpg" alt="Model Loss Graph" />
								</div>
							</div>
							<div className="col-lg-5 col-md-6">
								<div className="row">
									<div className="col-md-6 d-flex">
										<Image src="/static/bear_black.jpg" alt="Black Bear" />
									</div>
									<div className="col-md-6 d-flex flex-column">
										<Image src="/static/bear_grizzly.jpg" alt="Grizzly Bear" />
										<Image src="/static/bear_teddy.jpg" alt="Teddy Bear" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
