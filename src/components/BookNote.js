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
		props.updateNoteOnBook(props.noteId, editNoteText);
		setIsNoteOnEdit(false);
	};

	const cancelEditNote = () => {
		setIsNoteOnEdit(false);
	};

	return (
		<div className="note-card">
			{isNoteOnEdit ? (
				<>
					<textarea
						onChange={(e) => updateEditNoteText(e)}
						onKeyUp={(e) =>
							e.key === "Enter" ? saveEditNoteText() : false
						}
						value={editNoteText}
					></textarea>
					<p>{props.noteId}</p>
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
			) : (
				<>
					<p>{props.noteText}</p>
					<p>{props.noteId}</p>
					<div>
						<button
							onClick={() => {
								handelEditBtnClick(props.noteText);
							}}
						>
							Edit
						</button>
						<button>Delete</button>
					</div>
				</>
			)}
		</div>
	);
};

export default BookNote;
