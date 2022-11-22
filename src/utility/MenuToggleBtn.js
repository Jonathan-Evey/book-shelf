import React from "react";

const MenuToggleBtn = (props) => {
	const handleClickEvent = () => {
		props.setToggleProp(!props.toggleStateProp);
	};
	return (
		<li>
			<button
				onMouseLeave={(e) => {
					e.target.blur();
				}}
				onClick={(e) => {
					handleClickEvent();
					props.closeNoneCurrentMenu(props.textProp);
					e.target.blur();
				}}
				className={`btn aside-toggle${
					props.toggleStateProp ? " open " : " "
				}${props.classProps ? props.classProps : ""}`}
			>
				{props.textProp}
				<span>^</span>
			</button>
		</li>
	);
};

export default MenuToggleBtn;
