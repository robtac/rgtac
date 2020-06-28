import React from "react";
import Layout from "../components/Layout/layout";
import Image from "../components/Image";

export default class AI extends React.Component {
	constructor(props) {
		super(props);
		this.maxPix = 400;
	}

	componentDidMount() {
		this.passiveCanvas = this.refs.canvas;
	}

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
								<h2>
									Bears Image Classification; Transfer Learning with Tensorflow
									2.0
								</h2>
								<p align="justify">
									The goal of this project was to create a classifier that is
									able to distinguish between different types of bears, namely
									grizzly, black, and teddy bears. To achieve this, I used
									Tensorflow 2.0 and MobileNetV2 with imagenet weights, and a
									data sample of 269 images of various bears pulled from google
									search. The result was a model with 100% validation and
									testing accuracy.
									<br />
									Training and validation accuracy and loss graphs shown below.
									<br />
									<a
										target="_blank"
										href="https://github.com/robtac/TF2-Bears/blob/master/TF2%20Bears%20Transfer.ipynb"
									>
										See the source on github!
									</a>
								</p>
								<div className="d-flex">
									<Image
										src="./bears_acc.jpg"
										alt="Model Accuracy Graph"
									/>
									<Image src="./bears_loss.jpg" alt="Model Loss Graph" />
								</div>
							</div>
							<div className="col-lg-5 col-md-6">
								<div className="row">
									<div className="col-md-6 d-flex">
										<Image src="./bear_black.jpg" alt="Black Bear" />
									</div>
									<div className="col-md-6 d-flex flex-column">
										<Image src="./bear_grizzly.jpg" alt="Grizzly Bear" />
										<Image src="./bear_teddy.jpg" alt="Teddy Bear" />
										{/* <button
											onClick={async () => {
												// console.log(this.image);
												let img = this.image;
												let model = await mobilenet.load();
												let predictions = await model.classify(img);
												alert('Predictions: ', predictions);
											}}
										>
											test
										</button> */}
									</div>
								</div>
							</div>
						</div>
						{/* <div className="row">
							<button onClick={() => this.predictImage()}>Predict Image</button>
							<input
								className={"ImageInput"}
								type={"file"}
								id={"file"}
								onChange={() => {
									this.onImageUpload(this.getBmap(event));
								}}
							/>
							<canvas className={"ImageBoard"} ref="canvas" />
						</div> */}
					</div>
				</section>
			</Layout>
		);
	}
}
