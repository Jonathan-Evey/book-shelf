import React, { useState } from "react";

const Navigation = () => {
	const [readStatusFilter, setReadStatusFilter] = useState("All")
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] = useState(false)

	const openReadStatusDropdown = () => {
		if (isReadStatusDropdownOpen) {
			setIsReadStatusDropdownOpen(false)
		} else {
			setIsReadStatusDropdownOpen(true)
		}
	}
	function updateReadStatusFilter(e) {
		setReadStatusFilter(e.target.textContent)
		openReadStatusDropdown();
	}
	return (
		<aside>
			<label htmlFor="title-search">Search for Title:</label>
			<input type="search" name="title-search" id="title-search" />
			<label htmlFor="author-search">Search for Author:</label>
			<input type="search" name="author-search" id="author-search" />
			<fieldset>
			<legend>Filter By:</legend>
				<fieldset className="read-status-fieldset">
					<legend className="read-status-legend">Read Status</legend>
						<button 
							className="read-status-btn"
							onClick={openReadStatusDropdown}
							>{readStatusFilter}<p>^</p>
						</button>
						{isReadStatusDropdownOpen ? 
						<ol className="read-status-dropdown">
							<li className="read-status-option"
								onClick={updateReadStatusFilter}>All</li>
							<li className="read-status-option"
								onClick={updateReadStatusFilter}>Unread</li>
							<li className="read-status-option"
								onClick={updateReadStatusFilter}>Reading</li>
							<li className="read-status-option"
								onClick={updateReadStatusFilter}>Read</li>
						</ol> : null}
				</fieldset>
			</fieldset>
		</aside>);
};

export default Navigation;
