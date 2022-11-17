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
		<div className="card-book | box-shadow margin-inline-16">
			<div
				className={`container-book-img ${getBookImgContainerClass(
					book.readStatus
				)} | padding-8 box-shadow-light`}
			>
				{book.thumbnail.thumbnail ? (
					<img
						className="margin-block-end-8"
						src={book.thumbnail.thumbnail}
						alt=""
					/>
				) : (
					<img
						className="margin-block-end-8"
						src={book.thumbnail}
						alt=""
					/>
				)}
				{!isUpdateDropdownShown ? (
					<ol
						onMouseLeave={() => {
							handleClose();
						}}
						className="dropdown-read-status"
					>
						<button
							onClick={() => handleOpenClose()}
							onMouseEnter={() => setIsUpdateShown(true)}
							onMouseLeave={() => setIsUpdateShown(false)}
							onFocus={() => setIsUpdateShown(true)}
							onBlur={() => setIsUpdateShown(false)}
							className="btn in-dropdown bg-dark-main-900-gradient"
						>
							{isUpdateShown ? "Update" : book.readStatus}
						</button>
					</ol>
				) : (
					<ol
						className="dropdown-read-status hidden"
						aria-hidden="true"
					>
						<button
							className="btn in-dropdown bg-dark-main-900-gradient hidden"
							aria-hidden="true"
						>
							{isUpdateShown ? "Update" : book.readStatus}
						</button>
					</ol>
				)}
				{isUpdateDropdownShown ? (
					<ol
						onMouseLeave={() => {
							handleClose();
						}}
						className="dropdown-read-status open"
					>
						<li className="li dropdown">
							<button
								className="btn in-dropdown option"
								onClick={() => handleOpenClose()}
								onMouseEnter={() => setIsUpdateShown(true)}
								onMouseLeave={() => setIsUpdateShown(false)}
								onFocus={() => setIsUpdateShown(true)}
								onBlur={() => setIsUpdateShown(false)}
							>
								{book.readStatus}
							</button>
						</li>
						{book.readStatus !== BookObjKeys.readStatus.unread ? (
							<li className="li dropdown">
								<button
									className="btn in-dropdown option"
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
							<li className="li dropdown">
								<button
									className="btn in-dropdown option"
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
							<li className="li dropdown">
								<button
									className="btn in-dropdown option"
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
							<li className="li dropdown">
								<button
									className="btn in-dropdown option"
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
			<div className="card-book-right | padding-inline-4 padding-block-start-24 padding-block-end-8">
				<div className="after-element-bar">
					<h4 className="padding-block-8 fs-600 fw-bold">
						{book.title}
					</h4>
					<p className="margin-block-end-8">by</p>
					{book.author.map((each) => (
						<p
							className="fs-550 fw-bold"
							key={book.author.indexOf(each)}
						>
							{each}
						</p>
					))}
				</div>
				<div className="container-book-notes-review-btns | margin-block-start-8 padding-inline-16">
					<button
						className={`btn book-right notes ${
							book.notes[0] ? "read" : "add"
						}`}
						onClick={() => {
							openBookNotes(book);
						}}
					>
						Notes
					</button>
					{book.readStatus === BookObjKeys.readStatus.read ? (
						<button
							className={`btn book-right review ${
								book.review === "" ? "add" : "read"
							}`}
							onClick={() => {
								openBookReview(book);
							}}
						>
							Review
						</button>
					) : (
						<p className="margin-block-start-8 fs-400">
							{book.genres.join(" / ")}
						</p>
					)}
				</div>
				<div className="margin-block-start-16 padding-inline-8 padding-block-end-8">
					{book.readStatus === BookObjKeys.readStatus.read &&
					!isRatingUpdateDisplayed ? (
						<div className="container-book-right-bottom">
							<button
								className={`btn book-right ${
									book.rating === ""
										? "rating"
										: `rating-${book.rating} rating-update`
								}`}
								onClick={() => {
									openRatingUpdate();
								}}
							>
								{book.rating === ""
									? "Rating"
									: `${book.rating} / 5`}
							</button>
							<p className="margin-block-start-8 fs-300">
								{book.genres.join(" / ")}
							</p>
						</div>
					) : null}
					{isRatingUpdateDisplayed ? (
						<>
							<div className="container-select-rating-top">
								<button
									className="btn book-right select-rating"
									onClick={() =>
										handleRatingUpdate(book.id, 0)
									}
								>
									0
								</button>
								<button
									className="btn book-right select-rating | margin-inline-start-8"
									onClick={() =>
										handleRatingUpdate(book.id, 1)
									}
								>
									1
								</button>
								<button
									className="btn book-right select-rating | margin-inline-start-8"
									onClick={() =>
										handleRatingUpdate(book.id, 2)
									}
								>
									2
								</button>
								<button
									className="btn book-right select-rating | margin-inline-start-8"
									onClick={() =>
										handleRatingUpdate(book.id, 3)
									}
								>
									3
								</button>
								<div className="container-select-rating-bottom | bottom-shadow margin-block-start-8 padding-block-end-8">
									<button
										className="btn book-right select-rating"
										onClick={() =>
											handleRatingUpdate(book.id, 4)
										}
									>
										4
									</button>
									<button
										className="btn book-right select-rating | margin-inline-start-8"
										onClick={() =>
											handleRatingUpdate(book.id, 5)
										}
									>
										5
									</button>
									<button
										className="btn book-right select-rating | margin-inline-start-8"
										onClick={() => closeRatingUpdate()}
									>
										Cancel
									</button>
								</div>
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default BookCard;
