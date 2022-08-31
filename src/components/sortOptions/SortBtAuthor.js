const SortBtAuthor = (props) => {
	const authorSortOptionKeys = {
		removeSort: "Authors",
		alphabetically: "Author A - Z",
		reverseAlphabetically: "Author Z - A ",
	};
	return (
		<fieldset className="filter-option-fieldset author">
			<button
				className="filter-option-btn"
				onClick={props.openAuthorSortDropdown}
			>
				{props.currentAuthorSortDisplayText}
				<span>^</span>
			</button>
			{props.isAuthorSortOpen ? (
				<ol className="filter-option-dropdown">
					{props.currentAuthorSortDisplayText !==
					authorSortOptionKeys.removeSort ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateAuthorSortDisplayText(
									authorSortOptionKeys.removeSort
								)
							}
						>
							Remove
						</li>
					) : null}
					<li
						className="filter-option"
						onClick={() =>
							props.updateAuthorSortDisplayText(
								authorSortOptionKeys.alphabetically
							)
						}
					>
						{authorSortOptionKeys.alphabetically}
					</li>
					<li
						className="filter-option"
						onClick={() =>
							props.updateAuthorSortDisplayText(
								authorSortOptionKeys.reverseAlphabetically
							)
						}
					>
						{authorSortOptionKeys.reverseAlphabetically}
					</li>
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortBtAuthor;
