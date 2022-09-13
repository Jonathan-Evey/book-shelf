import React from "react";

const FindBookByTitle = (props) => {
	const updateTitleKeyWordEvent = (e) => {
		props.updateTitleKeyWord(e.target.value);
	};

	return (
		<div className="new-book-search-card">
			<input
				type="search"
				name="new-book-search"
				id="new-book-search"
				onChange={updateTitleKeyWordEvent}
				placeholder="Find by Title"
				value={props.searchTitleKeyWord}
			/>
			<button
				onClick={() =>
					props.openFindBookModel(props.searchTitleKeyWord)
				}
			>
				Find Book
			</button>
		</div>
	);
};

export default FindBookByTitle;
