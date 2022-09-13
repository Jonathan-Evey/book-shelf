import Main from "./main-elements/Main";
import Header from "./main-elements/Header";
import FindBookModel from "./components/FindBookModel";
import BookObjKeys from "./BookObjKeys";
import sortFunctions from "./Functions";
import React, { useState, useEffect } from "react";

function App() {
	const [searchTitleKeyWord, setSearchTitleKeyWord] = useState("");
	const [searchAuthorKeyWord, setSearchAuthorKeyWord] = useState("");
	const [useSearchType, setUseSearchType] = useState("");
	const [useSearchKeyWord, setUseSearchKeyWord] = useState(null);

	const updateTitleKeyWord = (value) => {
		setSearchTitleKeyWord(value);
		console.log(searchTitleKeyWord);
	};

	const updateAuthorKeyWord = (value) => {
		setSearchAuthorKeyWord(value);
		console.log(searchAuthorKeyWord);
	};

	const updateSearchType = (value) => {
		setUseSearchType(value);
	};

	const updateUseSearchKeyWord = (value) => {
		setUseSearchKeyWord(value);
	};

	const sortTitleAlphabetically = (data) => {
		let newBook = [...data].sort((a, b) => a.title.localeCompare(b.title));
		setSavedBooks(newBook);
	};
	const sortTitleReverseAlphabetically = (data) => {
		let newBook = [...data].sort((a, b) => b.title.localeCompare(a.title));
		setSavedBooks(newBook);
	};

	const [savedBooks, setSavedBooks] = useState([
		{
			author: ["J.R.R. Tolkien"],
			id: "1",
			thumbnail:
				"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Lord of the Rings",
			readStatus: "Unread",
			rating: 1,
			genres: ["Fiction", "Fantasy"],
			isReadNext: true,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: "2",
			thumbnail:
				"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Fellowship Of The Ring",
			readStatus: "Read",
			rating: 2,
			genres: ["Fiction"],
			isReadNext: false,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: "3",
			thumbnail:
				"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Lord of the Rings",
			readStatus: "Unread",
			rating: 3,
			genres: ["Fiction", "Fantasy"],
			isReadNext: false,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: "4",
			thumbnail:
				"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Fellowship Of The Ring",
			readStatus: "Read",
			rating: 4,
			genres: ["Fiction", "Fantasy"],
			isReadNext: false,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: 5,
			thumbnail:
				"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Lord of the Rings",
			genres: ["Fiction", "Fantasy"],
			readStatus: "Unread",
			rating: 5,
			isReadNext: false,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: "6",
			thumbnail:
				"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Fellowship Of The Ring",
			genres: ["Fiction", "Fantasy"],
			readStatus: "Read",
			rating: "",
			isReadNext: false,
		},
	]);
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(true);

	useEffect(() => {}, []);

	const openFilterMenuToggle = () => {
		setIsFilterMenuOpen(!isFilterMenuOpen);
	};

	const addBookToSavedBooks = (bookToAdd) => {
		return setSavedBooks([bookToAdd, ...savedBooks]);
	};

	//-------------passed down to /Main/BookContainer to update state from each BookCard
	const updateReadStatus = (id, value) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id
					? {
							...book,
							readStatus: value,
							isReadNext:
								value === BookObjKeys.readStatus.unread
									? book.isReadNext
									: false,
					  }
					: book
			)
		);
	};

	const updateReadNext = (id, value) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id ? { ...book, isReadNext: !value } : book
			)
		);
	};

	return (
		<div className="App">
			<FindBookModel
				useSearchType={useSearchType}
				useSearchKeyWord={useSearchKeyWord}
				addBookToSavedBooks={addBookToSavedBooks}
			/>
			<Header />
			<Main
				//------passing state
				searchTitleKeyWord={searchTitleKeyWord}
				searchAuthorKeyWord={searchAuthorKeyWord}
				savedBooks={savedBooks}
				isFilterMenuOpen={isFilterMenuOpen}
				//--------passing functions
				updateSearchType={updateSearchType}
				updateUseSearchKeyWord={updateUseSearchKeyWord}
				updateTitleKeyWord={updateTitleKeyWord}
				updateAuthorKeyWord={updateAuthorKeyWord}
				openFilterMenuToggle={openFilterMenuToggle}
				updateReadStatus={updateReadStatus}
				updateReadNext={updateReadNext}
				sortTitleAlphabetically={sortTitleAlphabetically}
				sortTitleReverseAlphabetically={sortTitleReverseAlphabetically}
			/>
		</div>
	);
}

export default App;
