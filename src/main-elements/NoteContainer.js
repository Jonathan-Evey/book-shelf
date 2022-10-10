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
			props.addNewNote(props.bookToUpdateNotes.id, noteToAdd);
			props.addNoteToBookToUpdateNotes(noteToAdd);
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
							backToShelfEvent();
						}}
					>
						Back to Shelf
					</button>
					<button
						onClick={() => {
							addNoteBtnEvent();
						}}
					>
						Add a Note
					</button>
					{props.bookToUpdateNotes.notes[0] ? (
						<button
							onClick={() => {
								editANoteBtnEvent();
							}}
						>
							Edit a Note
						</button>
					) : null}
				</div>
			</div>
			{isAddingNewNote ? (
				<div className="note-card">
					<textarea
						onChange={(e) => updateNoteText(e)}
						value={noteText}
					></textarea>
					<div>
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
				</div>
			) : null}
			{props.bookToUpdateNotes.notes.map((note) => (
				<BookNote
					key={note.id}
					noteText={note.noteText}
					noteId={note.id}
					isEditNotes={isEditNotes}
					updateNoteOnBook={props.updateNoteOnBook}
					deleteNote={props.deleteNote}
				/>
			))}
		</div>
	);
};

export default NoteContainer;
