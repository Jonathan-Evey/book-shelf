import BookCard from "../components/BookCard";

const BookContainer = ({ savedBooks }) => {
	return (
		<div className="book-container">
			{savedBooks.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	);
};

export default BookContainer;
