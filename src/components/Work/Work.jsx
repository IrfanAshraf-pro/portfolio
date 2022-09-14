import React, { useContext } from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Work = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="works">
			<div className="awesome">
				<span style={{ color: darkMode ? "white" : "" }}>
					Works for All these
				</span>
				<span>Brands</span>
				<span>
					Lorem ipsum dolor sit amet.
					<br />
					Lorem ipsum dolor sit amet.
					<br />
					Lorem ipsum dolor sit amet.
					<br />
					Lorem ipsum dolor sit amet.
				</span>
				<button className="button s-button">Hire Me</button>
				<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* Right side */}
			<div className="w-right">
				<motion.div
					initial={{ rotate: 45 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: "-40px" }}
					transition={{ duration: 3.5, type: "spring" }}
					className="w-mainCircle"
				>
					<div className="w-secCircle">
						<img src={Upwork} alt="upwork" />
					</div>
					<div className="w-secCircle">
						<img src={Fiverr} alt="fiver" />
					</div>
					<div className="w-secCircle">
						<img src={Amazon} alt="amazon" />
					</div>
					<div className="w-secCircle">
						<img src={Shopify} alt="shopify" />
					</div>
					<div className="w-secCircle">
						<img src={Facebook} alt="facebook" />
					</div>
				</motion.div>
				{/* background-circle  */}
				<div className="w-backCircle blueCircle"></div>
				<div className="w-backCircle yellowCircle"></div>
			</div>
		</div>
	);
};

export default Work;
