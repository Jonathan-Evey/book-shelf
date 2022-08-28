import BookCard from "../components/BookCard";

const BookContainer = (props) => {
	let updateReadStatus = props.updateReadStatus;
	let titleRegex = new RegExp(props.searchTitleFilter, "gi");
	let authorRegex = new RegExp(props.searchAuthorFilter, "gi");

	return (
		<div className="book-container">
			{props.savedBooks
				.filter(
					(book) =>
						!props.isSearchTitleFilter ||
						book.title.match(titleRegex)
				)
				.filter(
					(book) =>
						!props.isSearchAuthorFilter ||
						book.author[0].match(authorRegex)
				)
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
