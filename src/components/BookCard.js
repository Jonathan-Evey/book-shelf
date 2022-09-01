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
					{book.author.map((each) => (
						<p key={book.author.indexOf(each)}>{each}</p>
					))}
				</div>
				<p>{book.genres.join(" / ")}</p>
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
