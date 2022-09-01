import React, { useState } from "react";
import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = (props) => {
	//------------------search by title state-----------------------//
	const [searchTitleFilter, setSearchTitleFilter] = useState("");
	const [isSearchTitleFilter, setIsSearchTitleFilter] = useState(false);

	//------------------search by author state-----------------------//
	const [searchAuthorFilter, setSearchAuthorFilter] = useState("");
	const [isSearchAuthorFilter, setIsSearchAuthorFilter] = useState(false);

	//------------------search by read status state-----------------------//
	const [readStatusFilter, setReadStatusFilter] = useState("All");
	const [isReadStatusFilter, setIsReadStatusFilter] = useState(false);

	//------------------search by book rating state-----------------------//
	const [bookRatingFilter, setBookRatingFilter] = useState("All");
	const [isRatingFilter, setIsRatingFilter] = useState(false);

	return (
		<main>
			<aside
				className={
					props.isFilterMenuOpen
						? "main-filter-menu-container open"
						: "main-filter-menu-container closed"
				}
			>
				<button
					onClick={props.openFilterMenuToggle}
					className="toggle-filter-menu-btn"
				>
					Filter Menu<span>^</span>
				</button>
				<Navigation
					//------menu open state
					isFilterMenuOpen={props.isFilterMenuOpen}
					//-------find book search state
					searchTitleKeyWord={props.searchTitleKeyWord}
					updateTitleKeyWord={props.updateTitleKeyWord}
					updateUseSearchKeyWord={props.updateUseSearchKeyWord}
					//------title state
					searchTitleFilter={searchTitleFilter}
					setSearchTitleFilter={setSearchTitleFilter}
					setIsSearchTitleFilter={setIsSearchTitleFilter}
					//------author state
					searchAuthorFilter={searchAuthorFilter}
					setSearchAuthorFilter={setSearchAuthorFilter}
					setIsSearchAuthorFilter={setIsSearchAuthorFilter}
					//------read status state
					readStatusFilter={readStatusFilter}
					setReadStatusFilter={setReadStatusFilter}
					isReadStatusFilter={isReadStatusFilter}
					setIsReadStatusFilter={setIsReadStatusFilter}
					//------book rating state
					bookRatingFilter={bookRatingFilter}
					setBookRatingFilter={setBookRatingFilter}
					isRatingFilter={isRatingFilter}
					setIsRatingFilter={setIsRatingFilter}
				/>
			</aside>

			<BookContainer
				//from main
				savedBooks={props.savedBooks}
				updateReadStatus={props.updateReadStatus}
				updateReadNext={props.updateReadNext}
				isFilterMenuOpen={props.isFilterMenuOpen}
				//------title state
				searchTitleFilter={searchTitleFilter}
				isSearchTitleFilter={isSearchTitleFilter}
				//------author state
				searchAuthorFilter={searchAuthorFilter}
				isSearchAuthorFilter={isSearchAuthorFilter}
				//------read status state
				readStatusFilter={readStatusFilter}
				setReadStatusFilter={setReadStatusFilter}
				isReadStatusFilter={isReadStatusFilter}
				setIsReadStatusFilter={setIsReadStatusFilter}
				//------book rating state
				bookRatingFilter={bookRatingFilter}
				setBookRatingFilter={setBookRatingFilter}
				isRatingFilter={isRatingFilter}
				setIsRatingFilter={setIsRatingFilter}
			/>
		</main>
	);
};

export default Main;
