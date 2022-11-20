import React from "react";

const FindBookInput = (props) => {
	const handleOnChangeEvent = (e) => {
		props.onChangeProp(e.target.value);
	};

	return (
		<div className="input-btn-group | padding-inline-8">
			<input
				className="input controls"
				type="search"
				name="new-book-search"
				id="new-book-search"
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
	);
};

export default FindBookInput;
