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
					// props.closeNonCurrentMenu(props.textProp);
					e.target.blur();
				}}
				className={`btn aside-toggle${
					props.toggleStateProp ? " open " : " "
				}${props.classProps ? props.classProps : ""}`}
				tabIndex={props.isMobileShelfMenuOpenProp === false ? -1 : 0}
			>
				{props.textProp}
				<span className="menu-arrow">^</span>
			</button>
		</li>
	);
};

export default MenuToggleBtn;
