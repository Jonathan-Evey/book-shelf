import axios from "axios";
import React, { useState, useEffect } from "react";
import FoundBookCard from "../FoundBookCard";

const FindBookModel = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [foundBooks, setFoundBooks] = useState([]);

	let searchType = props.useSearchType;
	let searchKeyWord = props.useSearchKeyWord;

	const Book = (book) => {
		return {
			title: book.volumeInfo.title
				? book.volumeInfo.title
				: "Data Not Found",
			author: book.volumeInfo.authors
				? book.volumeInfo.authors
				: ["Data Not Found"],
			thumbnail: book.volumeInfo.imageLinks
				? book.volumeInfo.imageLinks
				: "Data Not Found",
			genres: book.volumeInfo.categories
				? book.volumeInfo.categories
				: ["Data Not Found"],
			id: book.volumeInfo.industryIdentifiers[0].identifier
				? `${
						book.volumeInfo.industryIdentifiers[0].identifier
				  } ${Math.floor(Math.random() * 1000)}`
				: `${Date.now()} ${Math.floor(Math.random() * 1000)}`,
			readStatus: "Unread",
			notes: [],
			review: "",
			rating: "",
			isReadNext: false,
			dateAdded: Date.now(),
		};
	};

	const handelResponse = (response) => {
		let foundBooks = [];
		response.data.items.map((book) => foundBooks.push(Book(book)));
		setFoundBooks(foundBooks);
	};

	const closeModel = (e) => {
		let model = document.getElementById("find-book");
		return model.close();
	};

	const updateBookResults = (number) => {
		let newNumber = number + props.currentSearchPageNumber;
		return props.updateCurrentSearchPageNumber(newNumber);
	};

	useEffect(() => {
		let apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchKeyWord}&startIndex=${props.currentSearchPageNumber}`;

		if (searchType === "inauthor") {
			apiURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchKeyWord}&startIndex=${props.currentSearchPageNumber}`;
		}

		if (props.useSearchKeyWord) {
			setIsLoading(true);
			let cancel;
			axios
				.get(apiURL, {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				})
				.then((response) => {
					setIsLoading(false);
					handelResponse(response);
				});
			return () => cancel();
		}
	}, [props.useSearchKeyWord, props.currentSearchPageNumber]);

	if (isLoading)
		return (
			<dialog id="find-book">
				<button
					className="close-model-btn"
					onClick={() => closeModel()}
				>
					X
				</button>
				<div className="loading-title">
					<h3>Please wait a moment as we search for your book.</h3>
				</div>
			</dialog>
		);

	return (
		<dialog id="find-book">
			<div className="header-modal-find-book | box-shadow">
				<p className="ff-main-accent fs-125-rem ">Found Books</p>
				<button
					className="btn close-menu-x on-modal"
					onClick={() => closeModel()}
				>
					<span className="bar top open"></span>
					<span className="bar bottom open"></span>
				</button>
			</div>

			<FoundBookCard
				className="found-book-card"
				foundBooks={foundBooks}
				addBookToSavedBooks={props.addBookToSavedBooks}
			/>
			<div className="page-nav-container">
				<div>
					{props.currentSearchPageNumber !== 0 ? (
						<button
							className="btn modal-arrows"
							onClick={() => {
								updateBookResults(-10);
							}}
						>
							←
						</button>
					) : null}{" "}
				</div>
				<p>
					page:{" "}
					{props.currentSearchPageNumber !== 0
						? props.currentSearchPageNumber / 10 + 1
						: 1}
				</p>
				<div>
					<button
						className="btn modal-arrows"
						onClick={() => {
							updateBookResults(+10);
						}}
					>
						→
					</button>
				</div>
			</div>
		</dialog>
	);
};

export default FindBookModel;
