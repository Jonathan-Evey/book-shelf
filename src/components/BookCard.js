import React, { useState } from "react";
import BookObjKeys from "../BookObjKeys";

const BookCard = ({
	book,
	updateReadStatus,
	updateRating,
	setIsFullShelfDisplayed,
	setIsBookNotesDisplayed,
	setIsBookReviewDisplayed,
	setBookToUpdate,
}) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);
	const [isUpdateDropdownShown, setIsUpdateDropdownShown] = useState(false);
	const [isRatingUpdateDisplayed, setIsRatingUpdateDisplayed] =
		useState(false);

	const handleOpenClose = () => {
		setIsUpdateDropdownShown(!isUpdateDropdownShown);
	};

	const handleClose = () => {
		setIsUpdateDropdownShown(false);
	};

	const updateReadStatusEvent = (id, value) => {
		updateReadStatus(id, value);
		setIsUpdateDropdownShown(false);
	};

	const openBookNotes = (book) => {
		setBookToUpdate(book);
		setIsFullShelfDisplayed(false);
		setIsBookNotesDisplayed(true);
	};

	const openBookReview = () => {
		setBookToUpdate(book);
		setIsFullShelfDisplayed(false);
		setIsBookReviewDisplayed(true);
	};

	const openRatingUpdate = () => {
		setIsRatingUpdateDisplayed(true);
	};

	const closeRatingUpdate = () => {
		setIsRatingUpdateDisplayed(false);
	};

	const handleRatingUpdate = (id, newRating) => {
		updateRating(id, newRating);
		setIsRatingUpdateDisplayed(false);
	};

	const getBookImgContainerClass = (value) => {
		switch (value) {
			case BookObjKeys.readStatus.unread:
				return "unread";
			case BookObjKeys.readStatus.reading:
				return "reading";
			default:
				return "read";
		}
	};

	return (
		<div className="book-card">
			<div
				className={`book-img-container ${getBookImgContainerClass(
					book.readStatus
				)}`}
			>
				{book.thumbnail.thumbnail ? (
					<img src={book.thumbnail.thumbnail} alt="" />
				) : (
					<img src={book.thumbnail} alt="" />
				)}
				{!isUpdateDropdownShown ? (
					<ol
						onMouseLeave={() => {
							handleClose();
						}}
						className="read-status-dropdown"
					>
						<button
							onClick={() => handleOpenClose()}
							onMouseEnter={() => setIsUpdateShown(true)}
							onMouseLeave={() => setIsUpdateShown(false)}
							onFocus={() => setIsUpdateShown(true)}
							onBlur={() => setIsUpdateShown(false)}
							className={`read-unread-btn${
								isUpdateDropdownShown ? " open" : ""
							}`}
						>
							{isUpdateShown && !isUpdateDropdownShown
								? "Update"
								: book.readStatus}
						</button>
					</ol>
				) : null}
				{isUpdateDropdownShown ? (
					<ol
						onMouseLeave={() => {
							handleClose();
						}}
						className="read-status-dropdown"
					>
						<button
							onClick={() => handleOpenClose()}
							onMouseEnter={() => setIsUpdateShown(true)}
							onMouseLeave={() => setIsUpdateShown(false)}
							onFocus={() => setIsUpdateShown(true)}
							onBlur={() => setIsUpdateShown(false)}
							className={`read-unread-btn${
								isUpdateDropdownShown ? " open" : ""
							}`}
						>
							{isUpdateShown && !isUpdateDropdownShown
								? "Update"
								: book.readStatus}
						</button>
						{book.readStatus !== BookObjKeys.readStatus.unread ? (
							<li className="read-option">
								<button
									onClick={() =>
										updateReadStatusEvent(
											book.id,
											BookObjKeys.readStatus.unread
										)
									}
								>
									Unread
								</button>
							</li>
						) : null}
						{book.readStatus !== BookObjKeys.readStatus.reading &&
						book.readStatus !== BookObjKeys.readStatus.read ? (
							<li className="read-option">
								<button
									onClick={() =>
										updateReadStatusEvent(
											book.id,
											BookObjKeys.readStatus.reading
										)
									}
								>
									Reading
								</button>
							</li>
						) : null}
						{book.readStatus !== BookObjKeys.readStatus.reading &&
						book.readStatus === BookObjKeys.readStatus.read ? (
							<li className="read-option">
								<button
									onClick={() =>
										updateReadStatusEvent(
											book.id,
											BookObjKeys.readStatus.reading
										)
									}
									onBlur={() => {
										handleOpenClose();
									}}
								>
									Reading
								</button>
							</li>
						) : null}
						{book.readStatus !== BookObjKeys.readStatus.read ? (
							<li className="read-option">
								<button
									onClick={() =>
										updateReadStatusEvent(
											book.id,
											BookObjKeys.readStatus.read
										)
									}
									onBlur={() => {
										handleOpenClose();
									}}
								>
									Read
								</button>
							</li>
						) : null}
					</ol>
				) : null}
			</div>
			<div className="book-right">
				<div className="book-right-top">
					<h4>{book.title}</h4>
					<p>by</p>
					{book.author.map((each) => (
						<p key={book.author.indexOf(each)}>{each}</p>
					))}
				</div>
				<p>{book.genres.join(" / ")}</p>
				<div className="book-right-bottom-container">
					{!isRatingUpdateDisplayed ? (
						<button
							className={`add-notes-btn ${
								book.notes[0] ? "read" : "add"
							}`}
							onClick={() => {
								openBookNotes(book);
							}}
						>
							Notes
						</button>
					) : null}

					{book.readStatus === BookObjKeys.readStatus.read &&
					!isRatingUpdateDisplayed ? (
						<>
							<button
								className={`review-btn ${
									book.review === "" ? "add" : "read"
								}`}
								onClick={() => {
									openBookReview(book);
								}}
							>
								Review
							</button>
							<button
								className={`rating-btn ${
									book.rating === "" ? "add" : "added"
								}`}
								onClick={() => {
									openRatingUpdate();
								}}
							>
								{book.rating === ""
									? "Rating"
									: `${book.rating} / 5`}
							</button>
						</>
					) : null}
					{isRatingUpdateDisplayed ? (
						<>
							<button
								className="select-rating-btn"
								onClick={() => closeRatingUpdate()}
							>
								Cancel
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 0)}
							>
								0
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 1)}
							>
								1
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 2)}
							>
								2
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 3)}
							>
								3
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 4)}
							>
								4
							</button>
							<button
								className="select-rating-btn"
								onClick={() => handleRatingUpdate(book.id, 5)}
							>
								5
							</button>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default BookCard;
