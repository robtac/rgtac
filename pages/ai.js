import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import Image from "../components/Image";

const tf = require("@tensorflow/tfjs");
const mobilenet = require("@tensorflow-models/mobilenet");

// const fs = require("fs-js");
// const jpeg = require("jpeg-js");

// const readImage = path => {
// 	const buf = fs.readFileSync(path);
// 	const pixels = jpeg.decode(buf, true);
// 	return pixels;
// };

// const imageByteArray = (image, numChannels) => {
// 	const pixels = image.data;
// 	const numPixels = image.width * image.height;
// 	const values = newInt32Array(numPixels * numChannels);

// 	for (let i = 0; i < numPixels; i++) {
// 		for (let channel = 0; channel < numChannels; ++channel) {
// 			values[i * numCHannels + channel] = pixels[i * 4 + channel];
// 		}
// 	}

// 	return values;
// };

// const imageToInput = (image, numChannels) => {
// 	const values = imageByteArray(image, numChannels);
// 	const outShape = [image.height, image.width, numChannels];
// 	const input = tf.tensor3d(values, outShape, "int32");

// 	return input;
// };

// const loadModel = async () => {
// 	const mn = await mobilenet.load();
// 	return mn;
// };

// const classify = async (path) => {
// 	const image = readImage(path);
// 	const input = imageToInput(image, 3);

// 	const mn_model = await loadModel();
// 	const predictions = await mn_model.classify(input);

// 	console.log("Classification results: ", predictions);
// };

// classify('http://bit.ly/2JYSal9');

export default class AI extends React.Component {
	constructor(props) {
		super(props);
		this.maxPix = 400;
	}

	async loadModel() {
		this.model = await tf.loadLayersModel(
			"https://raw.githubusercontent.com/robtac/TF2-Bears/master/model/model.json"
		);
	}

	imageToInput(image, numChannels) {
		let outShape = [image.height, image.width, numChannels];
		let input = tf.tensor3d(image, outShape, "int32");
		return input;
	}

	async classify(image) {
		let tensor3 = tf.browser.fromPixels(image, 3);
		let tensor4 = tensor3.expandDims();
		console.log(await tensor4.array());
		const predictions = await this.model.predict(tensor4);
		console.log(await predictions.array());
	}

	async getBmap(event) {
		const file = event.target.files[0];
		if (file) {
			let bmap = createImageBitmap(file);
			return await bmap;
		}
	}

	onImageUpload(bmap) {
		bmap.then(result => {
			this.img = result;
			console.log(this.img);

			const aspectRatio = this.img.width / this.img.height;

			if (this.img.width >= this.img.height) {
				this.passiveCanvas.height = this.maxPix;
				this.passiveCanvas.width = this.maxPix * aspectRatio;
			} else {
				this.passiveCanvas.width = this.maxPix;
				this.passiveCanvas.height = this.maxPix / aspectRatio;
			}

			this.passiveCanvas.width = 265;
			this.passiveCanvas.height = 265;

			let ctx = this.passiveCanvas.getContext("2d");
			ctx.drawImage(this.img, 0, 0, 265, 265);
		});
	}

	componentDidMount() {
		this.loadModel();
		this.passiveCanvas = this.refs.canvas;
	}

	predictImage = () => {
		this.classify(this.passiveCanvas);
	};

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
										src="/static/bears_acc.jpg"
										alt="Model Accuracy Graph"
									/>
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
