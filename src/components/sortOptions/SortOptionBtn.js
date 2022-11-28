import React from "react";

const SortOptionBtn = (props) => {
	const handleClickEvent = () => {
		props.toggleDropdownProp();
	};

	return (
		<li>
			<button
				onMouseLeave={(e) => {
					e.target.blur();
				}}
				onClick={(e) => {
					handleClickEvent();
					// props.closeNoneCurrentMenu(props.textProp);
					e.target.blur();
				}}
				className={`btn aside-toggle sort-option box-shadow-light${
					props.isOpen ? " open " : " "
				}${props.classProps ? props.classProps : ""}`}
			>
				{props.textProp}
				<span>^</span>
			</button>
		</li>
	);
};

export default SortOptionBtn;
