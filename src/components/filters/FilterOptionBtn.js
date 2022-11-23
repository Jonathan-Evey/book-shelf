import React from "react";

const FilterOptionBtn = (props) => {
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
					e.target.blur();
				}}
				className={`btn aside-toggle sort-option${
					props.isOpen ? " open " : " "
				}${props.classProps ? props.classProps : ""}`}
			>
				{props.textProp}
				<span>^</span>
			</button>
		</li>
	);
};

export default FilterOptionBtn;
