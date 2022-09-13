import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";

const Intro = () => {
	return (
		<div className="intro">
			<div className="i-left">
				<div className="i-name">
					<span>Hy! I Am</span>
					<span>Irfan Ashraf</span>
					<span>
						Frontend Developer with high level of experience in web designing
						and development, producing the quality work
					</span>
				</div>
				<button className="button i-button">Hire Me</button>
				<div className="i-icons">
					<img src={Github} alt="github" />
					<img src={LinkedIn} alt="github" />
					<img src={Instagram} alt="github" />
				</div>
			</div>
			<div className="i-right">I am right side</div>
		</div>
	);
};

export default Intro;
