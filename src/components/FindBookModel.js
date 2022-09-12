import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import API_DATA_OBJ from "../API";
import FoundBookCard from "./FoundBookCard";

const FindBookModel = (props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [foundBooks, setFoundBooks] = useState([]);
	const isInitLoad = useRef(true);

	let searchType = props.useSearchType;
	let searchKeyWord = props.useSearchKeyWord;
	let apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchKeyWord}+${searchType}:${searchKeyWord}&startIndex=0&key=${API_DATA_OBJ.API_KEY}`;

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
				? book.volumeInfo.industryIdentifiers[0].identifier
				: Date.now().toString(),
			readStatus: "Unread",
			rating: "",
			isReadNext: false,
			dateAdded: Date.now().toString(),
		};
	};

	const handelResponse = (response) => {
		let eachBook = [];
		response.data.items.map((book) => eachBook.push(Book(book)));
		setFoundBooks(eachBook);
	};

	useEffect(() => {
		if (isInitLoad.current) {
			console.log("First Load");
			isInitLoad.current = false;
			return;
		}
		console.log("After First Load");
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
	}, [props.useSearchKeyWord]);

	if (isLoading)
		return (
			<dialog id="find-book">
				<button onClick={() => checkBooks()}>console</button>Loading...
			</dialog>
		);

	return (
		<dialog id="find-book">
			<FoundBookCard
				className="found-book-card"
				foundBooks={foundBooks}
				addBookToSavedBooks={props.addBookToSavedBooks}
			/>
		</dialog>
	);
};

export default FindBookModel;
