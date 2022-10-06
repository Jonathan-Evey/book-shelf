import axios from "axios";
import React, { useState, useEffect } from "react";
import FoundBookCard from "./FoundBookCard";

const FindBookModel = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [foundBooks, setFoundBooks] = useState([]);

	let searchType = props.useSearchType;
	let searchKeyWord = props.useSearchKeyWord;

	function checkBooks() {
		console.log(foundBooks);
	}

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
				  } ${Date.now()}`
				: Date.now(),
			readStatus: "Unread",
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
			console.log("After First Load");
			console.log(apiURL);
			setIsLoading(true);
			let cancel;
			axios
				.get(apiURL, {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				})
				.then((response) => {
					console.log(response);
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
				<button onClick={() => checkBooks()}>console</button>Loading...
			</dialog>
		);

	return (
		<dialog id="find-book">
			<button className="close-model-btn" onClick={() => closeModel()}>
				X
			</button>
			<FoundBookCard
				className="found-book-card"
				foundBooks={foundBooks}
				addBookToSavedBooks={props.addBookToSavedBooks}
			/>
			<div className="page-nav-container">
				{props.currentSearchPageNumber !== 0 ? (
					<button
						onClick={() => {
							updateBookResults(-10);
						}}
					>
						Previous
					</button>
				) : null}
				<p>
					page:{" "}
					{props.currentSearchPageNumber !== 0
						? props.currentSearchPageNumber / 10 + 1
						: 1}
				</p>
				<button
					onClick={() => {
						updateBookResults(+10);
					}}
				>
					Next
				</button>
			</div>
		</dialog>
	);
};

export default FindBookModel;
