const SortByTitle = (props) => {
	const titleSortOptionKeys = {
		removeSort: "Titles",
		alphabetically: "Titles A - Z",
		reverseAlphabetically: "Titles Z - A ",
	};

	return (
		<fieldset className="filter-option-fieldset title">
			{/* <legend className="filter-option-legend">Title</legend> */}
			<button
				className="filter-option-btn"
				onClick={props.openTitleSortDropdown}
			>
				{props.currentTitleSortDisplayText}
				<span>^</span>
			</button>
			{props.isTitleSortOpen ? (
				<ol className="filter-option-dropdown">
					{props.currentTitleSortDisplayText !==
					titleSortOptionKeys.removeSort ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateTitleSortDisplayText(
									titleSortOptionKeys.removeSort
								)
							}
						>
							Remove
						</li>
					) : null}
					<li
						className="filter-option"
						onClick={() =>
							props.updateTitleSortDisplayText(
								titleSortOptionKeys.alphabetically
							)
						}
					>
						{titleSortOptionKeys.alphabetically}
					</li>
					<li
						className="filter-option"
						onClick={() =>
							props.updateTitleSortDisplayText(
								titleSortOptionKeys.reverseAlphabetically
							)
						}
					>
						{titleSortOptionKeys.reverseAlphabetically}
					</li>
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortByTitle;
