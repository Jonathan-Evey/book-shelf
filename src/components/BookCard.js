import React, { useState } from "react";

const BookCard = ({ book }) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);

	return (
		<div className="book-card">
			<div className="book-img-container">
				<img src={book.thumbnail} alt="" />
				<button
					onMouseEnter={() => setIsUpdateShown(true)}
					onMouseLeave={() => setIsUpdateShown(false)}
					onFocus={() => setIsUpdateShown(true)}
					onBlur={() => setIsUpdateShown(false)}
					className="read-unread-btn"
				>
					{isUpdateShown ? "Update" : book.readStatus}
				</button>
			</div>
			<div className="book-right">
				<div className="book-right-top">
					<h4>{book.title}</h4>
					<p>{book.author[0]}</p>
				</div>
				<p>Personal Rating: 4.5/5</p>
				<div className="book-right-bottom-container">
					{book.readStatus === "Read" ? null : (
						<button className="prioritize-btn">Prioritize</button>
					)}
					<p>fantasy</p>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
