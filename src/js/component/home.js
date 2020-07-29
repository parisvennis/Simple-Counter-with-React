import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	var counter = 0;
	counter += 1;

	return (
		<div className="text-center mt-5">
			<div>0</div>
			<div>0</div>
			<div>0</div>
			<div>0</div>
			<div>0</div>
			<div>0</div>
			<div>0</div>
		</div>
	);
}
