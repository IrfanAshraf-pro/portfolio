import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

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
			<div className="i-right">
				<img src={Vector1} alt="vector1" />
				<img src={Vector2} alt="vector2" />
				<img src={boy} alt="boy" />
				<img src={glassesimoji} alt="" />
				<div className="crown-div">
					<FloatingDiv image={crown} text1="Web" text2="Developer" />
				</div>
				<div className="thumb-div">
					<FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
				</div>
				{/* Blur divs */}
				<div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
				<div className="blur blur-blue" style={{ background: "#C1F5FF" }}></div>
			</div>
		</div>
	);
};

export default Intro;
