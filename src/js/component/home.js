import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.scss";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	let counter = 0;
	counter += 1;

	function randomColor() {
        let colors = ["pink", "blue", "white", "red", "green", "yellow", "purple"];
		let index = Math.floor(Math.random() * colors.length);
		let toReturn = colors[index];
		colors.splice(index, 1);
		console.log(colors);
		return toReturn;
	}

	return (
		<div className="text-center mt-5 d-flex container-fluid">
			<FontAwesomeIcon className="clock" icon={faClock} />
			<div style={{ color: randomColor() }}>{props.num1}</div>
			<div style={{ color: randomColor() }}>{props.num2}</div>
			<div style={{ color: randomColor() }}>{props.num3}</div>
			<div style={{ color: randomColor() }}>{props.num4}</div>
			<div style={{ color: randomColor() }}>{props.num5}</div>
			<div style={{ color: randomColor() }}>{props.num6}</div>
		</div>
	);
}
Home.propTypes = {
	num1: PropTypes.string,
	num2: PropTypes.string,
	num3: PropTypes.string,
	num4: PropTypes.string,
	num5: PropTypes.string,
	num6: PropTypes.string
};
