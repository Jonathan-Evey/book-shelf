import React, { useState } from "react";

const BookCard = ({ book }) => {
	const [isShown, setIsShown] = useState(false);

	let isRead = "";

	if (book.readStatus === "Read") {
		isRead = "Unread";
	}
	if (book.readStatus === "Unread") {
		isRead = "Read";
	}

	return (
		<div className="book-card">
			<div className="book-img-container">
				<img src={book.thumbnail} alt="" />
				<button
					onMouseEnter={() => setIsShown(true)}
					onMouseLeave={() => setIsShown(false)}
					onFocus={() => setIsShown(true)}
					onBlur={() => setIsShown(false)}
					className="read-unread-btn"
				>
					{isShown ? isRead : book.readStatus}
				</button>
			</div>
			<div className="book-right">
				<div className="book-right-top">
					<h4>{book.title}</h4>
					<p>{book.author[0]}</p>
				</div>
				<div className="book-right-bottom">
					<button>Own</button>
					<p>Personal Rating: 4.5/5</p>
					<p>fantasy</p>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
