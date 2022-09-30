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
				onKeyUp={(e) =>
					e.key === "Enter"
						? props.openFindBookModel(props.searchTitleKeyWord)
						: false
				}
				placeholder="Find by Title"
				value={props.searchTitleKeyWord}
			/>
			<button
				className="find-book-btn"
				onClick={() =>
					props.openFindBookModel(props.searchTitleKeyWord)
				}
			>
				Search for Book
			</button>
		</div>
	);
};

export default FindBookByTitle;
