import React, { useState } from "react";
import FindBookByTitle from "../components/FindBookByTitle";
import FindBookByAuthor from "../components/FindBookByAuthor";
import SearchSavedBooks from "../components/SearchSavedBooks";
import SortBtRating from "../components/sortOptions/SortByRating";
import SortByTitle from "../components/sortOptions/SortByTitle";
import SortBtAuthor from "../components/sortOptions/SortBtAuthor";
import FilterByReadState from "../components/filters/FilterByReadState";
import FilterByRating from "../components/filters/FilterByRating";
import {
	titleSortOptionKeys,
	authorSortOptionKeys,
	ratingSortOptionKeys,
} from "../SortKeys";

const Navigation = (props) => {
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

	//------------------------------------------------------sort menu state
	const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
	const [isTitleSortOpen, setIsTitleSortOpen] = useState(false);
	const [currentTitleSortDisplayText, setCurrentTitleSortDisplayText] =
		useState("Title");
	const [isAuthorSortOpen, setIsAuthorSortOpen] = useState(false);
	const [currentAuthorSortDisplayText, setCurrentAuthorSortDisplayText] =
		useState("Author");
	const [isRatingSortOpen, setIsRatingSortOpen] = useState(false);
	const [currentRatingSortDisplayText, setCurrentRatingSortDisplayText] =
		useState("Rating");

	//------------------------------------------------------filter menu state
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] =
		useState(false);
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] =
		useState(false);
	//-------------------------------used to display the rating filter text on the menu
	const [currentRatingSelected, setCurrentRatingSelected] = useState("All");

	//------------------------------find new books and display
	function openFindBookModel(keyWord) {
		props.updateCurrentSearchPageNumber(0);
		if (keyWord === props.searchTitleKeyWord) {
			let searchTerms = props.searchTitleKeyWord.replaceAll(" ", "+");
			props.updateUseSearchKeyWord(searchTerms);
			props.updateSearchType("intitle");
			console.log("clicked Title");
			console.log(props.searchTitleKeyWord);
		}
		if (keyWord === props.searchAuthorKeyWord) {
			let searchTerms = props.searchAuthorKeyWord.replace(" ", "+");
			console.log(searchTerms);
			console.log(props.searchAuthorKeyWord);

			props.updateUseSearchKeyWord(searchTerms);
			props.updateSearchType("inauthor");
			console.log("clicked Author");
			console.log(props.searchTitleKeyWord);
		}
		props.updateTitleKeyWord("");
		props.updateAuthorKeyWord("");
		let model = document.getElementById("find-book");
		return model.showModal();
	}

	//------------------------------search books by title functions
	const updateTitleSearchWord = (e) => {
		if (e.target.value === "") {
			props.setIsSearchTitleFilter(false);
			props.setSearchTitleFilter(e.target.value);
		} else {
			props.setIsSearchTitleFilter(true);
			props.setSearchTitleFilter(e.target.value);
		}
	};

	//------------------------------search books by author functions
	const updateAuthorSearchWord = (e) => {
		if (e.target.value === "") {
			props.setIsSearchAuthorFilter(false);
			props.setSearchAuthorFilter(e.target.value);
		} else {
			props.setIsSearchAuthorFilter(true);
			props.setSearchAuthorFilter(e.target.value);
		}
	};

	//-----------------------------sort books functions
	//-----------------------------------------------by title
	const openTitleSortDropdown = () => {
		setIsTitleSortOpen(!isTitleSortOpen);
	};

	const closeTitleSortDropdown = () => {
		setIsTitleSortOpen(false);
	};

	const updateTitleSortDisplayText = (newTextValue) => {
		setIsTitleSortOpen(false);
		setCurrentTitleSortDisplayText(newTextValue);
		setCurrentAuthorSortDisplayText(authorSortOptionKeys.removeSort);
		setCurrentRatingSortDisplayText(ratingSortOptionKeys.removeSort);
		if (newTextValue === titleSortOptionKeys.alphabetically) {
			props.sortAlphabetically(
				props.savedBooks,
				titleSortOptionKeys.sortType
			);
		}
		if (newTextValue === titleSortOptionKeys.reverseAlphabetically) {
			props.sortReverseAlphabetically(
				props.savedBooks,
				titleSortOptionKeys.sortType
			);
		}
		if (newTextValue === titleSortOptionKeys.removeSort) {
			props.sortBackToDefault(
				props.savedBooks,
				titleSortOptionKeys.removeSort
			);
		}
	};

	//-----------------------------sort books functions
	//-----------------------------------------------by author
	const openAuthorSortDropdown = () => {
		setIsAuthorSortOpen(!isAuthorSortOpen);
	};

	const closeAuthorSortDropdown = () => {
		setIsAuthorSortOpen(false);
	};

	const updateAuthorSortDisplayText = (newTextValue) => {
		setIsAuthorSortOpen(false);
		setCurrentTitleSortDisplayText(titleSortOptionKeys.removeSort);
		setCurrentAuthorSortDisplayText(newTextValue);
		setCurrentRatingSortDisplayText(ratingSortOptionKeys.removeSort);
		if (newTextValue === authorSortOptionKeys.alphabetically) {
			console.log(`author sort ${newTextValue}`);
			props.sortAlphabetically(
				props.savedBooks,
				authorSortOptionKeys.sortType
			);
		}
		if (newTextValue === authorSortOptionKeys.reverseAlphabetically) {
			console.log(`author sort ${newTextValue}`);
			props.sortReverseAlphabetically(
				props.savedBooks,
				authorSortOptionKeys.sortType
			);
		}
		if (newTextValue === authorSortOptionKeys.removeSort) {
			props.sortBackToDefault(
				props.savedBooks,
				authorSortOptionKeys.removeSort
			);
		}
	};

	//-----------------------------sort books functions
	//-----------------------------------------------by rating
	const openRatingSortDropdown = () => {
		setIsRatingSortOpen(!isRatingSortOpen);
	};

	const closeRatingSortDropdown = () => {
		setIsRatingSortOpen(false);
	};

	const updateRatingSortDisplayText = (newTextValue) => {
		setIsRatingSortOpen(false);
		setCurrentTitleSortDisplayText(titleSortOptionKeys.removeSort);
		setCurrentAuthorSortDisplayText(authorSortOptionKeys.removeSort);
		setCurrentRatingSortDisplayText(newTextValue);
		props.sortByRating(props.savedBooks, newTextValue);
	};

	//-----------------------------filter books functions
	//---------------------------------by read, reading or unread
	const openReadStatusDropdown = () => {
		if (isReadStatusDropdownOpen) {
			setIsReadStatusDropdownOpen(false);
		} else {
			setIsRatingFilterDropdownOpen(false);
			setIsReadStatusDropdownOpen(true);
		}
	};

	const closeReadStatusDropdown = () => {
		setIsReadStatusDropdownOpen(false);
	};

	function updateReadStatusFilter(e) {
		if (e.target.textContent === "All") {
			props.setIsReadStatusFilter(false);
			props.setReadStatusFilter("All");
			openReadStatusDropdown();
		} else {
			props.setIsReadStatusFilter(true);
			console.log(e.target.textContent);
			props.setReadStatusFilter(e.target.textContent);
			openReadStatusDropdown();
		}
	}
	//-----------------------------filter books functions
	//-----------------------------------------by book rating
	const openRatingFilterDropdown = () => {
		if (isRatingFilterDropdownOpen) {
			setIsRatingFilterDropdownOpen(false);
		} else {
			setIsReadStatusDropdownOpen(false);
			setIsRatingFilterDropdownOpen(true);
		}
	};

	const closeRatingFilterDropdown = () => {
		setIsRatingFilterDropdownOpen();
	};
	function updateRatingFilter(e) {
		setCurrentRatingSelected(e.target.textContent);
		if (e.target.textContent === "All") {
			props.setIsRatingFilter(false);
			props.setBookRatingFilter("All");
			openRatingFilterDropdown();
		} else {
			props.setIsRatingFilter(true);
			console.log(parseInt(e.target.id));
			props.setBookRatingFilter(e.target.id);
			openRatingFilterDropdown();
		}
	}

	return (
		<div
			className={`filter-menu ${
				props.isFilterMenuOpen ? "open" : "closed"
			}`}
		>
			<fieldset className="filter-container-fieldset">
				<p>Add New Book</p>

				<FindBookByTitle
					searchTitleKeyWord={props.searchTitleKeyWord}
					updateTitleKeyWord={props.updateTitleKeyWord}
					openFindBookModel={openFindBookModel}
				/>
				<FindBookByAuthor
					searchAuthorKeyWord={props.searchAuthorKeyWord}
					updateAuthorKeyWord={props.updateAuthorKeyWord}
					openFindBookModel={openFindBookModel}
				/>

				<button
					className="toggle-submenu-btn"
					onMouseLeave={(e) => {
						e.target.blur();
					}}
					onClick={(e) => {
						setIsSearchMenuOpen(!isSearchMenuOpen);
						e.target.blur();
					}}
				>
					Search Shelf
					<span>^</span>
				</button>
				{isSearchMenuOpen ? (
					<SearchSavedBooks
						updateAuthorSearchWord={updateAuthorSearchWord}
						updateTitleSearchWord={updateTitleSearchWord}
					/>
				) : null}
				<button
					className="toggle-submenu-btn"
					onMouseLeave={(e) => {
						e.target.blur();
					}}
					onClick={(e) => {
						setIsSortMenuOpen(!isSortMenuOpen);
						e.target.blur();
					}}
				>
					Sort By
					<span>^</span>
				</button>
				{isSortMenuOpen ? (
					<>
						<SortByTitle
							isTitleSortOpen={isTitleSortOpen}
							currentTitleSortDisplayText={
								currentTitleSortDisplayText
							}
							openTitleSortDropdown={openTitleSortDropdown}
							closeTitleSortDropdown={closeTitleSortDropdown}
							updateTitleSortDisplayText={
								updateTitleSortDisplayText
							}
						/>
						<SortBtAuthor
							isAuthorSortOpen={isAuthorSortOpen}
							currentAuthorSortDisplayText={
								currentAuthorSortDisplayText
							}
							openAuthorSortDropdown={openAuthorSortDropdown}
							closeAuthorSortDropdown={closeAuthorSortDropdown}
							updateAuthorSortDisplayText={
								updateAuthorSortDisplayText
							}
						/>
						<SortBtRating
							isRatingSortOpen={isRatingSortOpen}
							currentRatingSortDisplayText={
								currentRatingSortDisplayText
							}
							openRatingSortDropdown={openRatingSortDropdown}
							closeRatingSortDropdown={closeRatingSortDropdown}
							updateRatingSortDisplayText={
								updateRatingSortDisplayText
							}
						/>
					</>
				) : null}
				<button
					className="toggle-submenu-btn"
					onMouseLeave={(e) => {
						e.target.blur();
					}}
					onClick={(e) => {
						setIsFilterMenuOpen(!isFilterMenuOpen);
						e.target.blur();
					}}
				>
					Filter by
					<span>^</span>
				</button>
				{isFilterMenuOpen ? (
					<>
						<FilterByReadState
							openReadStatusDropdown={openReadStatusDropdown}
							closeReadStatusDropdown={closeReadStatusDropdown}
							isReadStatusDropdownOpen={isReadStatusDropdownOpen}
							updateReadStatusFilter={updateReadStatusFilter}
							readStatusFilter={props.readStatusFilter}
						/>
						<FilterByRating
							updateRatingFilter={updateRatingFilter}
							isRatingFilterDropdownOpen={
								isRatingFilterDropdownOpen
							}
							openRatingFilterDropdown={openRatingFilterDropdown}
							closeRatingFilterDropdown={
								closeRatingFilterDropdown
							}
							currentRatingSelected={currentRatingSelected}
						/>
					</>
				) : null}
			</fieldset>
		</div>
	);
};

export default Navigation;
