import React, { useState } from "react";
import MenuToggleBtn from "../utility/MenuToggleBtn";
import FindBookMenu from "./findBooks/FindBookMenu";
import SearchShelfMenu from "./SearchShelfMenu";
import SortShelfMenu from "./sortOptions/SortShelfMenu";
import FilterShelfMenu from "./filters/FilterShelfMenu";

const ShelfControlsAside = (props) => {
	const [isAddBookMenuOpen, setIsAddBookMenuOpen] = useState(false);
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
	const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	return (
		<aside className="box-shadow">
			<MenuToggleBtn
				textProp={"Add Book"}
				setToggleProp={setIsAddBookMenuOpen}
				toggleStateProp={isAddBookMenuOpen}
			/>
			{isAddBookMenuOpen ? (
				<FindBookMenu
					////---find new book
					searchTitleKeyWord={props.searchTitleKeyWord}
					searchAuthorKeyWord={props.searchAuthorKeyWord}
					updateTitleKeyWord={props.updateTitleKeyWord}
					updateAuthorKeyWord={props.updateAuthorKeyWord}
					updateSearchType={props.updateSearchType}
					updateUseSearchKeyWord={props.updateUseSearchKeyWord}
					updateCurrentSearchPageNumber={
						props.updateCurrentSearchPageNumber
					}
				/>
			) : null}

			<MenuToggleBtn
				classProps={"top-shadow margin-block-start-16"}
				textProp={"Search Shelf"}
				setToggleProp={setIsSearchMenuOpen}
				toggleStateProp={isSearchMenuOpen}
			/>
			{isSearchMenuOpen ? (
				<SearchShelfMenu
					////---search shelf
					setSearchTitleFilter={props.setSearchTitleFilter}
					setIsSearchTitleFilter={props.setIsSearchTitleFilter}
					setSearchAuthorFilter={props.setSearchAuthorFilter}
					setIsSearchAuthorFilter={props.setIsSearchAuthorFilter}
				/>
			) : null}
			<MenuToggleBtn
				classProps={"top-shadow margin-block-start-16"}
				textProp={"Sort Shelf"}
				setToggleProp={setIsSortMenuOpen}
				toggleStateProp={isSortMenuOpen}
			/>
			{isSortMenuOpen ? (
				<SortShelfMenu
					savedBooks={props.savedBooks}
					////---sort shelf
					sortBackToDefault={props.sortBackToDefault}
					sortAlphabetically={props.sortAlphabetically}
					sortReverseAlphabetically={props.sortReverseAlphabetically}
					sortByRating={props.sortByRating}
				/>
			) : null}
			<MenuToggleBtn
				classProps={"top-shadow margin-block-start-16"}
				textProp={"Filter Shelf"}
				setToggleProp={setIsFilterMenuOpen}
				toggleStateProp={isFilterMenuOpen}
			/>
			{isFilterMenuOpen ? (
				<FilterShelfMenu
					readStatusFilter={props.readStatusFilter}
					setReadStatusFilter={props.setReadStatusFilter}
					isReadStatusFilter={props.isReadStatusFilter}
					setIsReadStatusFilter={props.setIsReadStatusFilter}
					bookRatingFilter={props.bookRatingFilter}
					setBookRatingFilter={props.setBookRatingFilter}
					isRatingFilter={props.isRatingFilter}
					setIsRatingFilter={props.setIsRatingFilter}
				/>
			) : null}
		</aside>
	);
};

export default ShelfControlsAside;
