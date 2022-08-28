import React, { useState } from "react";

import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	const [readStatusFilter, setReadStatusFilter] = useState("All");
	const [isReadStatusFilter, setIsReadStatusFilter] = useState(false);
	const [bookRatingFilter, setBookRatingFilter] = useState("All");
	const [isRatingFilter, setIsRatingFilter] = useState(false);

	let booksBeingDisplayed = savedBooks;

	return (
		<main>
			<Navigation
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
				booksBeingDisplayed={booksBeingDisplayed}
				readStatusFilter={readStatusFilter}
				setReadStatusFilter={setReadStatusFilter}
				isReadStatusFilter={isReadStatusFilter}
				setIsReadStatusFilter={setIsReadStatusFilter}
				bookRatingFilter={bookRatingFilter}
				setBookRatingFilter={setBookRatingFilter}
				isRatingFilter={isRatingFilter}
				setIsRatingFilter={setIsRatingFilter}
			/>
		</main>
	);
};

export default Main;
