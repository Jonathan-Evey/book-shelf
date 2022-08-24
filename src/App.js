import Header from "./main-elements/Header";
import Main from "./main-elements/Main";
import FindBookModel from "./components/FindBookModel";
import React, { useState, useEffect } from "react";

function App() {
	const [savedBooks, setSavedBooks] = useState([
		{
			author: ["J.R.R. Tolkien"],
			id: "9780547951942",
			thumbnail:
				"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Lord of the Rings",
			readStatus: "Unread",
			isPrioritized: false,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: "9780547952017",
			thumbnail:
				"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Fellowship Of The Ring",
			readStatus: "Read",
			isPrioritized: false,
		},
	]);

	useEffect(() => {}, []);

	function setReadStatus() {}

	return (
		<div className="App">
			<FindBookModel />
			<Header />
			<Main savedBooks={savedBooks} />
		</div>
	);
}

export default App;
