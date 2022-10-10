import BookCard from "../components/BookCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const BookContainer = (props) => {
	let titleRegex = new RegExp(props.searchTitleFilter, "gi");
	let authorRegex = new RegExp(props.searchAuthorFilter, "gi");

	return (
		<TransitionGroup
			className={`book-container ${
				props.isFilterMenuOpen ? "open" : "closed"
			}`}
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
							updateReadStatus={props.updateReadStatus}
							updateRating={props.updateRating}
							updateReadNext={props.updateReadNext}
							setIsFullShelfDisplayed={
								props.setIsFullShelfDisplayed
							}
							setIsBookNotesDisplayed={
								props.setIsBookNotesDisplayed
							}
							setIsBookReviewDisplayed={
								props.setIsBookReviewDisplayed
							}
							setBookToUpdate={props.setBookToUpdate}
						/>
					</CSSTransition>
				))}
		</TransitionGroup>
	);
};

export default BookContainer;
