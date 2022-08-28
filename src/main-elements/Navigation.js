import React, { useState } from "react";

const Navigation = ( props ) => {
	const [isReadStatusDropdownOpen, setIsReadStatusDropdownOpen] = useState(false)
	const [isRatingFilterDropdownOpen, setIsRatingFilterDropdownOpen] = useState(false)
	const [currentRatingSelected, setCurrentRatingSelected] = useState("All")

	//------------------------------sort books by title functions
	const updateTitleSearchWord = (e) => {
		if(e.target.value === "") {
			props.setIsSearchTitleFilter(false)
			props.setSearchTitleFilter(e.target.value)
		} else {
			props.setIsSearchTitleFilter(true)
			props.setSearchTitleFilter(e.target.value)
		}
	}

	//------------------------------sort books by author functions
	const updateAuthorSearchWord = (e) => {
		if(e.target.value === "") {
			props.setIsSearchAuthorFilter(false)
			props.setSearchAuthorFilter(e.target.value)
		} else {
			props.setIsSearchAuthorFilter(true)
			props.setSearchAuthorFilter(e.target.value)
		}
	}

	//---------------sort books by read, reading or unread functions
	const openReadStatusDropdown = () => {
		if (isReadStatusDropdownOpen) {
			setIsReadStatusDropdownOpen(false)
		} else {
			setIsRatingFilterDropdownOpen(false)
			setIsReadStatusDropdownOpen(true)
		}
	}
	function updateReadStatusFilter(e) {
		if(e.target.textContent === "All") {
			props.setIsReadStatusFilter(false)
			props.setReadStatusFilter("All")
			openReadStatusDropdown();
		} else {
			props.setIsReadStatusFilter(true)
			console.log(e.target.textContent)
			props.setReadStatusFilter(e.target.textContent)
			openReadStatusDropdown();
		}
		
	}

	//---------------------------------sort by book rating functions
	const openRatingFilterDropdown = () => {
		if (isRatingFilterDropdownOpen) {
			setIsRatingFilterDropdownOpen(false)
		} else {
			setIsReadStatusDropdownOpen(false)
			setIsRatingFilterDropdownOpen(true)
		}
	}
	function updateRatingFilter(e) {
		setCurrentRatingSelected(e.target.textContent)
		if(e.target.textContent === "All") {
			props.setIsRatingFilter(false)
			props.setBookRatingFilter("All")
			openRatingFilterDropdown();
		} else {
			props.setIsRatingFilter(true)
			console.log(parseInt(e.target.id))
			props.setBookRatingFilter(e.target.id)
			openRatingFilterDropdown();
		}
	}

	return (
		<aside>
			<label htmlFor="title-search">Search for Title:</label>
			<input type="search" name="title-search" id="title-search" onChange={updateTitleSearchWord}/>
			<label htmlFor="author-search">Search for Author:</label>
			<input type="search" name="author-search" id="author-search" onChange={updateAuthorSearchWord}/>
			<fieldset className="filter-container-fieldset">
			<legend className="filter-container-legend">Filter By:</legend>
				<fieldset className="filter-option-fieldset">
					<legend className="filter-option-legend">Read Status</legend>
						<button 
							className="filter-option-btn"
							onClick={openReadStatusDropdown}
							>{props.readStatusFilter}<p>^</p>
						</button>
						{isReadStatusDropdownOpen ? 
						<ol className="filter-option-dropdown">
							<li className="filter-option"
								onClick={updateReadStatusFilter}>All</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Unread</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Reading</li>
							<li className="filter-option"
								onClick={updateReadStatusFilter}>Read</li>
						</ol> : null}
				</fieldset>
				<fieldset className="filter-option-fieldset">
					<legend className="filter-option-legend">Rating:</legend>
						<button 
							className="filter-option-btn"
							onClick={openRatingFilterDropdown}
							>{currentRatingSelected}<p>^</p>
						</button>
						{isRatingFilterDropdownOpen ? 
						<ol className="filter-option-dropdown">
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="All">All</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="0">0 - 1</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="1">1 - 2</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="2">2 - 3</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="3">3 - 4</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="4">4 - 5</li>
							<li className="filter-option"
								onClick={updateRatingFilter}
								id="5">Ratings 5</li>
						</ol> : null}
				</fieldset>
			</fieldset>
		</aside>);
};

export default Navigation;
