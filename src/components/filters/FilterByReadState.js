import { readStatusKeys } from "../../filterKeyObjs";

const FilterByReadState = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			<legend className="filter-option-legend">Read Status</legend>
			{!props.isReadStatusDropdownOpen ? (
				<ol
					className="filter-option-dropdown"
					onMouseLeave={() => {
						props.closeReadStatusDropdown();
					}}
				>
					<button
						className={`filter-option-btn ${
							props.isReadStatusDropdownOpen ? "open" : "closed"
						}`}
						onClick={props.openReadStatusDropdown}
					>
						{props.readStatusFilter}
						<span>^</span>
					</button>
				</ol>
			) : null}
			{props.isReadStatusDropdownOpen ? (
				<ol
					className="filter-option-dropdown"
					onMouseLeave={() => {
						props.closeReadStatusDropdown();
					}}
				>
					<button
						className={`filter-option-btn ${
							props.isReadStatusDropdownOpen ? "open" : "closed"
						}`}
						onClick={props.openReadStatusDropdown}
					>
						{props.readStatusFilter}
						<span>^</span>
					</button>
					{props.readStatusFilter !== readStatusKeys.all ? (
						<li
							className="filter-option"
							onClick={props.updateReadStatusFilter}
						>
							<button>All</button>
						</li>
					) : null}
					{props.readStatusFilter !== readStatusKeys.unread ? (
						<li
							className="filter-option"
							onClick={props.updateReadStatusFilter}
						>
							<button>Unread</button>
						</li>
					) : null}
					{props.readStatusFilter !== readStatusKeys.reading &&
					props.readStatusFilter !== readStatusKeys.read ? (
						<li
							className="filter-option"
							onClick={props.updateReadStatusFilter}
						>
							<button>Reading</button>
						</li>
					) : null}
					{props.readStatusFilter !== readStatusKeys.reading &&
					props.readStatusFilter === readStatusKeys.read ? (
						<li
							className="filter-option"
							onClick={props.updateReadStatusFilter}
							onBlur={() => {
								props.openReadStatusDropdown();
							}}
						>
							<button>Reading</button>
						</li>
					) : null}
					{props.readStatusFilter !== readStatusKeys.read ? (
						<li
							className="filter-option"
							onClick={props.updateReadStatusFilter}
							onBlur={() => {
								props.openReadStatusDropdown();
							}}
						>
							<button>Read</button>
						</li>
					) : null}
				</ol>
			) : null}
		</fieldset>
	);
};

export default FilterByReadState;
