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
	return (
		<aside>
			<ul>
				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							textProp={"Add Book"}
							classProps={"box-shadow"}
							setToggleProp={setIsAddBookMenuOpen}
							toggleStateProp={isAddBookMenuOpen}
							closeNonCurrentMenu={closeNonCurrentMenu}
						/>
						{isAddBookMenuOpen ? (
							<FindBookMenu
								////---find new book
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
						) : null}
					</ul>
				</li>
				<li className="card-control-menu">
					<ul>
						<MenuToggleBtn
							classProps={"box-shadow"}
							textProp={"Search Shelf"}
							setToggleProp={setIsSearchMenuOpen}
							toggleStateProp={isSearchMenuOpen}
							closeNonCurrentMenu={closeNonCurrentMenu}
						/>
						{isSearchMenuOpen ? (
							<SearchShelfMenu
								////---search shelf
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
						) : null}
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
							closeNonCurrentMenu={closeNonCurrentMenu}
						/>
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
							}last-toggle box-shadow`}
							textProp={"Filter Shelf"}
							setToggleProp={setIsFilterMenuOpen}
							toggleStateProp={isFilterMenuOpen}
							closeNonCurrentMenu={closeNonCurrentMenu}
						/>
						{isFilterMenuOpen ? (
							<FilterShelfMenu
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
						) : null}
					</ul>
				</li>
			</ul>
		</aside>
	);
};

export default ShelfControlsAside;
