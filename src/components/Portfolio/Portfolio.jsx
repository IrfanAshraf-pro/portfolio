import React, { useContext, useState, useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
	const [slides, setSlides] = useState(3);

	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	const handleResize = () => {
		if (window.innerWidth >= 850) {
			setSlides(3);
		} else if (window.innerWidth < 850 && window.innerWidth > 550) {
			setSlides(2);
		} else if (window.innerWidth <= 550) {
			setSlides(1);
		}
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
	}, [slides]);
	return (
		<div className="portfolio" id="portfolio">
			{/* heading */}
			<span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
			<span>Portfolio</span>
			{/* swiper  */}
			<Swiper
				spaceBetween={30}
				slidesPerView={slides}
				grabCursor={true}
				className="portfolio-slider"
			>
				<SwiperSlide>
					<img src={Sidebar} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Ecommerce} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={MusicApp} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Hoc} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
