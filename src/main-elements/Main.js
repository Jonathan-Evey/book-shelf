import React, { useState } from "react";
import BookContainer from "./BookContainer";
import ShelfControlsAside from "../components/ShelfControlsAside";
import NoteContainer from "./NoteContainer";
import ReviewContainer from "./ReviewContainer";

const Main = (props) => {
	let bookToUpdate = props.bookToUpdate;

	const [isMobileShelfMenuOpen, setIsMobileShelfMenuOpen] = useState(false);

	//------------------main display state---------------------------//
	const [isFullShelfDisplayed, setIsFullShelfDisplayed] = useState(true);
	const [isBookNotesDisplayed, setIsBookNotesDisplayed] = useState(false);
	const [isBookReviewDisplayed, setIsBookReviewDisplayed] = useState(false);

	//---------------------- search state -------------------------//
	////----------------------------search by title state
	const [searchTitleFilter, setSearchTitleFilter] = useState("");
	const [isSearchTitleFilter, setIsSearchTitleFilter] = useState(false);
	////---------------------------search by author state
	const [searchAuthorFilter, setSearchAuthorFilter] = useState("");
	const [isSearchAuthorFilter, setIsSearchAuthorFilter] = useState(false);

	//------------------search by read status state-----------------------//
	const [readStatusFilter, setReadStatusFilter] = useState("All");
	const [isReadStatusFilter, setIsReadStatusFilter] = useState(false);

	//------------------search by book rating state-----------------------//
	const [bookRatingFilter, setBookRatingFilter] = useState("All");
	const [isRatingFilter, setIsRatingFilter] = useState(false);

	// //------------------filter menu hover state-----------------------//
	// const [isHoverShown, setIsHoverShown] = useState(false);

	return (
		<main>
			{isFullShelfDisplayed ? (
				<>
					<ShelfControlsAside
						savedBooks={props.savedBooks}
						isMobileShelfMenuOpen={isMobileShelfMenuOpen}
						setIsMobileShelfMenuOpen={setIsMobileShelfMenuOpen}
						////---find new book
						searchTitleKeyWord={props.searchTitleKeyWord}
						searchAuthorKeyWord={props.searchAuthorKeyWord}
						updateTitleKeyWord={props.updateTitleKeyWord}
						updateAuthorKeyWord={props.updateAuthorKeyWord}
						updateSearchType={props.updateSearchType}
						updateUseSearchKeyWord={props.updateUseSearchKeyWord}
						updateCurrentSearchPageNumber={
							props.updateCurrentSearchPageNumber
						}
						////---search shelf
						setSearchTitleFilter={setSearchTitleFilter}
						setIsSearchTitleFilter={setIsSearchTitleFilter}
						setSearchAuthorFilter={setSearchAuthorFilter}
						setIsSearchAuthorFilter={setIsSearchAuthorFilter}
						////---sort shelf
						sortBackToDefault={props.sortBackToDefault}
						sortAlphabetically={props.sortAlphabetically}
						sortReverseAlphabetically={
							props.sortReverseAlphabetically
						}
						sortByRating={props.sortByRating}
						////---filter shelf
						readStatusFilter={readStatusFilter}
						setReadStatusFilter={setReadStatusFilter}
						isReadStatusFilter={isReadStatusFilter}
						setIsReadStatusFilter={setIsReadStatusFilter}
						bookRatingFilter={bookRatingFilter}
						setBookRatingFilter={setBookRatingFilter}
						isRatingFilter={isRatingFilter}
						setIsRatingFilter={setIsRatingFilter}
					/>
					<BookContainer
						savedBooks={props.savedBooks}
						setBookToUpdate={props.setBookToUpdate}
						isMobileShelfMenuOpen={isMobileShelfMenuOpen}
						setIsMobileShelfMenuOpen={setIsMobileShelfMenuOpen}
						////---main menu state
						isFilterMenuOpen={props.isFilterMenuOpen}
						////---book state
						updateReadStatus={props.updateReadStatus}
						updateRating={props.updateRating}
						////---what is being displayed state
						setIsFullShelfDisplayed={setIsFullShelfDisplayed}
						setIsBookNotesDisplayed={setIsBookNotesDisplayed}
						setIsBookReviewDisplayed={setIsBookReviewDisplayed}
						////---search  shelf
						searchTitleFilter={searchTitleFilter}
						isSearchTitleFilter={isSearchTitleFilter}
						searchAuthorFilter={searchAuthorFilter}
						isSearchAuthorFilter={isSearchAuthorFilter}
						////---filter shelf
						readStatusFilter={readStatusFilter}
						setReadStatusFilter={setReadStatusFilter}
						isReadStatusFilter={isReadStatusFilter}
						setIsReadStatusFilter={setIsReadStatusFilter}
						bookRatingFilter={bookRatingFilter}
						setBookRatingFilter={setBookRatingFilter}
						isRatingFilter={isRatingFilter}
						setIsRatingFilter={setIsRatingFilter}
					/>
				</>
			) : null}
			{isBookNotesDisplayed ? (
				<NoteContainer
					bookToUpdate={bookToUpdate}
					////---what is being displayed state
					setIsFullShelfDisplayed={setIsFullShelfDisplayed}
					setIsBookNotesDisplayed={setIsBookNotesDisplayed}
					////---each book note state
					addNoteToBookToUpdate={props.addNoteToBookToUpdate}
					addNewNote={props.addNewNote}
					deleteNote={props.deleteNote}
					updateNoteOnBook={props.updateNoteOnBook}
				/>
			) : null}
			{isBookReviewDisplayed ? (
				<ReviewContainer
					bookToUpdate={bookToUpdate}
					////---what is being displayed state
					setIsFullShelfDisplayed={setIsFullShelfDisplayed}
					setIsBookReviewDisplayed={setIsBookReviewDisplayed}
					////---each book review state
					addReviewToBookToUpdate={props.addReviewToBookToUpdate}
					addReview={props.addReview}
				/>
			) : null}
		</main>
	);
};

export default Main;
