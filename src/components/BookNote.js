import { useState } from "react";

const BookNote = (props) => {
	const [isNoteOnEdit, setIsNoteOnEdit] = useState(false);
	const [editNoteText, setEditNoteText] = useState("");

	const handelEditBtnClick = (text) => {
		setIsNoteOnEdit(true);
		setEditNoteText(text);
	};

	const updateEditNoteText = (e) => {
		setEditNoteText(e.target.value);
	};

	const saveEditNoteText = () => {
		if (editNoteText === "") {
			return;
		} else {
			props.updateNoteOnBook(props.noteId, editNoteText);
			setIsNoteOnEdit(false);
		}
	};

	const cancelEditNote = () => {
		setIsNoteOnEdit(false);
	};

	const handelDeleteBtnClick = () => {
		props.deleteNote(props.noteId);
	};

	return (
		<div className="card-note | box-shadow-light">
			{isNoteOnEdit ? (
				<>
					<textarea
						onChange={(e) => updateEditNoteText(e)}
						value={editNoteText}
					></textarea>
					<div className="card-note-btn-container">
						<button
							className="btn linear-gradient clr-800-850"
							onClick={() => {
								saveEditNoteText();
							}}
						>
							Save
						</button>
						<button
							className="btn linear-gradient clr-800-850"
							onClick={() => {
								cancelEditNote();
							}}
						>
							Cancel
						</button>
					</div>
				</>
			) : null}
			{!isNoteOnEdit && props.isEditNotes ? (
				<>
					<p>{props.noteText}</p>
					<div className="card-note-btn-container">
						<button
							className="btn linear-gradient clr-800-850"
							onClick={() => {
								handelEditBtnClick(props.noteText);
							}}
						>
							Edit
						</button>
						<button
							className="btn linear-gradient clr-800-850"
							onClick={() => {
								handelDeleteBtnClick();
							}}
						>
							Delete
						</button>
					</div>
				</>
			) : null}
			{!isNoteOnEdit && !props.isEditNotes ? (
				<p className="no-edit">{props.noteText}</p>
			) : null}
		</div>
	);
};

export default BookNote;
