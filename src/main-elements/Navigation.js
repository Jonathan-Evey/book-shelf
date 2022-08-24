import React, { useState } from "react";

const Navigation = ({ filterByReadStatus, filterByRatingStatus }) => {
	const [readStatusFilter, setReadStatusFilter] = useState("All")
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] = useState(false)

	const [ratingFilter, setRatingFilter] = useState('All')
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] = useState(false)

	const openReadStatusDropdown = () => {
		if (isReadStatusDropdownOpen) {
			setIsReadStatusDropdownOpen(false)
		} else {
			setIsReadStatusDropdownOpen(true)
		}
	}
	function updateReadStatusFilter(e) {
		setReadStatusFilter(e.target.textContent)
		filterByReadStatus(e.target.textContent)
		openReadStatusDropdown();
	}

	const openRatingFilterDropdown = () => {
		if (isRatingFilterDropdownOpen) {
			setIsRatingFilterDropdownOpen(false)
		} else {
			setIsRatingFilterDropdownOpen(true)
		}
	}

	function updateRatingFilter(e) {
		setRatingFilter(e.target.textContent)
		filterByRatingStatus(e.target.textContent);
		openRatingFilterDropdown();
	}
	return (
		<aside>
			<label htmlFor="title-search">Search for Title:</label>
			<input type="search" name="title-search" id="title-search" />
			<label htmlFor="author-search">Search for Author:</label>
			<input type="search" name="author-search" id="author-search" />
			<fieldset className="filter-container-fieldset">
			<legend className="filter-container-legend">Filter By:</legend>
				<fieldset className="filter-option-fieldset">
					<legend className="filter-option-legend">Read Status</legend>
						<button 
							className="filter-option-btn"
							onClick={openReadStatusDropdown}
							>{readStatusFilter}<p>^</p>
						</button>
						{isReadStatusDropdownOpen ? 
						<ol className="filter-option-dropdown">
							<li className="filter-option"
								onClick={updateReadStatusFilter}>All</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Unread</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Reading</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Read</li>
						</ol> : null}
				</fieldset>
				<fieldset className="filter-option-fieldset">
					<legend className="filter-option-legend">Rating:</legend>
						<button 
							className="filter-option-btn"
							onClick={openRatingFilterDropdown}
							>{ratingFilter}<p>^</p>
						</button>
						{isRatingFilterDropdownOpen ? 
						<ol className="filter-option-dropdown">
							<li className="filter-option"
								onClick={updateRatingFilter}>All</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>No Rating</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 0 - 1</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 1 - 2</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 2 - 3</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 3 - 4</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 4 - 5</li>
							<li className="filter-option"
								onClick={updateRatingFilter}>Ratings 5</li>
						</ol> : null}
				</fieldset>
			</fieldset>
		</aside>);
};

export default Navigation;
