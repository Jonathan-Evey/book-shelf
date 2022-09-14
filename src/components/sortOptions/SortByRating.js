import { ratingSortOptionKeys } from "../../SortKeys";

const SortBtRating = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			<button
				className="filter-option-btn"
				onClick={props.openRatingSortDropdown}
			>
				{props.currentRatingSortDisplayText}
				<span>^</span>
			</button>
			{props.isRatingSortOpen ? (
				<ol className="filter-option-dropdown">
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
							Remove
						</li>
					) : null}
					<li
						className="filter-option"
						onClick={() =>
							props.updateRatingSortDisplayText(
								ratingSortOptionKeys.highToLow
							)
						}
					>
						{ratingSortOptionKeys.highToLow}
					</li>
					<li
						className="filter-option"
						onClick={() =>
							props.updateRatingSortDisplayText(
								ratingSortOptionKeys.lowToHigh
							)
						}
					>
						{ratingSortOptionKeys.lowToHigh}
					</li>
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortBtRating;
