import React, { useState } from "react";

const BookCard = ({ book, updateReadStatus }) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);
	const [isUpdateDropdownShown, setIsUpdateDropdownShown] = useState(false);

	const handleOpenClose = () => {
		setIsUpdateDropdownShown(!isUpdateDropdownShown);
	};

	const updateReadStatusEvent = (id, value) => {
		updateReadStatus(id, value);
		setIsUpdateDropdownShown(false);
	};

	const getBookImgContainerClass = () => {
		if (book.readStatus === "Read") {
			return "book-img-container read";
		} else if (book.readStatus === "Reading") {
			return "book-img-container reading";
		} else {
			return "book-img-container unread";
		}
	};
	return (
		<div className="book-card">
			<div className={getBookImgContainerClass()}>
				<img src={book.thumbnail} alt="" />
				<button
					onClick={() => handleOpenClose()}
					onMouseEnter={() => setIsUpdateShown(true)}
					onMouseLeave={() => setIsUpdateShown(false)}
					onFocus={() => setIsUpdateShown(true)}
					onBlur={() => setIsUpdateShown(false)}
					className={
						isUpdateDropdownShown
							? "read-unread-btn open"
							: "read-unread-btn"
					}
				>
					{isUpdateShown && !isUpdateDropdownShown
						? "Update"
						: book.readStatus}
				</button>
				{isUpdateDropdownShown ? (
					<ol className="read-status-dropdown">
						{book.readStatus === "Read" ? (
							<>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Unread"
											)
										}
									>
										Unread
									</button>
								</li>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Reading"
											)
										}
									>
										Reading
									</button>
								</li>
							</>
						) : null}
						{book.readStatus === "Reading" ? (
							<>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Unread"
											)
										}
									>
										Unread
									</button>
								</li>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Read"
											)
										}
									>
										Read
									</button>
								</li>
							</>
						) : null}
						{book.readStatus === "Unread" ? (
							<>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Reading"
											)
										}
									>
										Reading
									</button>
								</li>
								<li className="read-option">
									<button
										onClick={() =>
											updateReadStatusEvent(
												book.id,
												"Read"
											)
										}
									>
										Read
									</button>
								</li>
							</>
						) : null}
					</ol>
				) : null}
			</div>
			<div className="book-right">
				<div className="book-right-top">
					<h4>{book.title}</h4>
					<p>by</p>
					<p>{book.author[0]}</p>
				</div>
				{!book.genres[1] ? (
					<p>{book.genres[0]}</p>
				) : (
					<p>{book.genres[0] + " / " + book.genres[1]}</p>
				)}
				<div className="book-right-bottom-container">
					{book.readStatus === "Read" ? null : (
						<button className="prioritize-btn">Prioritize</button>
					)}
					<p>{book.rating} / 5</p>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
