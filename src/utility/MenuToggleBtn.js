import React from "react";

const MenuToggleBtn = (props) => {
	const handleClickEvent = () => {
		props.setToggleProp(!props.toggleStateProp);
	};
	return (
		<button
			onMouseLeave={(e) => {
				e.target.blur();
			}}
			onClick={(e) => {
				handleClickEvent();
				e.target.blur();
			}}
			className={`btn aside-toggle${
				props.toggleStateProp ? " open " : " "
			}${props.classProps ? props.classProps : ""}`}
		>
			{props.textProp}
			<span>^</span>
		</button>
	);
};

export default MenuToggleBtn;
