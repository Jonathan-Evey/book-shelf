import Main from "./main-elements/Main";
import Header from "./main-elements/Header";
import FindBookModel from "./components/FindBookModel";
import React, { useState, useEffect } from "react";

function App() {
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
			isPrioritized: false,
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
			isPrioritized: false,
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
			isPrioritized: false,
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
			isPrioritized: false,
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
			isPrioritized: false,
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
			isPrioritized: false,
		},
	]);
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(true);

	useEffect(() => {}, []);

	const openFilterMenuToggle = () => {
		setIsFilterMenuOpen(!isFilterMenuOpen);
	};

	//-------------passed down to /Main/BookContainer to update state from each BookCard
	const updateReadStatus = (id, value) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id ? { ...book, readStatus: value } : book
			)
		);
	};

	return (
		<div className="App">
			<FindBookModel />
			<Header />
			<Main
				//------passing state
				savedBooks={savedBooks}
				isFilterMenuOpen={isFilterMenuOpen}
				//--------passing functions
				openFilterMenuToggle={openFilterMenuToggle}
				updateReadStatus={updateReadStatus}
			/>
		</div>
	);
}

export default App;
