import { ratingKeys } from "../../filterKeyObjs";

const FilterByRating = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			<legend className="filter-option-legend">Rating</legend>
			{!props.isRatingFilterDropdownOpen ? (
				<ol className="filter-option-dropdown">
					<button
						className={`filter-option-btn ${
							props.isRatingFilterDropdownOpen ? "open" : "closed"
						}`}
						onClick={props.openRatingFilterDropdown}
					>
						{props.currentRatingSelected}
						<span>^</span>
					</button>
				</ol>
			) : null}

			{props.isRatingFilterDropdownOpen ? (
				<ol
					className="filter-option-dropdown"
					onMouseLeave={() => {
						props.closeRatingFilterDropdown();
					}}
				>
					<button
						className={`filter-option-btn ${
							props.isRatingFilterDropdownOpen ? "open" : "closed"
						}`}
						onClick={props.openRatingFilterDropdown}
					>
						{props.currentRatingSelected}
						<span>^</span>
					</button>
					{props.currentRatingSelected !== ratingKeys.all ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="All">
								All
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.zeroToOne ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="0">
								0 - 1
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.oneToTwo ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="1">
								1 - 2
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.twoToThree ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="2">
								2 - 3
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.threeToFour ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="3">
								3 - 4
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.fourToFive &&
					props.currentRatingSelected === ratingKeys.five ? (
						<li className="filter-option">
							<button
								id="4"
								onClick={props.updateRatingFilter}
								onBlur={() => {
									props.closeRatingFilterDropdown();
								}}
							>
								4 - 5
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.fourToFive &&
					props.currentRatingSelected !== ratingKeys.five ? (
						<li className="filter-option">
							<button onClick={props.updateRatingFilter} id="4">
								4 - 5
							</button>
						</li>
					) : null}
					{props.currentRatingSelected !== ratingKeys.five ? (
						<li className="filter-option">
							<button
								id="5"
								onClick={props.updateRatingFilter}
								onBlur={() => {
									props.closeRatingFilterDropdown();
								}}
							>
								Rated 5
							</button>
						</li>
					) : null}
				</ol>
			) : null}
		</fieldset>
	);
};

export default FilterByRating;
