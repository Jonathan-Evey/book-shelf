import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
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
		<li>
			<CSSTransition
				in={props.isSortMenuOpen}
				timeout={{ appear: 150, enter: 150, exit: 300 }}
				classNames="aside-menu-animation"
				appear
				unmountOnExit
			>
				<ul
					className="card-sort-option z-index-9"
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
						} z-index-9`}
						textProp={props.currentTitleSortDisplayText}
					/>

					{/* {isTitleSortOpen ? ( */}
					<>
						{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.removeSort ? (
							<CSSTransition
								in={isTitleSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateTitleSortDisplayText}
									clickEventDataProp={
										titleSortOptionKeys.removeSort
									}
									textProp={"Remove"}
									liClassProp={"z-index-8 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}

						{props.currentTitleSortDisplayText !==
							titleSortOptionKeys.alphabetically &&
						props.currentTitleSortDisplayText !==
							titleSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isTitleSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateTitleSortDisplayText}
									clickEventDataProp={
										titleSortOptionKeys.alphabetically
									}
									textProp={
										titleSortOptionKeys.alphabetically
									}
									liClassProp={"z-index-8 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}

						{props.currentTitleSortDisplayText !==
							titleSortOptionKeys.alphabetically &&
						props.currentTitleSortDisplayText ===
							titleSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isTitleSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateTitleSortDisplayText}
									clickEventDataProp={
										titleSortOptionKeys.alphabetically
									}
									textProp={
										titleSortOptionKeys.alphabetically
									}
									liClassProp={"z-index-7 box-shadow"}
								/>
							</CSSTransition>
						) : null}

						{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isTitleSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateTitleSortDisplayText}
									clickEventDataProp={
										titleSortOptionKeys.reverseAlphabetically
									}
									textProp={
										titleSortOptionKeys.reverseAlphabetically
									}
									liClassProp={"z-index-7 box-shadow"}
								/>
							</CSSTransition>
						) : null}
					</>
					{/* ) : null} */}
				</ul>
			</CSSTransition>
			<CSSTransition
				in={props.isSortMenuOpen}
				timeout={{ appear: 300, enter: 300, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<ul
					className="card-sort-option z-index-6"
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
						} padding-block-end-32 z-index-6`}
						textProp={props.currentAuthorSortDisplayText}
					/>
					<>
						{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.removeSort ? (
							<CSSTransition
								in={isAuthorSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateAuthorSortDisplayText}
									clickEventDataProp={
										authorSortOptionKeys.removeSort
									}
									textProp={"Remove"}
									liClassProp={"z-index-5 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}
						{props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.alphabetically &&
						props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isAuthorSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateAuthorSortDisplayText}
									clickEventDataProp={
										authorSortOptionKeys.alphabetically
									}
									textProp={
										authorSortOptionKeys.alphabetically
									}
									liClassProp={"z-index-5 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}
						{props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.alphabetically &&
						props.currentAuthorSortDisplayText ===
							authorSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isAuthorSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateAuthorSortDisplayText}
									clickEventDataProp={
										authorSortOptionKeys.alphabetically
									}
									textProp={
										authorSortOptionKeys.alphabetically
									}
									liClassProp={"z-index-4 box-shadow"}
								/>
							</CSSTransition>
						) : null}
						{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.reverseAlphabetically ? (
							<CSSTransition
								in={isAuthorSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateAuthorSortDisplayText}
									clickEventDataProp={
										authorSortOptionKeys.reverseAlphabetically
									}
									textProp={
										authorSortOptionKeys.reverseAlphabetically
									}
									liClassProp={"z-index-4 box-shadow"}
								/>
							</CSSTransition>
						) : null}
					</>
				</ul>
			</CSSTransition>
			<CSSTransition
				in={props.isSortMenuOpen}
				timeout={{ appear: 450, enter: 450, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<ul
					className="card-sort-option z-index-3 bg-clr-900"
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
						} padding-block-start-16 z-index-3`}
						textProp={
							props.currentRatingSortDisplayText ===
							ratingSortOptionKeys.removeSort
								? "Rating"
								: `Ratings - ${props.currentRatingSortDisplayText}`
						}
					/>
					<>
						{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.removeSort ? (
							<CSSTransition
								in={isRatingSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateRatingSortDisplayText}
									clickEventDataProp={
										ratingSortOptionKeys.removeSort
									}
									textProp={"Remove"}
									liClassProp={"z-index-2 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}
						{props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.highToLow &&
						props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.lowToHigh ? (
							<CSSTransition
								in={isRatingSortOpen}
								timeout={{
									appear: 150,
									enter: 150,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateRatingSortDisplayText}
									clickEventDataProp={
										ratingSortOptionKeys.highToLow
									}
									textProp={ratingSortOptionKeys.highToLow}
									liClassProp={"z-index-2 box-shadow-light"}
								/>
							</CSSTransition>
						) : null}

						{props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.highToLow &&
						props.currentRatingSortDisplayText ===
							ratingSortOptionKeys.lowToHigh ? (
							<CSSTransition
								in={isRatingSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateRatingSortDisplayText}
									clickEventDataProp={
										ratingSortOptionKeys.highToLow
									}
									textProp={ratingSortOptionKeys.highToLow}
									liClassProp={"z-index-1 box-shadow"}
								/>
							</CSSTransition>
						) : null}
						{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.lowToHigh ? (
							<CSSTransition
								in={isRatingSortOpen}
								timeout={{
									appear: 300,
									enter: 300,
									exit: 300,
								}}
								classNames="aside-menu-animation"
								appear
								unmountOnExit
							>
								<SortSubOptionBtn
									clickEventProp={updateRatingSortDisplayText}
									clickEventDataProp={
										ratingSortOptionKeys.lowToHigh
									}
									textProp={ratingSortOptionKeys.lowToHigh}
									liClassProp={"z-index-1 box-shadow"}
								/>
							</CSSTransition>
						) : null}
					</>
				</ul>
			</CSSTransition>
		</li>
	);
};

export default SortShelfMenu;
