import React, { useState } from "react";

import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks, updateReadStatus }) => {
	const [readStatusFilter, setReadStatusFilter] = useState("All");
	const [isReadStatusFilter, setIsReadStatusFilter] = useState(false);
	const [bookRatingFilter, setBookRatingFilter] = useState("All");
	const [isRatingFilter, setIsRatingFilter] = useState(false);

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
				savedBooks={savedBooks}
				updateReadStatus={updateReadStatus}
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
