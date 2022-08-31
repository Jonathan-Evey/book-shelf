const FilterByReadState = (props) => {
	return (
		<fieldset className="filter-option-fieldset">
			<legend className="filter-option-legend">Read Status</legend>
			<button
				className={`filter-option-btn ${
					props.isReadStatusDropdownOpen ? "open" : "closed"
				}`}
				onClick={props.openReadStatusDropdown}
			>
				{props.readStatusFilter}
				<span>^</span>
			</button>
			{props.isReadStatusDropdownOpen ? (
				<ol className="filter-option-dropdown">
					<li
						className="filter-option"
						onClick={props.updateReadStatusFilter}
					>
						All
					</li>
					<li
						className="filter-option"
						onClick={props.updateReadStatusFilter}
					>
						Unread
					</li>
					<li
						className="filter-option"
						onClick={props.updateReadStatusFilter}
					>
						Reading
					</li>
					<li
						className="filter-option"
						onClick={props.updateReadStatusFilter}
					>
						Read
					</li>
				</ol>
			) : null}
		</fieldset>
	);
};

export default FilterByReadState;
