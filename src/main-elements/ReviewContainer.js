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
		<section className="container-notes | box-shadow">
			<header className="header-notes">
				<h2 className="notes-title | ff-main-accent">My Review</h2>
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
			{isAddingReview ? (
				<div className="card-note | box-shadow">
					<textarea
						onChange={(e) => updateReviewText(e)}
						value={reviewText}
					></textarea>
					<div className="card-note-btn-container">
						<button
							className="btn linear-gradient clr-800-850 notes-reviews-edit"
							onClick={() => {
								saveReviewEvent();
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
			<div className="wrap-notes-edit-write-btns | margin-block-16">
				{props.bookToUpdate.review === "" ? (
					<button
						className="btn linear-gradient notes-reviews clr-700-800"
						onClick={() => {
							addReviewBtnEvent();
						}}
					>
						Add Review
					</button>
				) : (
					<button
						className="btn linear-gradient notes-reviews clr-700-800"
						onClick={() => {
							editReviewBtnEvent();
						}}
					>
						Edit review
					</button>
				)}
			</div>
		</section>
	);
};

export default ReviewContainer;
