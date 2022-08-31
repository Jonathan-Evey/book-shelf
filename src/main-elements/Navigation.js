import React, { useState } from "react";
import SearchSavedBooks from "../components/SearchSavedBooks";
import SortByTitle from "../components/sortOptions/SortByTitle";
import SortBtAuthor from "../components/sortOptions/SortBtAuthor";
import FilterByReadState from "../components/filters/FilterByReadState";
import FilterByRating from "../components/filters/FilterByRating";

const Navigation = (props) => {
	//------------------------------------------------------sort menu state
	const [isTitleSortOpen, setIsTitleSortOpen] = useState(false);
	const [currentTitleSortDisplayText, setCurrentTitleSortDisplayText] =
		useState("Titles");
	const [isAuthorSortOpen, setIsAuthorSortOpen] = useState(false);
	const [currentAuthorSortDisplayText, setCurrentAuthorSortDisplayText] =
		useState("Authors");

	//------------------------------------------------------filter menu state
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] =
		useState(false);
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] =
		useState(false);
	//-------------------------------used to display the rating filter text on the menu
	const [currentRatingSelected, setCurrentRatingSelected] = useState("All");

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
				<SearchSavedBooks
					updateAuthorSearchWord={updateAuthorSearchWord}
					updateTitleSearchWord={updateTitleSearchWord}
				/>
				<p>Sort by</p>
				<SortByTitle
					isTitleSortOpen={isTitleSortOpen}
					currentTitleSortDisplayText={currentTitleSortDisplayText}
					openTitleSortDropdown={openTitleSortDropdown}
					updateTitleSortDisplayText={updateTitleSortDisplayText}
				/>
				<SortBtAuthor
					isAuthorSortOpen={isAuthorSortOpen}
					currentAuthorSortDisplayText={currentAuthorSortDisplayText}
					openAuthorSortDropdown={openAuthorSortDropdown}
					updateAuthorSortDisplayText={updateAuthorSortDisplayText}
				/>
				<p>Filter by</p>
				<FilterByReadState
					openReadStatusDropdown={openReadStatusDropdown}
					isReadStatusDropdownOpen={isReadStatusDropdownOpen}
					updateReadStatusFilter={updateReadStatusFilter}
					readStatusFilter={props.readStatusFilter}
				/>
				<FilterByRating
					updateRatingFilter={updateRatingFilter}
					isRatingFilterDropdownOpen={isRatingFilterDropdownOpen}
					openRatingFilterDropdown={openRatingFilterDropdown}
					currentRatingSelected={currentRatingSelected}
				/>
			</fieldset>
		</div>
	);
};

export default Navigation;
