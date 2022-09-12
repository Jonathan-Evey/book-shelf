import React from "react";

const FindBookByAuthor = (props) => {
	const updateAuthorKeyWordEvent = (e) => {
		props.updateAuthorKeyWord(e.target.value);
	};

	return (
		<div className="new-book-search-card">
			<input
				type="search"
				name="new-book-search"
				id="new-book-search"
				onChange={updateAuthorKeyWordEvent}
				placeholder="Search by Author"
			/>
			<button
				onClick={() =>
					props.openFindBookModel(props.searchAuthorKeyWord)
				}
			>
				Find Books
			</button>
		</div>
	);
};

export default FindBookByAuthor;
