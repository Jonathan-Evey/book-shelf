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
				onKeyUp={(e) =>
					e.key === "Enter"
						? props.openFindBookModel(props.searchAuthorKeyWord)
						: false
				}
				placeholder="Find by Author"
				value={props.searchAuthorKeyWord}
			/>
			<button
				className="find-book-btn"
				onClick={() =>
					props.openFindBookModel(props.searchAuthorKeyWord)
				}
			>
				Search for Book
			</button>
		</div>
	);
};

export default FindBookByAuthor;
