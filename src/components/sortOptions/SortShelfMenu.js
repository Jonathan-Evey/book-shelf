import React, { useState } from "react";
import {
	titleSortOptionKeys,
	authorSortOptionKeys,
	ratingSortOptionKeys,
} from "../../SortKeys";
import SortByTitle from "./SortByTitle";
import SortBtAuthor from "./SortBtAuthor";
import SortBtRating from "./SortByRating";

const SortShelfMenu = (props) => {
	const [isTitleSortOpen, setIsTitleSortOpen] = useState(false);
	const [currentTitleSortDisplayText, setCurrentTitleSortDisplayText] =
		useState("Title");
	const [isAuthorSortOpen, setIsAuthorSortOpen] = useState(false);
	const [currentAuthorSortDisplayText, setCurrentAuthorSortDisplayText] =
		useState("Author");
	const [isRatingSortOpen, setIsRatingSortOpen] = useState(false);
	const [currentRatingSortDisplayText, setCurrentRatingSortDisplayText] =
		useState("Rating");
	////---sort shelf functions
	//////---by title
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
	//////---by author
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
			props.sortAlphabetically(
				props.savedBooks,
				authorSortOptionKeys.sortType
			);
		}
		if (newTextValue === authorSortOptionKeys.reverseAlphabetically) {
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
	//////----by rating
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
	return (
		<>
			<SortByTitle
				isTitleSortOpen={isTitleSortOpen}
				currentTitleSortDisplayText={currentTitleSortDisplayText}
				openTitleSortDropdown={openTitleSortDropdown}
				closeTitleSortDropdown={closeTitleSortDropdown}
				updateTitleSortDisplayText={updateTitleSortDisplayText}
			/>
			<SortBtAuthor
				isAuthorSortOpen={isAuthorSortOpen}
				currentAuthorSortDisplayText={currentAuthorSortDisplayText}
				openAuthorSortDropdown={openAuthorSortDropdown}
				closeAuthorSortDropdown={closeAuthorSortDropdown}
				updateAuthorSortDisplayText={updateAuthorSortDisplayText}
			/>
			<SortBtRating
				isRatingSortOpen={isRatingSortOpen}
				currentRatingSortDisplayText={currentRatingSortDisplayText}
				openRatingSortDropdown={openRatingSortDropdown}
				closeRatingSortDropdown={closeRatingSortDropdown}
				updateRatingSortDisplayText={updateRatingSortDisplayText}
			/>
		</>
	);
};

export default SortShelfMenu;
