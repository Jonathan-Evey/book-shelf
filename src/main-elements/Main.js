import React, { useState } from "react";

import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	const [booksBeingDisplayed, setBooksBeingDisplayed] = useState(savedBooks);
	const [readStatusFilter, setReadStatusFilter] = useState("All");
	const [booksWithReadFilter, setBooksWithReadFilter] = useState([]);
	const [isReadStatusfilter, setIsReadStatusfilter] = useState(false);
	const [booksWithRatingFilter, setBooksWithRatingFilter] = useState([]);
	const [bookRatingFilter, setBookRatingFilter] = useState("All");
	const [isRatingFilter, setIsRatingFilter] = useState(false);

	// function filterBooks(value)

	function filterByReadStatus(value) {
		setReadStatusFilter(value);
		if (value === "All") {
			setIsReadStatusfilter(false);
			if (isRatingFilter) {
				filterByRatingStatus(bookRatingFilter);
			} else {
				setBooksBeingDisplayed(savedBooks);
			}
		} else if (isRatingFilter) {
			setIsReadStatusfilter(true);
			let filteredBooks = savedBooks.filter(
				(book) =>
					book.readStatus === value &&
					book.rating === bookRatingFilter
			);
			setBooksBeingDisplayed(filteredBooks);
		} else {
			setIsReadStatusfilter(true);
			let filteredBooks = savedBooks.filter(
				(book) => book.readStatus === value
			);
			setBooksBeingDisplayed(filteredBooks);
		}
		// if (isRatingFilter === 52) {
		// 	if (value === "Read") {
		// 		let filteredBooks = booksWithRatingFilter.filter(
		// 			(book) => book.readStatus === "Read"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "Reading") {
		// 		let filteredBooks = booksWithRatingFilter.filter(
		// 			(book) => book.readStatus === "Reading"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "Unread") {
		// 		let filteredBooks = booksWithRatingFilter.filter(
		// 			(book) => book.readStatus === "Unread"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "All") {
		// 		setIsReadStatusfilter(false);
		// 		setBooksBeingDisplayed(savedBooks);
		// 		setBooksWithReadFilter(savedBooks);
		// 	}
		// } else {
		// 	if (value === "Read") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.readStatus === "Read"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "Reading") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.readStatus === "Reading"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "Unread") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.readStatus === "Unread"
		// 		);
		// 		setIsReadStatusfilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithReadFilter(filteredBooks);
		// 	}
		// 	if (value === "All") {
		// 		setIsReadStatusfilter(false);
		// 		setBooksBeingDisplayed(savedBooks);
		// 		setBooksWithReadFilter(savedBooks);
		// 	}
		// }
	}

	function filterByRatingStatus(value) {
		setBookRatingFilter(value);
		if (value === "All") {
			setIsRatingFilter(false);
			if (isReadStatusfilter) {
				filterByReadStatus(readStatusFilter);
			} else {
				setBooksBeingDisplayed(savedBooks);
			}
		} else if (isReadStatusfilter) {
			setIsRatingFilter(true);
			let filteredBooks = savedBooks.filter(
				(book) =>
					book.rating === value &&
					book.readStatus === readStatusFilter
			);
			setBooksBeingDisplayed(filteredBooks);
		} else {
			setIsRatingFilter(true);
			let filteredBooks = savedBooks.filter(
				(book) => book.rating === value
			);
			setBooksBeingDisplayed(filteredBooks);
		}
		// if (isReadStatusfilter) {
		// 	if (value === "No Rating") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating === ""
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 0 - 1") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating >= 0 && book.rating <= 1
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 1 - 2") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating >= 1 && book.rating <= 2
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 2 - 3") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating >= 2 && book.rating <= 3
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 3 - 4") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating >= 3 && book.rating <= 4
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 4 - 5") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating >= 4 && book.rating <= 5
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 5") {
		// 		let filteredBooks = booksWithReadFilter.filter(
		// 			(book) => book.rating === 5
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "All") {
		// 		setIsRatingFilter(false);
		// 		setBooksBeingDisplayed(booksWithReadFilter);
		// 		setBooksWithRatingFilter(booksWithReadFilter);
		// 	}
		// } else {
		// 	if (value === "No Rating") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating === ""
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 0 - 1") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating >= 0 && book.rating <= 1
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 1 - 2") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating >= 1 && book.rating <= 2
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 2 - 3") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating >= 2 && book.rating <= 3
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 3 - 4") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating >= 3 && book.rating <= 4
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 4 - 5") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating >= 4 && book.rating <= 5
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "Ratings 5") {
		// 		let filteredBooks = savedBooks.filter(
		// 			(book) => book.rating === 5
		// 		);
		// 		setIsRatingFilter(true);
		// 		setBooksBeingDisplayed(filteredBooks);
		// 		setBooksWithRatingFilter(filteredBooks);
		// 	}
		// 	if (value === "All") {
		// 		setIsRatingFilter(false);
		// 		setBooksBeingDisplayed(savedBooks);
		// 		setBooksWithRatingFilter(savedBooks);
		// 	}
		// }
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
