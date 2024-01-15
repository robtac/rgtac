import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import Image from "../components/Image";

let awards = [
  {
    img: "./hackumass.jpg",
    alt: "Project Odin",
    text: "2019: Winner of Best AR/VR Hack, and 3rd place overall at HackUMass 2019",
    link: "Project Odin",
    linkTarget: "/hackumass2019"
  },
  {
    img: "./award10.jpg",
    alt: "NASA Award",
    text: "2018: First place award from NASA at Intel International Science and Engineering Fair (ISEF) in Pittsburgh, Pennsylvania",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award9.jpg",
    alt: "AIAA Award Group",
    text: "2018: Second place award from American Institute of Aeronautics and Astronautics (AIAA) at Intel International Science and Engineering Fair (ISEF) in Pittsburgh, Pennsylvania",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award8.jpg",
    alt: "2018 Project Board",
    text: "2018: Sweepstakes Award / First Place (all categories) at the 2018 Central California Science Mathematics & Engineering Fair. First Place in the category of Computer Science and Mathematics",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award7.jpg",
    alt: "2018 Regional Science Fair Awards",
    text: "2018: Excellence in Science at the 2018 Central California Science Mathematics & Engineering Fair",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award6.jpg",
    alt: "ISEF Awards",
    text: "2017: Third Place in the category of Robotics and Intelligent Machines at Intel International Science and Engineering Fair (ISEF) in Los Angeles, California",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award5.jpg",
    alt: "Air Force award",
    text: "2017: First place award from United States Air Force at ISEF",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award4.jpg",
    alt: "NASA Award Group",
    text: "2017: Second place award from NASA at ISEF",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award3.jpg",
    alt: "FRC Group",
    text: "2017: Team 2761 FIRST FRC Robotics Los Angeles Winner and Participation in FIRST FRC World Championship",
    link: "FRC",
    linkTarget: "/frc"
  },
  {
    img: "./award2.jpg",
    alt: "Safecopter Project Board 2",
    text: "2017: Sweepstakes Award / First Place (all categories) at the 2017 Central California Science Mathematics & Engineering Fair. First Place in the category of Computer Science and Mathematics",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
  {
    img: "./award1.jpg",
    alt: "Award Selfie",
    text: "2016: Third Place in the category of Robotics and Intelligent Machines at Intel International Science and Engineering Fair in Phoenix, Arizona",
    link: "Safecopter",
    linkTarget: "/safecopter"
  },
	{
		img: "./award0.jpg",
		alt: "Safecopter Project Board",
		text: "2016: First Place in the category of Computer Science and Mathematics, Second Place (all categories) at the 2016 Central California Science Mathematics & Engineering Fair ",
		link: "Safecopter",
		linkTarget: "/safecopter"
	}
];

function Award({ img, alt, text, link, linkTarget }) {
	return (
		<div>
			<Image src={img} alt={alt} className="award" />
			<p>
				{text} -{" "}
				<Link href={linkTarget}>
					{link}
				</Link>
			</p>
		</div>
	);
}

// Takes an array of awards as a parameter, and returns it styled with 2 awards per row
function AwardArray() {
  if(awards.length % 2 === 1) {
    awards.push({
      img: "",
      alt: "",
      text: "",
      link: "",
      linkTarget: ""
    })
  }
	let arrPair = awards.reduce(function(result, value, index, array) {
		if (index % 2 === 0) {
			result.push(array.slice(index, index + 2));
		}
		return result;
  }, []);

	let AwardRow = ({ row }) => (
		<div className="row justify-content-md-start">
			<div className="col-md-6">
				<Award
					img={row[0].img}
					alt={row[0].alt}
					text={row[0].text}
					link={row[0].link}
					linkTarget={row[0].linkTarget}
				/>
			</div>
			<div className="col-md-6">
				<Award
					img={row[1].img}
					alt={row[1].alt}
					text={row[1].text}
					link={row[1].link}
					linkTarget={row[1].linkTarget}
				/>
			</div>
		</div>
	);

  let items = [];
  for (let [i, val] of arrPair.entries()) {
    items.push(<AwardRow row={val} />);
  }

	let AwardTable = (
		<div>
			{items}
		</div>
	);
	return AwardTable;
}

export default class Awards extends React.Component {
	render() {
		return (
			<Layout>
				<section className="text-center">
					<div className="container">
						<h1>Awards</h1>
					</div>
					<div className="container">
						<AwardArray />
					</div>
				</section>
			</Layout>
		);
	}
}
