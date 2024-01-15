import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, Carousel, CarouselItem, CardHeader, CardFooter} from "reactstrap";
import Image from "../components/Image";
import Icon from "../components/Icon/Icon";

// Fix to react-player not really supporting SSR
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const items = [
	{
		src: "./home-banner1.jpg",
		altText: "Banner 1",
		caption: ""
	},
	{
		src: "./home-banner2.jpg",
		altText: "Banner 2",
		caption: ""
	},
	{
		src: "./home-banner3.jpg",
		altText: "Banner 3",
		caption: ""
	}
];

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0, isLightboxOpen: false };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === items.length - 1
				? 0
				: this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex =
			this.state.activeIndex === 0
				? items.length - 1
				: this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;
		const slides = items.map(item => {
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
				</CarouselItem>
			);
		});

		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						{/* <img src="/public/home-banner1.jpg" alt="Home Banner" /> */}
						<Carousel
							activeIndex={activeIndex}
							next={this.next}
							previous={this.previous}
							ride="carousel"
							pause={false}
							interval={3000}
							slide={true}
						>
							{slides}
						</Carousel>
						<br />
						<div className="row">
							<div className="col-lg-5 col-md-6 d-flex align-items-center">
								<Image src="./home1.jpg" alt="Project Portrait" />
							</div>
							<div className="col-lg-7 col-md-6">
								<h2>About Me</h2>
								<p align="justify">
									Hello, I'm Robert Tacescu, a recent graduate with a Master's degree 
									in Computer Science from the University of Massachusetts Amherst. 
									My lifelong passion for computers has fueled my desire to explore 
									the limitless possibilities they offer. Now, I'm eager to apply 
									my expertise and contribute to the computer science and artificial 
									intelligence fields through research and innovation.
									<Link href="/profile">
										Read More
									</Link>
								</p>
								<div className="col-md-10 offset-md-1">
									<Image src="./home-nasa2.jpg" alt="Nasa" />
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-md-5">
								<h2>Safecopter</h2>
								<p align="justify">
									Safecopter is a modular collision detection and avoidance system
									based on an array of six 3D cameras. This project
									received international recognition:
								</p>
								<div className="d-flex justify-content-around align-items-center">
									<a className="d-flex flex-column col-3" href="https://www.societyforscience.org/isef/" target="_blank">
										<img src="./icon-isef.png" alt="ISEF icon" />
										<p>ISEF</p>
									</a>
									<a className="d-flex flex-column col-3" href="https://www.nasa.gov/" target="_blank">
										<img src="./icon-nasa.png" alt="NASA icon" />
										<p>NASA</p>
									</a>
									<a className="d-flex flex-column col-3" href="https://www.airforce.com/" target="_blank">
										<img src="./icon-usaf.png" alt="USAF icon" />
										<p>USAF</p>
									</a>
									<a className="d-flex flex-column col-3" href="https://www.aiaa.org/" target="_blank">
										<img src="./icon-aiaa.png" alt="AIAA icon" />
										<p>AIAA</p>
									</a>
								</div>
								<div className="d-flex justify-content-around">
									{/* <Link href="/safecopter"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/safecopter" className="text-white"><Button color="primary">Read More</Button></Link>
									{/* <Link href="/awards"><Button color="primary"><p className="text-white">See Awards</p></Button></Link> */}
									<Link href="/awards" className="text-white"><Button color="primary">See Awards</Button></Link>
								</div>
								<br />
							</div>
							<div className="col-md-7 d-flex align-items-center">
									<ReactPlayer url="https://www.youtube.com/embed/dchzdfMpMYg"
										controls={true}
										playing={true}
										loop={true}
										muted={true} />
								<br />
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h1>Projects</h1>
							</div>
						</div>
						<div className="d-lg-flex flex-row">
							<Card color="light" className="col-lg-4">
								<CardBody>
									<CardTitle><h2>Safecopter</h2></CardTitle>
									<Image src="./home-quad.png" alt="Safecopter" />
									<CardText align="justify">International award winning modular collision detection and avoidance system. (C++, ROS, Gazebo physics simulation, python).</CardText>
								</CardBody>
								<CardFooter>
									{/* <Link href="/safecopter"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/safecopter" className="text-white"><Button color="primary">Read More</Button></Link>
								</CardFooter>
							</Card>
							<Card color="light" className="col-lg-4">
								<CardBody>
									<CardTitle><h2>Project Odin</h2></CardTitle>
									{/* <Image src="./odin.png" alt="Project Odin Logo" /> */}
									<div className="d-flex align-items-center">
										<Image src="./matrix-creator.png" alt="Project Odin Logo" />
									</div>
									<CardText align="justify">Award winning sound detection, classification, and localization for assisting the hearing impaired. (Java, Python, AI, Machine Learning).</CardText>
									{/* <Link href="/hackumass2019"><Button color="primary"><a className="text-white">Read More</a></Button></Link> */}
								</CardBody>
								<CardFooter>
									{/* <Link href="/hackumass2019"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/hackumass2019" className="text-white"><Button color="primary">Read More</Button></Link>
								</CardFooter>
							</Card>
							<Card color="light" className="col-lg-4">
								<CardBody>
									<CardTitle><h2>Bear Image Classifier</h2></CardTitle>
									<Image src="./bear_together.jpg" alt="Teddy Bear" />
									<CardText align="justify">Transfer learning convolutional neural network for classifying various types of bears. (Tensorflow 2, Python)</CardText>
								</CardBody>
								<CardFooter>
									{/* <Link href="/ai"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/ai" className="text-white"><Button color="primary">Read More</Button></Link>
								</CardFooter>
							</Card>
						</div>
						<div className="d-lg-flex flex-row">
							<Card color="light" className="col-lg-4">
								<CardBody>
									<CardTitle><h2>Python Motion Detection</h2></CardTitle>
									<Image src="./ffmpeg-python.png" alt="Safecopter" />
									<CardText align="justify">Motion detection in security camera footage based on FFmpeg scene change algorithm. (Python, ffmpeg, PySimpleGUI).</CardText>
								</CardBody>
								<CardFooter>
									{/* <Link href="/motion-detect"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/motion-detect" className="text-white"><Button color="primary">Read More</Button></Link>
								</CardFooter>
							</Card>
							<Card color="light" className="col-lg-4">
								<CardBody>
									<CardTitle><h2>FRC Robotics</h2></CardTitle>
									<Image src="./frc.png" alt="FRC logo" />
									<CardText align="justify">Robot tele-operated control and autonomous drive system using vision-based target detection. (Java, OpenCV, Robotics).</CardText>
								</CardBody>
								<CardFooter>
									{/* <Link href="/frc"><Button color="primary"><p className="text-white">Read More</p></Button></Link> */}
									<Link href="/frc" className="text-white"><Button color="primary">Read More</Button></Link>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
