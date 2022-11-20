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
			<div className="input-group | top-shadow margin-block-start-16 padding-inline-end-16">
				<p className="title">By Title:</p>
				{/* <label
					
					htmlFor="title-search"
				>
					Book Title:
				</label> */}
				<input
					className="input controls | margin-inline-8"
					type="search"
					name="title-search"
					id="title-search"
					onChange={updateTitleSearchWord}
				/>
			</div>
			<div className="input-group | top-shadow margin-block-start-16 padding-inline-end-16">
				<p className="title">By Author:</p>
				{/* <label htmlFor="author-search">
					Book Author:
				</label> */}
				<input
					className="input controls | margin-inline-8"
					type="search"
					name="author-search"
					id="author-search"
					onChange={updateAuthorSearchWord}
				/>
			</div>
		</>
	);
};

export default SearchShelfMenu;
