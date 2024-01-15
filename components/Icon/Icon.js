import React from "react";
import styles from "./Icon.module.scss";

const iconList = {
	android: "./icons/android.svg",
	apple: "./icons/apple.svg",
	aws: "./icons/aws.svg",
	cpp: "./icons/cpp.png",
	csharp: "./icons/csharp.svg",
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
	ros: "./icons/ros.png",
	nasa: "./icon-nasa.png",
	isef: "./icon-isef.png",
	usaf: "./icon-usaf.png",
	aiaa: "icon-aiaa.jpg",
}

const Icon = ({ name, title }) => (
	// <div className={`${styles.icon} text-center`} title={name}>
	<div className={styles.icon} title={name}>
		{/* <FontAwesomeIcon icon={["fab", name]} /> */}
		<img src={iconList[name]}  />
		<p className="caption">{title}</p>
	</div>
);

export default Icon;
