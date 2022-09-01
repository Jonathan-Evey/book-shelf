import React, { useState } from "react";

const Header = (props) => {
	// const updateKeyWordEvent = (e) => {
	// 	props.updateKeyWord(e.target.value);
	// };

	return (
		<header>
			<div className="title-container">
				<h1>My Bookshelf</h1>
			</div>
			<button>User Menu</button>
		</header>
	);
};

export default Header;
