import React from "react";

const FindBookInput = (props) => {
	const handleOnChangeEvent = (e) => {
		props.onChangeProp(e.target.value);
	};

	return (
		<li
			className={`input-group | padding-block-end-8 box-shadow-light ${
				props.liClassProp ? props.liClassProp : ""
			}`}
		>
			<div className="input-btn-group | padding-inline-8">
				<label className="title" htmlFor={props.inputIdProp}>
					{props.labelTextProp}
				</label>
				<input
					className="input controls"
					type="search"
					name={props.inputIdProp}
					id={props.inputIdProp}
					onChange={handleOnChangeEvent}
					onKeyUp={(e) =>
						e.key === "Enter"
							? props.openFindBookModel(props.searchKeyWordProp)
							: false
					}
					placeholder={props.placeholderProp}
					value={props.searchKeyWordProp}
				/>
				<button
					className="btn find-book | margin-block-8"
					onClick={(e) => {
						props.openFindBookModel(props.searchKeyWordProp);
						e.target.blur();
					}}
				>
					Search
				</button>
			</div>
		</li>
	);
};

export default FindBookInput;
