import Main from "./main-elements/Main";
import Header from "./main-elements/Header";
import FindBookModel from "./components/findBooks/FindBookModel";
import BookObjKeys from "./BookObjKeys";
import _BOOKS from "./guestUserBookData";
import sortFunctions from "./Functions";
import LandingPage from "./pages/landing/LandingPage";
import "./sass/main.scss";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { auth, db, addBookToDb, updateBookInDb } from "./firebase";

function App() {
	const [user, setUser] = useState(null);
	const [searchTitleKeyWord, setSearchTitleKeyWord] = useState("");
	const [searchAuthorKeyWord, setSearchAuthorKeyWord] = useState("");
	const [useSearchType, setUseSearchType] = useState("");
	const [useSearchKeyWord, setUseSearchKeyWord] = useState(null);
	const [currentSearchPageNumber, setCurrentSearchPageNumber] =
		useState(null);
	const [savedBooks, setSavedBooks] = useState([]);

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(true);
	const [isMobileShelfMenuOpen, setIsMobileShelfMenuOpen] = useState(false);

	const [isAccountSettingMenuOpen, setIsAccountSettingMenuOpen] =
		useState(false);
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
		if (user.uid !== "guest") {
			addBookToDb(bookToAdd, user.uid);
		}
		return setSavedBooks([bookToAdd, ...savedBooks]);
	};

	//-------------passed down to /Main/BookContainer to update each book state
	const updateReadStatus = (id, value) => {
		let updatedBook = findBookToUpdate(savedBooks, id);
		updatedBook = {
			...updatedBook,
			readStatus: value,
			rating:
				value === BookObjKeys.readStatus.unread
					? ""
					: updatedBook.rating,
		};
		if (user.uid !== "guest") {
			updateBookInDb(updatedBook, user.uid);
		}

		return setSavedBooks(
			savedBooks.map((book) => (book.id === id ? updatedBook : book))
		);
	};

	const findBookToUpdate = (allBooks, id) => {
		let book = allBooks.filter((book) => book.id === id);
		return book[0];
	};

	const updateRating = (id, value) => {
		let bookToUpdate = findBookToUpdate(savedBooks, id);
		bookToUpdate = { ...bookToUpdate, rating: value };
		if (user.uid !== "guest") {
			updateBookInDb(bookToUpdate, user.uid);
		}
		return setSavedBooks(
			savedBooks.map((book) => (book.id === id ? bookToUpdate : book))
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
		let bookToUpdate = findBookToUpdate(savedBooks, id);
		bookToUpdate = {
			...bookToUpdate,
			notes: [note, ...bookToUpdate.notes],
		};
		if (user.uid !== "guest") {
			updateBookInDb(bookToUpdate, user.uid);
		}
		return setSavedBooks(
			savedBooks.map((book) => (book.id === id ? bookToUpdate : book))
		);
	};

	const addReview = (id, reviewToAdd) => {
		let bookToUpdate = findBookToUpdate(savedBooks, id);
		bookToUpdate = {
			...bookToUpdate,
			review: reviewToAdd,
		};
		if (user.uid !== "guest") {
			updateBookInDb(bookToUpdate, user.uid);
		}
		return setSavedBooks(
			savedBooks.map((book) => (book.id === id ? bookToUpdate : book))
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
		let currentBook = findBookToUpdate(savedBooks, bookToUpdate.id);
		currentBook = { ...currentBook, notes: newNotes };
		if (user.uid !== "guest") {
			updateBookInDb(currentBook, user.uid);
		}
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === bookToUpdate.id ? currentBook : book
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
		let currentBook = findBookToUpdate(savedBooks, bookToUpdate.id);
		currentBook = { ...currentBook, notes: newNotes };
		if (user.uid !== "guest") {
			updateBookInDb(currentBook, user.uid);
		}
		return setSavedBooks(
			savedBooks.map((book) =>
				book.id === bookToUpdate.id ? currentBook : book
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

	const checkForData = async () => {
		let docRef = doc(db, "users", auth.currentUser.uid);
		let docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			let data = docSnap.data();
			getAllbooksFromDb(data.allBookIds);
			console.log(data.allBookIds);
			return;
		} else {
			console.log("No such document!");
		}
	};

	const getAllbooksFromDb = (array) => {
		let allBooks = [];
		array.forEach(async (bookId, index) => {
			let bookRef = doc(
				db,
				"users",
				auth.currentUser.uid,
				"allBooks",
				bookId
			);
			let docSnap = await getDoc(bookRef);
			if (docSnap.exists()) {
				let data = docSnap.data();
				allBooks.push(data.data);
				console.log("book found");
				if (index === array.length - 1) {
					setSavedBooks(allBooks);
				}
			} else {
				console.log("No such document!");
			}
		});
	};

	const toggleAccountSettingsMenu = () => {
		setIsMobileShelfMenuOpen(false);
		setIsAccountSettingMenuOpen(!isAccountSettingMenuOpen);
	};

	const handleGuestLogin = () => {
		setSavedBooks(_BOOKS);
		setUser({ uid: "guest", displayName: "guest" });
	};

	const handleSignout = () => {
		setIsAccountSettingMenuOpen(false);
		if (user.uid === "guest") {
			setSavedBooks([]);
			setUser(null);
		} else {
			signOut(auth)
				.then(() => {})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				//user.photoURL
				setUser({ uid: user.uid, displayName: user.displayName });
				checkForData();
			} else {
				setSavedBooks([]);
				setUser(null);
			}
		});
	}, []);

	if (!user) {
		return <LandingPage handleGuestLogin={handleGuestLogin} />;
	}

	if (user) {
		return (
			<>
				<Header
					user={user}
					setUser={setUser}
					savedBooks={savedBooks}
					toggleAccountSettingsMenu={toggleAccountSettingsMenu}
					isAccountSettingMenuOpen={isAccountSettingMenuOpen}
				/>
				{isAccountSettingMenuOpen ? (
					<nav className="nav-main | left-box-shadow-light">
						<div
							className={`nav-main-header${
								user.displayName.length > 9 ? " long-text" : ""
							}`}
						>
							<img
								src="img/test-picture.jpg"
								alt="profile immage"
							/>

							<p>{user.displayName}</p>
						</div>
						<ul className="nav-main-list-container">
							<ul>
								<li>
									<button className="btn nav in-progress | box-shadow">
										Reading Log
									</button>
								</li>
								<li className="margin-block-start-24">
									<button className="btn nav in-progress | box-shadow">
										Account Settings
									</button>
								</li>

								<li className="margin-block-start-24">
									<button className="btn nav in-progress | box-shadow">
										Give Feedback
									</button>
								</li>
							</ul>
							<ul>
								<li>
									<button
										className="btn nav | box-shadow"
										onClick={() => {
											handleSignout();
										}}
									>
										Sign Out
									</button>
								</li>
							</ul>
						</ul>
					</nav>
				) : null}
				<Main
					savedBooks={savedBooks}
					bookToUpdate={bookToUpdate}
					isFilterMenuOpen={isFilterMenuOpen}
					isMobileShelfMenuOpen={isMobileShelfMenuOpen}
					setIsMobileShelfMenuOpen={setIsMobileShelfMenuOpen}
					////---find new book
					searchTitleKeyWord={searchTitleKeyWord}
					searchAuthorKeyWord={searchAuthorKeyWord}
					updateTitleKeyWord={updateTitleKeyWord}
					updateAuthorKeyWord={updateAuthorKeyWord}
					updateSearchType={updateSearchType}
					updateUseSearchKeyWord={updateUseSearchKeyWord}
					updateCurrentSearchPageNumber={
						updateCurrentSearchPageNumber
					}
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
				<FindBookModel
					useSearchType={useSearchType}
					useSearchKeyWord={useSearchKeyWord}
					currentSearchPageNumber={currentSearchPageNumber}
					updateCurrentSearchPageNumber={
						updateCurrentSearchPageNumber
					}
					addBookToSavedBooks={addBookToSavedBooks}
				/>
			</>
		);
	}
}

export default App;
