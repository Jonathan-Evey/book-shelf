const FoundBookCard = ({ foundBooks, addBookToSavedBooks }) => {
	const addBookToSavedBooksEvent = (bookToAdd) => {
		addBookToSavedBooks(bookToAdd);
		let model = document.getElementById("find-book");
		model.close();
	};
	return (
		<div className="container-found-book">
			{foundBooks.map((book) => (
				<div className="card-found-book" key={book.id}>
					<div className="container-found-book-inside-container left">
						{!book.thumbnail ? null : (
							<img src={book.thumbnail.thumbnail} alt="" />
						)}
					</div>
					<div className="container-found-book-inside-container center | margin-block-end-16">
						<div className="after-element-bar-50 padding-block-end-8">
							<h4 className="fs-125-rem">{book.title}</h4>
						</div>
						{/* <p className="padding-block-end-8">by</p> */}

						<p className="fs-11-rem margin-block-end-24">
							{book.author.join(" / ")}
						</p>

						{!book.genres ? null : (
							<p className="fs-09-rem">
								{book.genres.join(" / ")}
							</p>
						)}
					</div>
					<div className="container-found-book-inside-container right">
						{/* 
						////---Might add future feature to make book as read, reading, unread as user adds it to the shelf---////
						<div className="book-status-options">
							<fieldset>
								<legend>Read Statue:</legend>
								<div>
									<input type="checkbox" name="unread" id="unread" checked/>
									<label htmlFor="unread">Unread</label>
								</div>
								<div>
									<input type="checkbox" name="reading" id="reading" />
									<label htmlFor="reading">Reading</label>
								</div>
								<div>
									<input type="checkbox" name="read" id="read" />
									<label htmlFor="read">Read</label>
								</div>
							</fieldset>
						</div> */}
						<button
							className="add-book-btn"
							onClick={() => addBookToSavedBooksEvent(book)}
						>
							Add Book
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FoundBookCard;
