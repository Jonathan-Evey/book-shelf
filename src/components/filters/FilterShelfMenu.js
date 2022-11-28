import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
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
			closeReadStatusDropdown();
		} else {
			props.setIsReadStatusFilter(true);
			props.setReadStatusFilter(filterSelectedData);
			closeReadStatusDropdown();
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
		setIsRatingFilterDropdownOpen(false);
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
			<CSSTransition
				in={props.isFilterMenuOpen}
				timeout={{ appear: 150, enter: 150, exit: 300 }}
				classNames="aside-menu-animation"
				appear
				unmountOnExit
			>
				<ul
					className={`card-sort-option z-index-9 ${
						props.bookRatingFilter !== ratingKeys.all
							? " bg-main-850"
							: ""
					}`}
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
						} z-index-9 box-shadow-light`}
						textProp={
							props.readStatusFilter === readStatusKeys.all
								? "Read Status"
								: `Status - ${props.readStatusFilter}`
						}
					/>

					<FilterByReadState
						toggleReadStatusDropdown={toggleReadStatusDropdown}
						closeReadStatusDropdown={closeReadStatusDropdown}
						isReadStatusDropdownOpen={isReadStatusDropdownOpen}
						updateReadStatusFilter={updateReadStatusFilter}
						readStatusFilter={props.readStatusFilter}
					/>
				</ul>
			</CSSTransition>
			<CSSTransition
				in={props.isFilterMenuOpen}
				timeout={{ appear: 300, enter: 300, exit: 300 }}
				classNames="aside-menu-animation"
				appear
				unmountOnExit
			>
				<ul
					className="card-sort-option | bg-main-900 z-index-5"
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
						} box-shadow-light z-index-5`}
						textProp={
							props.bookRatingFilter === ratingKeys.all
								? "Book Rating"
								: `Rated ${props.currentRatingSelected}`
						}
					/>

					<FilterByRating
						updateRatingFilter={updateRatingFilter}
						isRatingFilterDropdownOpen={isRatingFilterDropdownOpen}
						openRatingFilterDropdown={toggleRatingFilterDropdown}
						closeRatingFilterDropdown={closeRatingFilterDropdown}
						currentRatingSelected={props.currentRatingSelected}
					/>
				</ul>
			</CSSTransition>
		</>
	);
};

export default FilterShelfMenu;
