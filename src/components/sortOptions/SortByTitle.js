import { titleSortOptionKeys } from "../../SortKeys";

const SortByTitle = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			{!props.isTitleSortOpen ? (
				<ol className="filter-option-dropdown">
					<button
						className={`filter-option-btn${
							props.currentTitleSortDisplayText !==
							titleSortOptionKeys.removeSort
								? " active"
								: ""
						}`}
						onClick={props.openTitleSortDropdown}
					>
						Title
						<span>^</span>
					</button>
				</ol>
			) : null}
			{props.isTitleSortOpen ? (
				<ol
					className="filter-option-dropdown"
					onMouseLeave={() => {
						props.closeTitleSortDropdown();
					}}
				>
					<button
						className="filter-option-btn open"
						onClick={props.openTitleSortDropdown}
					>
						Title
						<span>^</span>
					</button>
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
							<button>Remove</button>
						</li>
					) : null}
					{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.alphabetically &&
					props.currentTitleSortDisplayText !==
						titleSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateTitleSortDisplayText(
									titleSortOptionKeys.alphabetically
								)
							}
						>
							<button>
								{titleSortOptionKeys.alphabetically}
							</button>
						</li>
					) : null}
					{props.currentTitleSortDisplayText !==
						titleSortOptionKeys.alphabetically &&
					props.currentTitleSortDisplayText ===
						titleSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateTitleSortDisplayText(
									titleSortOptionKeys.alphabetically
								)
							}
							onBlur={() => {
								props.closeTitleSortDropdown();
							}}
						>
							<button>
								{titleSortOptionKeys.alphabetically}
							</button>
						</li>
					) : null}
					{props.currentTitleSortDisplayText !==
					titleSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateTitleSortDisplayText(
									titleSortOptionKeys.reverseAlphabetically
								)
							}
							onBlur={() => {
								props.closeTitleSortDropdown();
							}}
						>
							<button>
								{titleSortOptionKeys.reverseAlphabetically}
							</button>
						</li>
					) : null}
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortByTitle;
