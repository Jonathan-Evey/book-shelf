const BookReview = (props) => {
	const updateReviewText = (e) => {
		props.setReviewText(e.target.value);
	};

	const cancelEdit = () => {
		props.setIsEditReview(false);
	};

	return (
		<div className="card-note | box-shadow-light">
			{props.isEditReview ? (
				<>
					<textarea
						onChange={(e) => updateReviewText(e)}
						value={props.reviewText}
					></textarea>
					<div className="card-note-btn-container">
						<button
							className="btn linear-gradient clr-800-850 notes-reviews-edit"
							onClick={() => {
								props.saveReviewEvent();
							}}
						>
							Save
						</button>
						<button
							className="btn linear-gradient clr-800-850 notes-reviews-edit"
							onClick={() => {
								cancelEdit();
							}}
						>
							Cancel
						</button>
					</div>
				</>
			) : null}
			{!props.isEditReview ? (
				<p className="no-edit">{props.bookToUpdate.review}</p>
			) : null}
		</div>
	);
};

export default BookReview;
