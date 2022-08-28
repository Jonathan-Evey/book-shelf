import React, { useState } from "react";

const BookCard = ({ book, updateReadStatus }) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);
	const [isUpdateDropdownShown, setIsUpdateDropdownShown] = useState(false);

	const updateReadStatusEvent = (id, value) => {
		updateReadStatus(id, value);
		setIsUpdateDropdownShown(false);
	};
	return (
		<div className="book-card">
			<div className="book-img-container">
				<img src={book.thumbnail} alt="" />
				<button
					onClick={() => setIsUpdateDropdownShown(true)}
					onMouseEnter={() => setIsUpdateShown(true)}
					onMouseLeave={() => setIsUpdateShown(false)}
					onFocus={() => setIsUpdateShown(true)}
					onBlur={() => setIsUpdateShown(false)}
					className="read-unread-btn"
				>
					{isUpdateShown ? "Update" : book.readStatus}
				</button>
				{isUpdateDropdownShown ? (
					<ol>
						<li>
							<button
								onClick={() =>
									updateReadStatusEvent(book.id, "Read")
								}
							>
								Read
							</button>
						</li>
						<li>
							<button
								onClick={() =>
									updateReadStatusEvent(book.id, "Reading")
								}
							>
								Reading
							</button>
						</li>
						<li>
							<button
								onClick={() =>
									updateReadStatusEvent(book.id, "Unread")
								}
							>
								Unread
							</button>
						</li>
					</ol>
				) : null}
			</div>
			<div className="book-right">
				<div className="book-right-top">
					<h4>{book.title}</h4>
					<p>{book.author[0]}</p>
				</div>
				<p>Personal Rating: {book.rating}/5</p>
				<div className="book-right-bottom-container">
					{book.readStatus === "Read" ? null : (
						<button className="prioritize-btn">Prioritize</button>
					)}
					{!book.genres[1] ? (
						<p>{book.genres[0]}</p>
					) : (
						<p>{book.genres[0] + " / " + book.genres[1]}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default BookCard;
