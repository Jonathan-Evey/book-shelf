import React, { useState } from "react";
import { readStatusKeys, ratingKeys } from "../filterKeyObjs";
import MenuToggleBtn from "../utility/MenuToggleBtn";
import FindBookMenu from "./findBooks/FindBookMenu";
import SearchShelfMenu from "./SearchShelfMenu";
import SortShelfMenu from "./sortOptions/SortShelfMenu";
import FilterShelfMenu from "./filters/FilterShelfMenu";

const ShelfControlsAside = (props) => {
	const [isAddBookMenuOpen, setIsAddBookMenuOpen] = useState(false);
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
	const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
	const [isSortActive, setIsSortActive] = useState(false);

	const [currentTitleSortDisplayText, setCurrentTitleSortDisplayText] =
		useState("Title");
	const [currentAuthorSortDisplayText, setCurrentAuthorSortDisplayText] =
		useState("Author");
	const [currentRatingSortDisplayText, setCurrentRatingSortDisplayText] =
		useState("Rating");
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	const [currentRatingSelected, setCurrentRatingSelected] = useState("All");

	const closeNonCurrentMenu = (textProp) => {
		if (textProp === "Add Book") {
			setIsSearchMenuOpen(false);
			setIsSortMenuOpen(false);
			setIsFilterMenuOpen(false);
			return;
		}
		if (textProp === "Search Shelf") {
			setIsAddBookMenuOpen(false);
			setIsSortMenuOpen(false);
			setIsFilterMenuOpen(false);
			return;
		}
		if (textProp === "Sort Shelf") {
			setIsAddBookMenuOpen(false);
			setIsSearchMenuOpen(false);
			setIsFilterMenuOpen(false);
			return;
		}
		if (textProp === "Filter Shelf") {
			setIsAddBookMenuOpen(false);
			setIsSearchMenuOpen(false);
			setIsSortMenuOpen(false);
		}
	};

	const handleEvent = () => {
		props.setIsMobileShelfMenuOpen(false);
	};

	return (
		<aside
			className={`aside-book-container mobile-aside ${
				props.isMobileShelfMenuOpen ? "open" : "closed"
			}`}
			aria-hidden={props.isMobileShelfMenuOpen ? false : true}
		>
			<ul>
				<li className="display-hidden-web">
					<button
						className="btn close-menu-x"
						onClick={() => {
							handleEvent();
						}}
					>
						<span
							className={`bar top ${
								props.isMobileShelfMenuOpen ? "open" : "closed"
							}`}
						></span>
						<span
							className={`bar bottom ${
								props.isMobileShelfMenuOpen ? "open" : "closed"
							}`}
						></span>
					</button>
				</li>

				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							textProp={"Add Book"}
							classProps={"box-shadow z-index-10"}
							setToggleProp={setIsAddBookMenuOpen}
							toggleStateProp={isAddBookMenuOpen}
							closeNonCurrentMenu={closeNonCurrentMenu}
							isMobileShelfMenuOpenProp={
								props.isMobileShelfMenuOpen
							}
						/>
						<div className="wrap-overflow-hidden">
							<FindBookMenu
								////---find new book
								isAddBookMenuOpen={isAddBookMenuOpen}
								searchTitleKeyWord={props.searchTitleKeyWord}
								searchAuthorKeyWord={props.searchAuthorKeyWord}
								updateTitleKeyWord={props.updateTitleKeyWord}
								updateAuthorKeyWord={props.updateAuthorKeyWord}
								updateSearchType={props.updateSearchType}
								updateUseSearchKeyWord={
									props.updateUseSearchKeyWord
								}
								updateCurrentSearchPageNumber={
									props.updateCurrentSearchPageNumber
								}
							/>
						</div>
					</ul>
				</li>
				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							classProps={"box-shadow z-index-10"}
							textProp={"Search Shelf"}
							setToggleProp={setIsSearchMenuOpen}
							toggleStateProp={isSearchMenuOpen}
							closeNonCurrentMenu={closeNonCurrentMenu}
							isMobileShelfMenuOpenProp={
								props.isMobileShelfMenuOpen
							}
						/>

						<div className="wrap-overflow-hidden">
							<SearchShelfMenu
								////---search shelf
								isSearchMenuOpen={isSearchMenuOpen}
								setSearchTitleFilter={
									props.setSearchTitleFilter
								}
								setIsSearchTitleFilter={
									props.setIsSearchTitleFilter
								}
								setSearchAuthorFilter={
									props.setSearchAuthorFilter
								}
								setIsSearchAuthorFilter={
									props.setIsSearchAuthorFilter
								}
							/>
						</div>
					</ul>
				</li>
				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							classProps={`${
								isSortActive && !isSortMenuOpen ? "active " : ""
							}box-shadow z-index-10`}
							textProp={"Sort Shelf"}
							setToggleProp={setIsSortMenuOpen}
							toggleStateProp={isSortMenuOpen}
							isMobileShelfMenuOpenProp={
								props.isMobileShelfMenuOpen
							}
						/>
						<div className="wrap-overflow-hidden">
							<SortShelfMenu
								isSortMenuOpen={isSortMenuOpen}
								savedBooks={props.savedBooks}
								////---sort shelf
								setIsSortActive={setIsSortActive}
								currentTitleSortDisplayText={
									currentTitleSortDisplayText
								}
								setCurrentTitleSortDisplayText={
									setCurrentTitleSortDisplayText
								}
								currentAuthorSortDisplayText={
									currentAuthorSortDisplayText
								}
								setCurrentAuthorSortDisplayText={
									setCurrentAuthorSortDisplayText
								}
								currentRatingSortDisplayText={
									currentRatingSortDisplayText
								}
								setCurrentRatingSortDisplayText={
									setCurrentRatingSortDisplayText
								}
								sortBackToDefault={props.sortBackToDefault}
								sortAlphabetically={props.sortAlphabetically}
								sortReverseAlphabetically={
									props.sortReverseAlphabetically
								}
								sortByRating={props.sortByRating}
							/>
						</div>
					</ul>
				</li>
				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							classProps={`${
								(props.readStatusFilter !==
									readStatusKeys.all ||
									props.bookRatingFilter !==
										ratingKeys.all) &&
								!isFilterMenuOpen
									? "active "
									: ""
							}z-index-10 box-shadow`}
							textProp={"Filter Shelf"}
							setToggleProp={setIsFilterMenuOpen}
							toggleStateProp={isFilterMenuOpen}
							isMobileShelfMenuOpenProp={
								props.isMobileShelfMenuOpen
							}
						/>
						<div className="wrap-overflow-hidden">
							<FilterShelfMenu
								isFilterMenuOpen={isFilterMenuOpen}
								readStatusFilter={props.readStatusFilter}
								setReadStatusFilter={props.setReadStatusFilter}
								isReadStatusFilter={props.isReadStatusFilter}
								setIsReadStatusFilter={
									props.setIsReadStatusFilter
								}
								bookRatingFilter={props.bookRatingFilter}
								setBookRatingFilter={props.setBookRatingFilter}
								isRatingFilter={props.isRatingFilter}
								setIsRatingFilter={props.setIsRatingFilter}
								currentRatingSelected={currentRatingSelected}
								setCurrentRatingSelected={
									setCurrentRatingSelected
								}
							/>
						</div>
					</ul>
				</li>
			</ul>
		</aside>
	);
};

export default ShelfControlsAside;
