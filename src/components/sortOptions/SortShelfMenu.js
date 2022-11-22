import React, { useState } from "react";
import {
	titleSortOptionKeys,
	authorSortOptionKeys,
	ratingSortOptionKeys,
} from "../../SortKeys";
import SortSubOptionBtn from "./SortSubOptionBtn";
import SortOptionBtn from "./SortOptionBtn";

const SortShelfMenu = (props) => {
	const [isTitleSortOpen, setIsTitleSortOpen] = useState(false);
	const [isAuthorSortOpen, setIsAuthorSortOpen] = useState(false);
	const [isRatingSortOpen, setIsRatingSortOpen] = useState(false);

	////---sort shelf by title functions
	const toggleTitleSortDropdown = () => {
		closeAuthorSortDropdown();
		setIsTitleSortOpen(!isTitleSortOpen);
	};

	const closeTitleSortDropdown = () => {
		setIsTitleSortOpen(false);
	};

	const updateTitleSortDisplayText = (newTextValue) => {
		setIsTitleSortOpen(false);
		props.setCurrentTitleSortDisplayText(newTextValue);
		props.setCurrentAuthorSortDisplayText(authorSortOptionKeys.removeSort);
		props.setCurrentRatingSortDisplayText(ratingSortOptionKeys.removeSort);
		if (newTextValue === titleSortOptionKeys.alphabetically) {
			props.setIsSortActive(true);
			props.sortAlphabetically(
				props.savedBooks,
				titleSortOptionKeys.sortType
			);
		}
		if (newTextValue === titleSortOptionKeys.reverseAlphabetically) {
			props.setIsSortActive(true);
			props.sortReverseAlphabetically(
				props.savedBooks,
				titleSortOptionKeys.sortType
			);
		}
		if (newTextValue === titleSortOptionKeys.removeSort) {
			props.setIsSortActive(false);
			props.sortBackToDefault(
				props.savedBooks,
				titleSortOptionKeys.removeSort
			);
		}
	};
	//////---sort shelf by author functions
	const openAuthorSortDropdown = () => {
		closeTitleSortDropdown();
		setIsAuthorSortOpen(!isAuthorSortOpen);
	};

	const closeAuthorSortDropdown = () => {
		setIsAuthorSortOpen(false);
	};

	const updateAuthorSortDisplayText = (newTextValue) => {
		setIsAuthorSortOpen(false);
		props.setCurrentTitleSortDisplayText(titleSortOptionKeys.removeSort);
		props.setCurrentAuthorSortDisplayText(newTextValue);
		props.setCurrentRatingSortDisplayText(ratingSortOptionKeys.removeSort);
		if (newTextValue === authorSortOptionKeys.alphabetically) {
			props.setIsSortActive(true);
			props.sortAlphabetically(
				props.savedBooks,
				authorSortOptionKeys.sortType
			);
		}
		if (newTextValue === authorSortOptionKeys.reverseAlphabetically) {
			props.setIsSortActive(true);
			props.sortReverseAlphabetically(
				props.savedBooks,
				authorSortOptionKeys.sortType
			);
		}
		if (newTextValue === authorSortOptionKeys.removeSort) {
			props.setIsSortActive(false);
			props.sortBackToDefault(
				props.savedBooks,
				authorSortOptionKeys.removeSort
			);
		}
	};
	//////----sort shelf by rating functions
	const openRatingSortDropdown = () => {
		setIsRatingSortOpen(!isRatingSortOpen);
	};

	const closeRatingSortDropdown = () => {
		setIsRatingSortOpen(false);
	};

	const updateRatingSortDisplayText = (newTextValue) => {
		setIsRatingSortOpen(false);
		props.setCurrentTitleSortDisplayText(titleSortOptionKeys.removeSort);
		props.setCurrentAuthorSortDisplayText(authorSortOptionKeys.removeSort);
		props.setCurrentRatingSortDisplayText(newTextValue);
		props.sortByRating(props.savedBooks, newTextValue);
		if (newTextValue === ratingSortOptionKeys.removeSort) {
			props.setIsSortActive(false);
		} else {
			props.setIsSortActive(true);
		}
	};
	return (
		<>
			<ul
				className="card-sort-option"
				onMouseLeave={() => {
					closeTitleSortDropdown();
				}}
			>
				<SortOptionBtn
					toggleDropdownProp={toggleTitleSortDropdown}
					isOpen={isTitleSortOpen}
					classProps={`${
						props.currentTitleSortDisplayText !==
						titleSortOptionKeys.removeSort
							? "active"
							: ""
					} top-shadow-light`}
					textProp={props.currentTitleSortDisplayText}
				/>

				{isTitleSortOpen ? (
					<>
						{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.removeSort ? (
							<SortSubOptionBtn
								clickEventProp={updateTitleSortDisplayText}
								clickEventDataProp={
									titleSortOptionKeys.removeSort
								}
								textProp={"Remove"}
							/>
						) : null}
						{props.currentTitleSortDisplayText !==
							titleSortOptionKeys.alphabetically &&
						props.currentTitleSortDisplayText !==
							titleSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateTitleSortDisplayText}
								clickEventDataProp={
									titleSortOptionKeys.alphabetically
								}
								textProp={titleSortOptionKeys.alphabetically}
							/>
						) : null}
						{props.currentTitleSortDisplayText !==
							titleSortOptionKeys.alphabetically &&
						props.currentTitleSortDisplayText ===
							titleSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateTitleSortDisplayText}
								clickEventDataProp={
									titleSortOptionKeys.alphabetically
								}
								textProp={titleSortOptionKeys.alphabetically}
							/>
						) : null}
						{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateTitleSortDisplayText}
								clickEventDataProp={
									titleSortOptionKeys.reverseAlphabetically
								}
								textProp={
									titleSortOptionKeys.reverseAlphabetically
								}
							/>
						) : null}
					</>
				) : null}
			</ul>
			<ul
				className="card-sort-option"
				onMouseLeave={() => {
					closeAuthorSortDropdown();
				}}
			>
				<SortOptionBtn
					toggleDropdownProp={openAuthorSortDropdown}
					isOpen={isAuthorSortOpen}
					classProps={`${
						props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.removeSort
							? "active"
							: ""
					} top-shadow-light padding-block-end-32`}
					textProp={props.currentAuthorSortDisplayText}
				/>
				{isAuthorSortOpen ? (
					<>
						{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.removeSort ? (
							<SortSubOptionBtn
								clickEventProp={updateAuthorSortDisplayText}
								clickEventDataProp={
									authorSortOptionKeys.removeSort
								}
								textProp={"Remove"}
							/>
						) : null}
						{props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.alphabetically &&
						props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateAuthorSortDisplayText}
								clickEventDataProp={
									authorSortOptionKeys.alphabetically
								}
								textProp={authorSortOptionKeys.alphabetically}
							/>
						) : null}
						{props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.alphabetically &&
						props.currentAuthorSortDisplayText ===
							authorSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateAuthorSortDisplayText}
								clickEventDataProp={
									authorSortOptionKeys.alphabetically
								}
								textProp={authorSortOptionKeys.alphabetically}
							/>
						) : null}
						{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.reverseAlphabetically ? (
							<SortSubOptionBtn
								clickEventProp={updateAuthorSortDisplayText}
								clickEventDataProp={
									authorSortOptionKeys.reverseAlphabetically
								}
								textProp={
									authorSortOptionKeys.reverseAlphabetically
								}
							/>
						) : null}
					</>
				) : null}
			</ul>
			<ul
				className="card-sort-option"
				onMouseLeave={() => {
					closeRatingSortDropdown();
				}}
			>
				<SortOptionBtn
					toggleDropdownProp={openRatingSortDropdown}
					isOpen={isRatingSortOpen}
					classProps={`${
						props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.removeSort
							? "active"
							: ""
					} top-shadow-light padding-block-end-16`}
					textProp={props.currentRatingSortDisplayText}
				/>

				{isRatingSortOpen ? (
					<>
						{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.removeSort ? (
							<SortSubOptionBtn
								clickEventProp={updateRatingSortDisplayText}
								clickEventDataProp={
									ratingSortOptionKeys.removeSort
								}
								textProp={ratingSortOptionKeys.removeSort}
							/>
						) : null}
						{props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.highToLow &&
						props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.lowToHigh ? (
							<SortSubOptionBtn
								clickEventProp={updateRatingSortDisplayText}
								clickEventDataProp={
									ratingSortOptionKeys.highToLow
								}
								textProp={ratingSortOptionKeys.highToLow}
							/>
						) : null}

						{props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.highToLow &&
						props.currentRatingSortDisplayText ===
							ratingSortOptionKeys.lowToHigh ? (
							<SortSubOptionBtn
								clickEventProp={updateRatingSortDisplayText}
								clickEventDataProp={
									ratingSortOptionKeys.highToLow
								}
								textProp={ratingSortOptionKeys.highToLow}
							/>
						) : null}
						{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.lowToHigh ? (
							<SortSubOptionBtn
								clickEventProp={updateRatingSortDisplayText}
								clickEventDataProp={
									ratingSortOptionKeys.lowToHigh
								}
								textProp={ratingSortOptionKeys.lowToHigh}
							/>
						) : null}
					</>
				) : null}
			</ul>
		</>
	);
};

export default SortShelfMenu;
