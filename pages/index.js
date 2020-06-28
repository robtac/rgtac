import React from "react";
import Link from "next/link";
import Layout from "../components/Layout/layout";
import { Carousel, CarouselItem } from "reactstrap";
import Image from "../components/Image";
import ImageZoom from "react-medium-image-zoom";

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
									Hi, my name is Robbie Tacescu, and I am a junior at the
									University of Massachusetts Amherst studying computer science. From a young age, I’ve
									been fascinated by the magic of computers and the wonders we
									are able to achieve with them. I strive to expand my knowledge
									and contribute to the community through research in the fields
									of computer science and artificial intelligence.{" "}
									<Link href="/profile">
										<a>Read More</a>
									</Link>
								</p>
								<div className="col-md-10 offset-md-1">
									<Image src="./home-nasa.jpg" alt="Nasa" />
								</div>
							</div>
						</div>
						<br />
						<div className="row">
							<div className="col-lg-7 col-md-6">
								<h2>Safecopter</h2>
								<p align="justify">
									Multicopters have a wide range of applications, from
									surveillance to package delivery and medical support. The goal
									of Safecopter, a project I started in high school, is to
									develop a modular collision detection and avoidance system
									based on an array of 3D cameras that would make flying a
									multicopter in autonomous or tele-operated mode completely
									safe and responsive to the changing environment. This project
									has garnered international recognition.{" "}
									<Link href="/safecopter"><a>Read More</a></Link>
								</p>
							</div>
							<div className="col-lg-5 col-md-6 d-flex align-items-center">
								{/* <img src="/public/home-quad.png" alt="Safecopter" /> */}
								<Image src="./home-quad.png" alt="Safecopter" />
							</div>
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
