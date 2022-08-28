import BookCard from "../components/BookCard";

const BookContainer = (props) => {
	let updateReadStatus = props.updateReadStatus;
	return (
		<div className="book-container">
			{props.savedBooks
				.filter(
					(book) =>
						!props.isReadStatusFilter ||
						book.readStatus === props.readStatusFilter
				)
				.filter(
					(book) =>
						!props.isRatingFilter ||
						(book.rating >= parseInt(props.bookRatingFilter) &&
							book.rating <= parseInt(props.bookRatingFilter) + 1)
				)
				.map((book) => (
					<BookCard
						key={book.id}
						book={book}
						updateReadStatus={updateReadStatus}
					/>
				))}
		</div>
	);
};

export default BookContainer;
