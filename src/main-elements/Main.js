import React, { useState } from "react";

import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	const [booksBeingDisplayed, setBooksBeingDisplayed] = useState(savedBooks);
	const [booksWithReadFilter, setBooksWithReadFilter] = useState([]);
	const [isReadStatusfilter, setIsReadStatusfilter] = useState(false);

	function filterByReadStatus(value) {
		if (value === "Read") {
			let booksRead = savedBooks.filter(
				(book) => book.readStatus === "Read"
			);
			setIsReadStatusfilter(true);
			setBooksBeingDisplayed(booksRead);
			setBooksWithReadFilter(booksRead);
		}
		if (value === "Reading") {
			let booksRead = savedBooks.filter(
				(book) => book.readStatus === "Reading"
			);
			setIsReadStatusfilter(true);
			setBooksBeingDisplayed(booksRead);
			setBooksWithReadFilter(booksRead);
		}
		if (value === "Unread") {
			let booksRead = savedBooks.filter(
				(book) => book.readStatus === "Unread"
			);
			setIsReadStatusfilter(true);
			setBooksBeingDisplayed(booksRead);
			setBooksWithReadFilter(booksRead);
		}
		if (value === "All") {
			setIsReadStatusfilter(false);
			setBooksBeingDisplayed(savedBooks);
			setBooksWithReadFilter(savedBooks);
		}
	}

	function filterByRatingStatus(value) {
		if (isReadStatusfilter) {
			if (value === "No Rating") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating === ""
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 0 - 1") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating >= 0 && book.rating <= 1
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 1 - 2") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating >= 1 && book.rating <= 2
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 2 - 3") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating >= 2 && book.rating <= 3
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 3 - 4") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating >= 3 && book.rating <= 4
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 4 - 5") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating >= 4 && book.rating <= 5
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "Ratings 5") {
				let filteredBooks = booksWithReadFilter.filter(
					(book) => book.rating === 5
				);
				setBooksBeingDisplayed(filteredBooks);
			}
			if (value === "All") {
				setBooksBeingDisplayed(booksWithReadFilter);
			}
		}
	}

	return (
		<main>
			<Navigation
				filterByReadStatus={filterByReadStatus}
				filterByRatingStatus={filterByRatingStatus}
			/>
			<BookContainer booksBeingDisplayed={booksBeingDisplayed} />
		</main>
	);
};

export default Main;
