import React from "react";

const FindBookInput = (props) => {
	const handleOnChangeEvent = (e) => {
		props.onChangeProp(e.target.value);
	};

	return (
		<li className="input-group | top-shadow-light padding-block-end-16">
			<div className="input-btn-group | padding-inline-8">
				<label className="margin-block-4" htmlFor={props.inputIdProp}>
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
