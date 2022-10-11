import Main from "./main-elements/Main";
import Header from "./main-elements/Header";
import FindBookModel from "./components/findBooks/FindBookModel";
import BookObjKeys from "./BookObjKeys";
import sortFunctions from "./Functions";
import React, { useState } from "react";

function App() {
	const [searchTitleKeyWord, setSearchTitleKeyWord] = useState("");
	const [searchAuthorKeyWord, setSearchAuthorKeyWord] = useState("");
	const [useSearchType, setUseSearchType] = useState("");
	const [useSearchKeyWord, setUseSearchKeyWord] = useState(null);
	const [currentSearchPageNumber, setCurrentSearchPageNumber] =
		useState(null);
	const [savedBooks, setSavedBooks] = useState([
		{
			author: ["J.R.R. Tolkien"],
			id: 1,
			thumbnail:
				"http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Lord of the Rings",
			readStatus: "Read",
			notes: [],
			review: "",
			rating: 5,
			genres: ["Fiction", "Fantasy"],
			dateAdded: 1663510521482,
		},
		{
			author: ["J.R.R. Tolkien"],
			id: 2,
			thumbnail:
				"http://books.google.com/books/content?id=aWZzLPhY4o0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Fellowship Of The Ring",
			readStatus: "Read",
			notes: [],
			review: "",
			rating: 4,
			genres: ["Fiction"],
			dateAdded: 1663510510254,
		},
		{
			author: ["Frank Herbert"],
			id: 3,
			thumbnail:
				"http://books.google.com/books/content?id=UAhAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "Dune",
			readStatus: "Unread",
			notes: [],
			review: "",
			rating: "",
			genres: ["Fiction"],
			dateAdded: 1663510496511,
		},
		{
			author: ["Mark Twain"],
			id: 4,
			thumbnail:
				"http://books.google.com/books/content?id=TeZvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "The Adventures of Huckleberry Finn",
			readStatus: "Unread",
			notes: [],
			review: "",
			rating: "",
			genres: ["Fiction"],
			dateAdded: 1663510481022,
		},
		{
			author: ["Brian Jacques"],
			id: 5,
			thumbnail:
				"http://books.google.com/books/content?id=vKGPDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
			title: "Redwall",
			genres: ["Juvenile Fiction"],
			readStatus: "Read",
			notes: [],
			review: "",
			rating: 4,
			dateAdded: 1663510456738,
		},
		{
			author: ["Ernest Hemingway"],
			id: 6,
			thumbnail:
				"http://books.google.com/books/content?id=rDHuAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
			title: "The Old Man and the Sea",
			genres: ["Fiction"],
			readStatus: "Unread",
			notes: [],
			review: "",
			rating: "",
			dateAdded: 1663510396776,
		},
	]);
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(true);
	const [bookToUpdate, setBookToUpdate] = useState(null);

	const updateTitleKeyWord = (value) => {
		setSearchTitleKeyWord(value);
	};

	const updateAuthorKeyWord = (value) => {
		setSearchAuthorKeyWord(value);
	};

	const updateSearchType = (value) => {
		setUseSearchType(value);
	};

	const updateUseSearchKeyWord = (value) => {
		setUseSearchKeyWord(value);
	};

	const updateCurrentSearchPageNumber = (value) => {
		setCurrentSearchPageNumber(value);
	};

	const sortBackToDefault = (data) => {
		let newBook = sortFunctions.defaultSort(data);
		setSavedBooks(newBook);
	};

	const sortAlphabetically = (data, key) => {
		let newBook = sortFunctions.sortAlphabetically(data, key);
		setSavedBooks(newBook);
	};
	const sortReverseAlphabetically = (data, key) => {
		let newBook = sortFunctions.sortReverseAlphabetically(data, key);
		setSavedBooks(newBook);
	};

	const sortByRating = (data, key) => {
		let newBook = sortFunctions.sortByRating(data, key);
		setSavedBooks(newBook);
	};

	const openFilterMenuToggle = () => {
		setIsFilterMenuOpen(!isFilterMenuOpen);
	};

	const addBookToSavedBooks = (bookToAdd) => {
		return setSavedBooks([bookToAdd, ...savedBooks]);
	};

	//-------------passed down to /Main/BookContainer to update each book state
	const updateReadStatus = (id, value) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id
					? {
							...book,
							readStatus: value,
							rating:
								value === BookObjKeys.readStatus.unread
									? ""
									: book.rating,
					  }
					: book
			)
		);
	};

	const updateRating = (id, value) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id
					? {
							...book,
							rating: value,
					  }
					: book
			)
		);
	};

	//------------------add/edit review and note functions/state
	const addNoteToBookToUpdate = (newNote) => {
		setBookToUpdate((bookToUpdate) => {
			return {
				...bookToUpdate,
				notes: [newNote, ...bookToUpdate.notes],
			};
		});
	};

	const addReviewToBookToUpdate = (reviewToAdd) => {
		setBookToUpdate((bookToUpdate) => {
			return {
				...bookToUpdate,
				review: reviewToAdd,
			};
		});
	};

	const addNewNote = (id, note) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id
					? { ...book, notes: [note, ...book.notes] }
					: book
			)
		);
	};

	const addReview = (id, reviewToAdd) => {
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === id ? { ...book, review: reviewToAdd } : book
			)
		);
	};

	const updateNoteOnBook = (noteId, updatedNote) => {
		updateBookNotes(noteId, updatedNote);
		updateBookToUpdateNotes(noteId, updatedNote);
	};

	const updateBookNotes = (noteId, updatedNote) => {
		let index = savedBooks.findIndex((book) => book.id === bookToUpdate.id);
		let newNotes = savedBooks[index].notes.map((note) =>
			note.id === noteId ? { ...note, noteText: updatedNote } : note
		);
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === bookToUpdate.id
					? { ...book, notes: newNotes }
					: book
			)
		);
	};

	const updateBookToUpdateNotes = (noteId, updatedNote) => {
		let newNotes = bookToUpdate.notes.map((note) =>
			note.id === noteId ? { ...note, noteText: updatedNote } : note
		);
		return setBookToUpdate((bookToUpdate) => {
			return {
				...bookToUpdate,
				notes: newNotes,
			};
		});
	};

	const deleteNote = (noteId) => {
		removeBookNote(noteId);
		removeBookToUpdateNote(noteId);
	};

	const removeBookNote = (noteId) => {
		let index = savedBooks.findIndex((book) => book.id === bookToUpdate.id);
		let newNotes = savedBooks[index].notes.filter((note) =>
			note.id !== noteId ? note : null
		);
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === bookToUpdate.id
					? { ...book, notes: newNotes }
					: book
			)
		);
	};

	const removeBookToUpdateNote = (noteId) => {
		let newNotes = bookToUpdate.notes.filter((note) =>
			note.id !== noteId ? note : null
		);
		return setBookToUpdate((bookToUpdate) => {
			return {
				...bookToUpdate,
				notes: newNotes,
			};
		});
	};

	return (
		<div className="App">
			<FindBookModel
				useSearchType={useSearchType}
				useSearchKeyWord={useSearchKeyWord}
				currentSearchPageNumber={currentSearchPageNumber}
				updateCurrentSearchPageNumber={updateCurrentSearchPageNumber}
				addBookToSavedBooks={addBookToSavedBooks}
			/>
			<Header />
			<Main
				savedBooks={savedBooks}
				bookToUpdate={bookToUpdate}
				isFilterMenuOpen={isFilterMenuOpen}
				////---find new book
				searchTitleKeyWord={searchTitleKeyWord}
				searchAuthorKeyWord={searchAuthorKeyWord}
				updateTitleKeyWord={updateTitleKeyWord}
				updateAuthorKeyWord={updateAuthorKeyWord}
				updateSearchType={updateSearchType}
				updateUseSearchKeyWord={updateUseSearchKeyWord}
				updateCurrentSearchPageNumber={updateCurrentSearchPageNumber}
				////---main menu state
				openFilterMenuToggle={openFilterMenuToggle}
				////---sort shelf
				sortBackToDefault={sortBackToDefault}
				sortAlphabetically={sortAlphabetically}
				sortReverseAlphabetically={sortReverseAlphabetically}
				sortByRating={sortByRating}
				////---book state
				updateReadStatus={updateReadStatus}
				updateRating={updateRating}
				setBookToUpdate={setBookToUpdate}
				addNoteToBookToUpdate={addNoteToBookToUpdate}
				addNewNote={addNewNote}
				deleteNote={deleteNote}
				updateNoteOnBook={updateNoteOnBook}
				addReviewToBookToUpdate={addReviewToBookToUpdate}
				addReview={addReview}
			/>
		</div>
	);
}

export default App;
