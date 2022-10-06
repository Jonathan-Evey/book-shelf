import { ratingSortOptionKeys } from "../../SortKeys";

const SortBtRating = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			{!props.isRatingSortOpen ? (
				<ol className="filter-option-dropdown">
					<button
						className={`filter-option-btn${
							props.currentRatingSortDisplayText !==
							ratingSortOptionKeys.removeSort
								? " active"
								: ""
						}`}
						onClick={props.openRatingSortDropdown}
					>
						Rating
						<span>^</span>
					</button>
				</ol>
			) : null}
			{props.isRatingSortOpen ? (
				<ol
					onMouseLeave={() => {
						props.closeRatingSortDropdown();
					}}
					className="filter-option-dropdown"
				>
					<button
						className="filter-option-btn open"
						onClick={props.openRatingSortDropdown}
					>
						Rating
						<span>^</span>
					</button>
					{props.currentRatingSortDisplayText !==
					ratingSortOptionKeys.removeSort ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateRatingSortDisplayText(
									ratingSortOptionKeys.removeSort
								)
							}
						>
							<button>Remove</button>
						</li>
					) : null}
					{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.highToLow &&
					props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.lowToHigh ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateRatingSortDisplayText(
									ratingSortOptionKeys.highToLow
								)
							}
						>
							<button>{ratingSortOptionKeys.highToLow}</button>
						</li>
					) : null}
					{props.currentRatingSortDisplayText !==
						ratingSortOptionKeys.highToLow &&
					props.currentRatingSortDisplayText ===
						ratingSortOptionKeys.lowToHigh ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateRatingSortDisplayText(
									ratingSortOptionKeys.highToLow
								)
							}
							onBlur={() => {
								props.closeRatingSortDropdown();
							}}
						>
							<button>{ratingSortOptionKeys.highToLow}</button>
						</li>
					) : null}

					{props.currentRatingSortDisplayText !==
					ratingSortOptionKeys.lowToHigh ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateRatingSortDisplayText(
									ratingSortOptionKeys.lowToHigh
								)
							}
							onBlur={() => {
								props.closeRatingSortDropdown();
							}}
						>
							<button>{ratingSortOptionKeys.lowToHigh}</button>
						</li>
					) : null}
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortBtRating;
