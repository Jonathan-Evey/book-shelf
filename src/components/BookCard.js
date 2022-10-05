import React, { useState } from "react";
import BookObjKeys from "../BookObjKeys";

const BookCard = ({ book, updateReadStatus, updateReadNext }) => {
	const [isUpdateShown, setIsUpdateShown] = useState(false);
	const [isUpdateDropdownShown, setIsUpdateDropdownShown] = useState(false);

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

	// const updateReadNextEvent = (id, value) => {
	// 	updateReadNext(id, value);
	// };

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
				{/* <button
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
				</button> */}
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
					{book.readStatus === BookObjKeys.readStatus.read ? (
						<>
							<p>My Rating: </p>
							<button>
								{book.rating === "" ? "-" : book.rating} / 5
							</button>
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default BookCard;
