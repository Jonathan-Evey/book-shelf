import { useState } from "react";
import BookNote from "../components/BookNote";

const NoteContainer = (props) => {
	const [noteText, setNoteText] = useState("");
	const [isAddingNewNote, setIsAddingNewNote] = useState(false);
	const [isEditNotes, setIsEditNotes] = useState(false);

	const updateNoteText = (e) => {
		setNoteText(e.target.value);
	};

	const addNoteBtnEvent = () => {
		setIsAddingNewNote(true);
	};

	const editANoteBtnEvent = () => {
		setIsEditNotes(!isEditNotes);
	};

	const backToShelfEvent = () => {
		props.setIsBookNotesDisplayed(false);
		props.setIsFullShelfDisplayed(true);
	};

	const saveNewNoteEvent = () => {
		if (noteText === "") {
			return;
		} else {
			let noteToAdd = Note(noteText);
			props.addNewNote(props.bookToUpdate.id, noteToAdd);
			props.addNoteToBookToUpdate(noteToAdd);
			setNoteText("");
			setIsAddingNewNote(false);
		}
	};

	const cancelBtnEvent = () => {
		setIsAddingNewNote(false);
	};

	const Note = (note) => {
		return {
			id: Date.now(),
			noteText: note,
		};
	};

	return (
		<section className="container-notes | box-shadow">
			<header className="header-notes">
				<h2 className="notes-title | ff-main-accent">My Notes</h2>
				<div className="header-notes-wraper-center-right">
					<div className="padding-inline-8 text-centered">
						<h4 className="fs-600 fw-bold margin-block-end-8">
							{props.bookToUpdate.title}
						</h4>
						<p className="fs-300 mobile-fs-300 margin-block-end-8">
							by
						</p>
						<p className="fs-550 fw-bold">
							{props.bookToUpdate.author}
						</p>
					</div>

					<button
						className="btn close-menu-x on-notes"
						onClick={() => {
							backToShelfEvent();
						}}
					>
						<span className="bar top"></span>
						<span className="bar bottom"></span>
					</button>
				</div>
			</header>
			{isAddingNewNote ? (
				<div className="card-note | box-shadow">
					<textarea
						onChange={(e) => updateNoteText(e)}
						value={noteText}
					></textarea>
					<div className="card-note-btn-container">
						<button
							className="btn linear-gradient clr-800-850 notes-reviews-edit"
							onClick={() => {
								saveNewNoteEvent();
							}}
						>
							Save
						</button>
						<button
							className="btn linear-gradient clr-800-850 notes-reviews-edit"
							onClick={() => {
								cancelBtnEvent();
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			) : null}
			{props.bookToUpdate.notes.map((note) => (
				<BookNote
					key={note.id}
					noteText={note.noteText}
					noteId={note.id}
					isEditNotes={isEditNotes}
					updateNoteOnBook={props.updateNoteOnBook}
					deleteNote={props.deleteNote}
				/>
			))}
			<div className="wrap-notes-edit-write-btns | margin-block-16">
				<button
					className="btn linear-gradient notes-reviews clr-700-800"
					onClick={() => {
						addNoteBtnEvent();
					}}
				>
					Write Note
				</button>
				{props.bookToUpdate.notes[0] ? (
					<button
						className="btn linear-gradient notes-reviews clr-700-800 | margin-inline-start-16"
						onClick={() => {
							editANoteBtnEvent();
						}}
					>
						Edit a Note
					</button>
				) : null}
			</div>
		</section>
	);
};

export default NoteContainer;
