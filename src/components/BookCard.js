import React, { useState } from "react";
import BookObjKeys from "../BookObjKeys";

const BookCard = ({ book, updateReadStatus, updateReadNext }) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);
	const [isUpdateDropdownShown, setIsUpdateDropdownShown] = useState(false);

	const handleOpenClose = () => {
		setIsUpdateDropdownShown(!isUpdateDropdownShown);
	};

	const updateReadStatusEvent = (id, value) => {
		updateReadStatus(id, value);
		setIsUpdateDropdownShown(false);
	};

	const updateReadNextEvent = (id, value) => {
		updateReadNext(id, value);
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
						{book.readStatus !== BookObjKeys.readStatus.reading ? (
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
						{book.readStatus !== BookObjKeys.readStatus.read ? (
							<li className="read-option">
								<button
									onClick={() =>
										updateReadStatusEvent(
											book.id,
											BookObjKeys.readStatus.read
										)
									}
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
					<p>{book.author[0]}</p>
				</div>
				{!book.genres[1] ? (
					<p>{book.genres[0]}</p>
				) : (
					<p>{book.genres[0] + " / " + book.genres[1]}</p>
				)}
				<div className="book-right-bottom-container">
					{book.readStatus === BookObjKeys.readStatus.unread ? (
						<button
							onClick={() =>
								updateReadNextEvent(book.id, book.isReadNext)
							}
							className="read-next-btn"
						>
							{book.isReadNext
								? "Remove from Read Next"
								: "Add to Read Next"}
						</button>
					) : null}
					<p>{book.rating === "" ? "-" : book.rating} / 5</p>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
