import React from "react";

const FilterSubOptionBtn = (props) => {
	const handleClickEvent = () => {
		if (props.filterNumberProp) {
			props.clickEventProp(
				props.clickEventDataProp,
				props.filterNumberProp
			);
			return;
		}
		props.clickEventProp(props.clickEventDataProp);
	};
	const handelBlurEvent = () => {
		if (props.onBlurProp) {
			props.onBlurProp();
		}
		return;
	};
	return (
		<li
			className={`card-sort-option sub ${
				props.liClassProps ? props.liClassProps : ""
			}`}
		>
			<button
				onMouseLeave={(e) => {
					e.target.blur();
				}}
				onBlur={() => {
					handelBlurEvent();
				}}
				onClick={(e) => {
					handleClickEvent();
					e.target.blur();
				}}
				className={`btn aside-toggle sort-option sub ${
					props.classProps ? props.classProps : ""
				}`}
			>
				{props.textProp}
			</button>
		</li>
	);
};

export default FilterSubOptionBtn;
