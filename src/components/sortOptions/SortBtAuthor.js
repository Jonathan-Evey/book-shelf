import { authorSortOptionKeys } from "../../SortKeys";

const SortBtAuthor = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			{!props.isAuthorSortOpen ? (
				<ol className="filter-option-dropdown">
					<button
						className={`filter-option-btn${
							props.currentAuthorSortDisplayText !==
							authorSortOptionKeys.removeSort
								? " active"
								: ""
						}`}
						onClick={props.openAuthorSortDropdown}
					>
						Author
						<span>^</span>
					</button>
				</ol>
			) : null}
			{props.isAuthorSortOpen ? (
				<ol
					className="filter-option-dropdown"
					onMouseLeave={() => {
						props.closeAuthorSortDropdown();
					}}
				>
					<button
						className="filter-option-btn open"
						onClick={props.openAuthorSortDropdown}
					>
						Author
						<span>^</span>
					</button>
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
							<button>Remove</button>
						</li>
					) : null}
					{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.alphabetically &&
					props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateAuthorSortDisplayText(
									authorSortOptionKeys.alphabetically
								)
							}
						>
							<button>
								{authorSortOptionKeys.alphabetically}
							</button>
						</li>
					) : null}
					{props.currentAuthorSortDisplayText !==
						authorSortOptionKeys.alphabetically &&
					props.currentAuthorSortDisplayText ===
						authorSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateAuthorSortDisplayText(
									authorSortOptionKeys.alphabetically
								)
							}
							onBlur={() => {
								props.closeAuthorSortDropdown();
							}}
						>
							<button>
								{authorSortOptionKeys.alphabetically}
							</button>
						</li>
					) : null}
					{props.currentAuthorSortDisplayText !==
					authorSortOptionKeys.reverseAlphabetically ? (
						<li
							className="filter-option"
							onClick={() =>
								props.updateAuthorSortDisplayText(
									authorSortOptionKeys.reverseAlphabetically
								)
							}
							onBlur={() => {
								props.closeAuthorSortDropdown();
							}}
						>
							<button>
								{authorSortOptionKeys.reverseAlphabetically}
							</button>
						</li>
					) : null}
				</ol>
			) : null}
		</fieldset>
	);
};

export default SortBtAuthor;
