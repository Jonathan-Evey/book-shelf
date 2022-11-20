import React, { useState } from "react";
import FilterByReadState from "./FilterByReadState";
import FilterByRating from "./FilterByRating";
const FilterShelfMenu = (props) => {
	////---filter menu state
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] =
		useState(false);
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] =
		useState(false);
	////---used to display the rating filter text on the menu
	const [currentRatingSelected, setCurrentRatingSelected] = useState("All");
	////---filter shelf functions
	/////---by read, reading or unread
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
			props.setReadStatusFilter(e.target.textContent);
			openReadStatusDropdown();
		}
	}
	/////---by book rating
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
			props.setBookRatingFilter(e.target.id);
			openRatingFilterDropdown();
		}
	}
	return (
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
				isRatingFilterDropdownOpen={isRatingFilterDropdownOpen}
				openRatingFilterDropdown={openRatingFilterDropdown}
				closeRatingFilterDropdown={closeRatingFilterDropdown}
				currentRatingSelected={currentRatingSelected}
			/>
		</>
	);
};

export default FilterShelfMenu;
