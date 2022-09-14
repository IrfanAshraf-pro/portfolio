import React, { useContext } from "react";
import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	const transition = {
		duration: 1,
		type: "spring",
	};
	return (
		<div className="services" id="services">
			{/* left side */}
			<div className="awesome">
				<span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
				<span>Services</span>
				<span>
					Lorem ipsum dolor sit amet.
					<br />
					Lorem ipsum dolor sit amet.
				</span>
				<a href={Resume} download>
					<button className="button s-button">Download CV</button>
				</a>
				<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* right side  */}
			<div className="cards">
				{/* first card  */}
				<motion.div
					initial={{ left: "25rem" }}
					whileInView={{ left: "14rem" }}
					transition={transition}
				>
					<Card
						emoji={Heartemoji}
						heading={"Design"}
						detail="Figma, Sketch, Photoshop, Adobe XD"
					/>
				</motion.div>
				{/* second card  */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "-4rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Developer"}
						detail="Html, CSS, Javascript, React"
					/>
				</motion.div>
				{/* third card  */}
				<motion.div
					initial={{ top: "19rem", left: "25rem" }}
					whileInView={{ left: "20rem" }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"UI/UX"}
						detail="lorem sdsd dsdsd sdsdss sdsd"
					/>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
