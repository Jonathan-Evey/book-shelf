import BookReview from "../components/BookReview";
import { useState } from "react";

const ReviewContainer = (props) => {
	const [reviewText, setReviewText] = useState("");
	const [isAddingReview, setIsAddingReview] = useState(false);
	const [isEditReview, setIsEditReview] = useState(false);

	const updateReviewText = (e) => {
		setReviewText(e.target.value);
	};

	const addReviewBtnEvent = () => {
		setIsAddingReview(true);
	};

	const editReviewBtnEvent = () => {
		setIsEditReview(!isEditReview);
		setReviewText(props.bookToUpdate.review);
	};

	const backToShelfEvent = () => {
		props.setIsBookReviewDisplayed(false);
		props.setIsFullShelfDisplayed(true);
	};

	const saveReviewEvent = () => {
		if (reviewText === "") {
			return;
		} else {
			let reviewToAdd = reviewText;
			props.addReview(props.bookToUpdate.id, reviewToAdd);
			props.addReviewToBookToUpdate(reviewToAdd);
			setReviewText("");
			setIsAddingReview(false);
			setIsEditReview(false);
		}
	};

	const cancelBtnEvent = () => {
		setIsAddingReview(false);
	};

	return (
		<div className="notes-container">
			<div className="notes-header">
				<div className="notes-header-left">
					<h3>My Review</h3>
				</div>
				<div className="notes-header-center">
					<h4>{props.bookToUpdate.title}</h4>
					<p>by</p>
					<p>{props.bookToUpdate.author}</p>
				</div>
				<div className="notes-header-right">
					<button
						onClick={() => {
							backToShelfEvent();
						}}
					>
						Back to Shelf
					</button>
					{props.bookToUpdate.review === "" ? (
						<button
							onClick={() => {
								addReviewBtnEvent();
							}}
						>
							Add Review
						</button>
					) : (
						<button
							onClick={() => {
								editReviewBtnEvent();
							}}
						>
							Edit review
						</button>
					)}
				</div>
			</div>
			{isAddingReview ? (
				<div className="note-card">
					<textarea
						onChange={(e) => updateReviewText(e)}
						value={reviewText}
					></textarea>
					<div>
						<button
							onClick={() => {
								saveReviewEvent();
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
			{props.bookToUpdate.review !== "" ? (
				<BookReview
					bookToUpdate={props.bookToUpdate}
					key={props.bookToUpdate.id}
					reviewText={reviewText}
					isEditReview={isEditReview}
					setIsEditReview={setIsEditReview}
					setReviewText={setReviewText}
					saveReviewEvent={saveReviewEvent}
				/>
			) : null}
		</div>
	);
};

export default ReviewContainer;
