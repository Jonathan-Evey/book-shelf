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
		<div className="note-card">
			{isNoteOnEdit ? (
				<>
					<textarea
						onChange={(e) => updateEditNoteText(e)}
						value={editNoteText}
					></textarea>
					<div>
						<button
							onClick={() => {
								saveEditNoteText();
							}}
						>
							Save
						</button>
						<button
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
					<div>
						<button
							onClick={() => {
								handelEditBtnClick(props.noteText);
							}}
						>
							Edit
						</button>
						<button
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
