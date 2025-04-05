import React, { useState } from "react";

import Light from './Light';


const Home = () => {

	const [selected, setSelected] = useState("");

	const handleClick = (color) => {
		setSelected(color);
	}
	// console.log(selected)
	return (
		<div className="position-fixed top-50 start-50 translate-middle d-flex flex-column justify-content-evenly align-items-center bg-dark stoplight">
			<Light color="bg-danger" handleClick={handleClick} selected={selected} />
			<Light color="bg-warning" handleClick={handleClick} selected={selected} />
			<Light color="bg-success" handleClick={handleClick} selected={selected} />
		</div>
	);
};

export default Home;