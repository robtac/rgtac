import React from "react";
import "./style.scss";

const iconList = {
	android: "./icons/android.svg",
	apple: "./icons/apple.svg",
	aws: "./icons/aws.svg",
	cpp: "./icons/cpp.png",
	pdf: "./icons/file-pdf.svg",
	github: "./icons/github.svg",
	html5: "./icons/html5.svg",
	java: "./icons/java.svg",
	js: "./icons/js.svg",
	linkedin: "./icons/linkedin.svg",
	linux: "./icons/linux.svg",
	node: "./icons/node.svg",
	python: "./icons/python.svg",
	react: "./icons/react.svg",
	ros: "./icons/ros.png"
}

const Icon = ({ name, title }) => (
	<div className="icon text-center" title={name}>
		{/* <FontAwesomeIcon icon={["fab", name]} /> */}
		<img src={iconList[name]} />
    <p className="caption">{title}</p>
	</div>
);

export default Icon;
