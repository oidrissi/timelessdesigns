import React from "react";
import './header.css';
import Phone from "../../assets/imgs/Iphone11Frame.png";
import { FaBeer } from "react-icons/fa"

const Header = () => {
	return (
		<div className="container">
			<div className="first-column">
				<div className="logo">
					<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="logo" />
				</div>
				<div className="phone">
					<img src={ Phone } alt="phone" />
				</div>
			</div>
			<div className="second-column">
				{/* Work here */}
			</div>
		</div>
	);
};

export default Header;