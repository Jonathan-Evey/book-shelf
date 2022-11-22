import React from "react";

const SortSubOptionBtn = (props) => {
	const handleClickEvent = () => {
		props.clickEventProp(props.clickEventDataProp);
	};
	return (
		<li className="card-sort-option sub">
			<button
				onMouseLeave={(e) => {
					e.target.blur();
				}}
				onClick={(e) => {
					handleClickEvent();
					// props.closeNoneCurrentMenu(props.textProp);
					e.target.blur();
				}}
				className={`btn aside-toggle sort-option sub${
					props.isOpen ? " open " : " "
				}${props.classProps ? props.classProps : ""}`}
			>
				{props.textProp}
			</button>
		</li>
	);
};

export default SortSubOptionBtn;
