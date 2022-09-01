const FoundBookCard = ({ foundBooks, addBookToSavedBooks }) => {
	const addBookToSavedBooksEvent = (bookToAdd) => {
		addBookToSavedBooks(bookToAdd);
		let model = document.getElementById("find-book");
		model.close();
	}
	return (
		<div className="found-book-container">
			{foundBooks.map((book) => (
				<div className="found-book-card" key={book.id}>
					<div className="found-book-card-left-container">
						{!book.thumbnail ? null : (
							<img src={book.thumbnail.thumbnail} alt="" width="128" height="193"/>
						)}
					</div>
					<div className="found-book-card-center-container">
						<p className="found-book-title">{book.title}</p>
						<p>by</p>
						<p className="found-book-author">{book.author}</p>
						{!book.genres ? null : <p>Genre: {book.genres.join(" / ")}</p>}
					</div>
					<div className="found-book-card-right-container">
						{/* <div className="book-status-options">
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
						<button onClick={() => addBookToSavedBooksEvent(book)}>Add to Shelf</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default FoundBookCard;
