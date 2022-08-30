import BookCard from "../components/BookCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BookContainer = (props) => {
	let titleRegex = new RegExp(props.searchTitleFilter, "gi");
	let authorRegex = new RegExp(props.searchAuthorFilter, "gi");

	return (
		<TransitionGroup
			className={
				props.isFilterMenuOpen
					? "book-container open"
					: "book-container closed"
			}
		>
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
					<CSSTransition
						timeout={400}
						classNames="book-card"
						key={book.id}
					>
						<BookCard
							className="book-card"
							book={book}
							updateBookState={props.updateBookState}
						/>
					</CSSTransition>
				))}
		</TransitionGroup>
	);
};

export default BookContainer;
