const FilterByRating = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			<legend className="filter-option-legend">Rating</legend>
			<button
				className={`filter-option-btn ${
					props.isRatingFilterDropdownOpen ? "open" : "closed"
				}`}
				onClick={props.openRatingFilterDropdown}
			>
				{props.currentRatingSelected}
				<span>^</span>
			</button>
			{props.isRatingFilterDropdownOpen ? (
				<ol className="filter-option-dropdown">
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="All"
					>
						All
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="0"
					>
						0 - 1
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="1"
					>
						1 - 2
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="2"
					>
						2 - 3
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="3"
					>
						3 - 4
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="4"
					>
						4 - 5
					</li>
					<li
						className="filter-option"
						onClick={props.updateRatingFilter}
						id="5"
					>
						Ratings 5
					</li>
				</ol>
			) : null}
		</fieldset>
	);
};

export default FilterByRating;
