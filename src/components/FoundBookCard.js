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
					<div className="container-found-book-inside-container center-right-wraper">
						<div className="container-found-book-inside-container center | margin-block-end-16">
							<div className="after-element-bar-25 padding-block-end-8">
								<h4 className="fs-600">{book.title}</h4>

								<p className="fs-300 mobile-fs-300 padding-block-8">
									by
								</p>

								<p className="fs-550 fw-bold">
									{book.author.join(" / ")}
								</p>
							</div>
							{!book.genres ? null : (
								<p className="fs-300">
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
								className="btn in-card-found-book linear-gradient clr-700-800"
								onClick={() => addBookToSavedBooksEvent(book)}
							>
								Add Book
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FoundBookCard;
