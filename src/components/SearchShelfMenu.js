import React from "react";

const SearchShelfMenu = (props) => {
	////---search shelf functions
	//////---title
	const updateTitleSearchWord = (e) => {
		if (e.target.value === "") {
			props.setIsSearchTitleFilter(false);
			props.setSearchTitleFilter(e.target.value);
		} else {
			props.setIsSearchTitleFilter(true);
			props.setSearchTitleFilter(e.target.value);
		}
	};
	//////---author
	const updateAuthorSearchWord = (e) => {
		if (e.target.value === "") {
			props.setIsSearchAuthorFilter(false);
			props.setSearchAuthorFilter(e.target.value);
		} else {
			props.setIsSearchAuthorFilter(true);
			props.setSearchAuthorFilter(e.target.value);
		}
	};

	return (
		<>
			<label htmlFor="title-search">Book Title:</label>
			<input
				className="search-input"
				type="search"
				name="title-search"
				id="title-search"
				onChange={updateTitleSearchWord}
			/>
			<label htmlFor="author-search">Book Author:</label>
			<input
				className="search-input"
				type="search"
				name="author-search"
				id="author-search"
				onChange={updateAuthorSearchWord}
			/>
		</>
	);
};

export default SearchShelfMenu;
