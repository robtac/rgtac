import React from "react";
import "./style.scss";

const iconList = {
	android: "/static/icons/android.svg",
	apple: "/static/icons/apple.svg",
	aws: "/static/icons/aws.svg",
	cpp: "/static/icons/cpp.png",
	pdf: "/static/icons/file-pdf.svg",
	github: "/static/icons/github.svg",
	html5: "/static/icons/html5.svg",
	java: "/static/icons/java.svg",
	js: "/static/icons/js.svg",
	linkedin: "/static/icons/linkedin.svg",
	linux: "/static/icons/linux.svg",
	node: "/static/icons/node.svg",
	python: "/static/icons/python.svg",
	react: "/static/icons/react.svg",
	ros: "/static/icons/ros.png"
}

const Icon = ({ name, title }) => (
	<div className="icon text-center" title={name}>
		{/* <FontAwesomeIcon icon={["fab", name]} /> */}
		<img src={iconList[name]} />
    <p className="caption">{title}</p>
	</div>
);

export default Icon;
