import React, { useState } from "react";
import { readStatusKeys, ratingKeys } from "../../filterKeyObjs";
import FilterOptionBtn from "./FilterOptionBtn";
import FilterByReadState from "./FilterByReadState";
import FilterByRating from "./FilterByRating";
const FilterShelfMenu = (props) => {
	////---filter menu state
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] =
		useState(false);
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] =
		useState(false);

	////---filter by read, reading or unread
	const toggleReadStatusDropdown = () => {
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

	const updateReadStatusFilter = (filterSelectedData) => {
		if (filterSelectedData === readStatusKeys.all) {
			props.setIsReadStatusFilter(false);
			props.setReadStatusFilter(readStatusKeys.all);
			FilterOptionBtn();
		} else {
			props.setIsReadStatusFilter(true);
			props.setReadStatusFilter(filterSelectedData);
			FilterOptionBtn();
		}
	};
	/////---filter by book rating
	const toggleRatingFilterDropdown = () => {
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
	const updateRatingFilter = (filterSelectedData, filterNumber) => {
		props.setCurrentRatingSelected(filterSelectedData);
		if (filterNumber === ratingKeys.all) {
			props.setIsRatingFilter(false);
			props.setBookRatingFilter(ratingKeys.all);
			toggleRatingFilterDropdown();
		} else {
			props.setIsRatingFilter(true);
			props.setBookRatingFilter(filterNumber);
			toggleRatingFilterDropdown();
		}
	};
	return (
		<>
			<ul
				className="card-sort-option"
				onMouseLeave={() => {
					closeReadStatusDropdown();
				}}
			>
				<FilterOptionBtn
					toggleDropdownProp={toggleReadStatusDropdown}
					isOpen={isReadStatusDropdownOpen}
					classProps={`${
						props.readStatusFilter !== readStatusKeys.all
							? "active"
							: ""
					} top-shadow-light`}
					textProp={
						props.readStatusFilter === readStatusKeys.all
							? "Read Status"
							: `Status - ${props.readStatusFilter}`
					}
				/>
				{isReadStatusDropdownOpen ? (
					<FilterByReadState
						toggleReadStatusDropdown={toggleReadStatusDropdown}
						closeReadStatusDropdown={closeReadStatusDropdown}
						isReadStatusDropdownOpen={isReadStatusDropdownOpen}
						updateReadStatusFilter={updateReadStatusFilter}
						readStatusFilter={props.readStatusFilter}
					/>
				) : null}
			</ul>
			<ul
				className="card-sort-option last-option"
				onMouseLeave={() => {
					closeRatingFilterDropdown();
				}}
			>
				<FilterOptionBtn
					toggleDropdownProp={toggleRatingFilterDropdown}
					isOpen={isRatingFilterDropdownOpen}
					classProps={`${
						props.bookRatingFilter !== ratingKeys.all
							? "active"
							: ""
					} last-option top-shadow-light`}
					textProp={
						props.bookRatingFilter === ratingKeys.all
							? "Book Rating"
							: `Rated ${props.currentRatingSelected}`
					}
				/>
				{isRatingFilterDropdownOpen ? (
					<FilterByRating
						updateRatingFilter={updateRatingFilter}
						isRatingFilterDropdownOpen={isRatingFilterDropdownOpen}
						openRatingFilterDropdown={toggleRatingFilterDropdown}
						closeRatingFilterDropdown={closeRatingFilterDropdown}
						currentRatingSelected={props.currentRatingSelected}
					/>
				) : null}
			</ul>
		</>
	);
};

export default FilterShelfMenu;
