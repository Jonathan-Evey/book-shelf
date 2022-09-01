import React from "react";

const FindBookByAuthor = () => {
	return (
		<div className="new-book-search-card">
			<input
				type="search"
				name="new-book-search"
				id="new-book-search"
				// onChange={updateKeyWordEvent}
				placeholder="Search by Author"
			/>
			<button /* onClick={openFindBookModel} */>Find Books</button>
		</div>
	);
};

export default FindBookByAuthor;
