import { useState } from "react";
import BookNote from "../components/BookNote";

const NoteContainer = (props) => {
	const [noteText, setNoteText] = useState("");
	const [isAddingNewNote, setIsAddingNewNote] = useState(false);

	const updateNoteText = (e) => {
		setNoteText(e.target.value);
	};

	const addNoteBtnEvent = () => {
		setIsAddingNewNote(true);
	};

	const backToShelfEvent = () => {
		props.setIsBookNotesDisplayed(false);
		props.setIsFullShelfDisplayed(true);
	};

	const saveNewNoteEvent = () => {
		let noteToAdd = Note(noteText);
		props.addNewNote(props.bookToUpdateNotes.id, noteToAdd);
		props.addNoteToBookToUpdateNotes(noteToAdd);
		setNoteText("");
		setIsAddingNewNote(false);
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
		<div className="notes-container">
			<div className="notes-header">
				<div className="notes-header-left">
					<h3>My Notes</h3>
				</div>
				<div className="notes-header-center">
					<h4>{props.bookToUpdateNotes.title}</h4>
					<p>by</p>
					<p>{props.bookToUpdateNotes.author}</p>
				</div>
				<div className="notes-header-right">
					<button
						onClick={() => {
							addNoteBtnEvent();
						}}
					>
						Add a Note
					</button>
					<button
						onClick={() => {
							backToShelfEvent();
						}}
					>
						Back to Shelf
					</button>
				</div>
			</div>
			{isAddingNewNote ? (
				<div className="new-note-card">
					<textarea
						onChange={(e) => updateNoteText(e)}
						onKeyUp={(e) =>
							e.key === "Enter" ? saveNewNoteEvent() : false
						}
						value={noteText}
					></textarea>
					<button
						onClick={() => {
							saveNewNoteEvent();
						}}
					>
						Save
					</button>
					<button
						onClick={() => {
							cancelBtnEvent();
						}}
					>
						Cancel
					</button>
				</div>
			) : null}
			{props.bookToUpdateNotes.notes.map((note) => (
				<BookNote
					key={note.id}
					noteText={note.noteText}
					noteId={note.id}
					updateNoteOnBook={props.updateNoteOnBook}
				/>
			))}
		</div>
	);
};

export default NoteContainer;
