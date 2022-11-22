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
			<li className="input-group | top-shadow-light padding-block-end-16 padding-inline-end-16">
				<label className="title" htmlFor="title-search">
					By Title:
				</label>
				<input
					className="input controls | margin-inline-8 margin-block-end-8"
					type="search"
					name="title-search"
					id="title-search"
					onChange={updateTitleSearchWord}
				/>
			</li>
			<li className="input-group | top-shadow-light padding-block-end-16 padding-inline-end-16">
				<label className="title" htmlFor="author-search">
					By Author:
				</label>
				<input
					className="input controls | margin-inline-8 margin-block-end-8"
					type="search"
					name="author-search"
					id="author-search"
					onChange={updateAuthorSearchWord}
				/>
			</li>
		</>
	);
};

export default SearchShelfMenu;
