import React, { useState } from "react";
import FindBookByTitle from "../components/FindBookByTitle";
import FindBookByAuthor from "../components/FindBookByAuthor";
import SearchSavedBooks from "../components/SearchSavedBooks";
import SortByTitle from "../components/sortOptions/SortByTitle";
import SortBtAuthor from "../components/sortOptions/SortBtAuthor";
import FilterByReadState from "../components/filters/FilterByReadState";
import FilterByRating from "../components/filters/FilterByRating";

const Navigation = (props) => {
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

	//------------------------------------------------------sort menu state
	const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
	const [isTitleSortOpen, setIsTitleSortOpen] = useState(false);
	const [currentTitleSortDisplayText, setCurrentTitleSortDisplayText] =
		useState("Titles");
	const [isAuthorSortOpen, setIsAuthorSortOpen] = useState(false);
	const [currentAuthorSortDisplayText, setCurrentAuthorSortDisplayText] =
		useState("Authors");

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
		if (keyWord === props.searchTitleKeyWord) {
			props.updateUseSearchKeyWord(props.searchTitleKeyWord);
			props.updateSearchType("intitle");
			console.log("clicked Title");
			console.log(props.searchTitleKeyWord);
		}
		if (keyWord === props.searchAuthorKeyWord) {
			props.updateUseSearchKeyWord(props.searchAuthorKeyWord);
			props.updateSearchType("inauthor");
			console.log("clicked Author");
			console.log(props.searchTitleKeyWord);
		}
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

	const updateTitleSortDisplayText = (newTextValue) => {
		setIsTitleSortOpen(false);
		setCurrentTitleSortDisplayText(newTextValue);
	};
	//-----------------------------sort books functions
	//-----------------------------------------------by author
	const openAuthorSortDropdown = () => {
		setIsAuthorSortOpen(!isAuthorSortOpen);
	};

	const updateAuthorSortDisplayText = (newTextValue) => {
		setIsAuthorSortOpen(false);
		setCurrentAuthorSortDisplayText(newTextValue);
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
					onClick={() => setIsSearchMenuOpen(!isSearchMenuOpen)}
				>
					Search for
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
					onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}
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
							updateAuthorSortDisplayText={
								updateAuthorSortDisplayText
							}
						/>
					</>
				) : null}
				<button
					className="toggle-submenu-btn"
					onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
				>
					Filter by
					<span>^</span>
				</button>
				{isFilterMenuOpen ? (
					<>
						<FilterByReadState
							openReadStatusDropdown={openReadStatusDropdown}
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
							currentRatingSelected={currentRatingSelected}
						/>
					</>
				) : null}
			</fieldset>
		</div>
	);
};

export default Navigation;
