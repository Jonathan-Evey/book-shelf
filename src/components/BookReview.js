const BookReview = (props) => {
	const updateReviewText = (e) => {
		props.setReviewText(e.target.value);
	};

	const cancelEdit = () => {
		props.setIsEditReview(false);
	};

	return (
		<div className="note-card">
			{props.isEditReview ? (
				<>
					<textarea
						onChange={(e) => updateReviewText(e)}
						value={props.reviewText}
					></textarea>
					<div>
						<button
							onClick={() => {
								props.saveReviewEvent();
							}}
						>
							Save
						</button>
						<button
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
