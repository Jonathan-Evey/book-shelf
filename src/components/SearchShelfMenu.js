import React from "react";
import { CSSTransition } from "react-transition-group";

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
			<CSSTransition
				in={props.isSearchMenuOpen}
				timeout={{ appear: 200, enter: 200, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<li className="input-group | box-shadow-light padding-block-end-8 padding-inline-end-16 z-index-9">
					<label
						className="title | padding-inline-start-8"
						htmlFor="title-search"
					>
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
			</CSSTransition>
			<CSSTransition
				in={props.isSearchMenuOpen}
				timeout={{ appear: 400, enter: 400, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<li className="input-group | box-shadow-light padding-block-end-8 padding-inline-end-16 z-index-8">
					<label
						className="title | padding-inline-start-8"
						htmlFor="author-search"
					>
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
			</CSSTransition>
		</>
	);
};

export default SearchShelfMenu;
