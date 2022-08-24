import BookCard from "../components/BookCard";

const BookContainer = ({ booksBeingDisplayed }) => {
	return (
		<div className="book-container">
			{booksBeingDisplayed.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	);
};

export default BookContainer;
