import React from "react";
import FindBookByTitle from "./FindBookByTitle";
import FindBookByAuthor from "./FindBookByAuthor";

const FindBookMenu = (props) => {
	////---find new books
	function openFindBookModel(keyWord) {
		props.updateCurrentSearchPageNumber(0);
		if (keyWord === props.searchTitleKeyWord) {
			let searchTerms = props.searchTitleKeyWord.replaceAll(" ", "+");
			props.updateUseSearchKeyWord(searchTerms);
			props.updateSearchType("intitle");
		}
		if (keyWord === props.searchAuthorKeyWord) {
			let searchTerms = props.searchAuthorKeyWord.replace(" ", "+");
			props.updateUseSearchKeyWord(searchTerms);
			props.updateSearchType("inauthor");
		}
		props.updateTitleKeyWord("");
		props.updateAuthorKeyWord("");
		let model = document.getElementById("find-book");
		return model.showModal();
	}
	return (
		<fieldset className="filter-container-fieldset">
			<p>Add New Book</p>

			<FindBookByTitle
				searchTitleKeyWord={props.searchTitleKeyWord}
				updateTitleKeyWord={props.updateTitleKeyWord}
				openFindBookModel={openFindBookModel}
			/>
			<FindBookByAuthor
				searchAuthorKeyWord={props.searchAuthorKeyWord}
				updateAuthorKeyWord={props.updateAuthorKeyWord}
				openFindBookModel={openFindBookModel}
			/>
		</fieldset>
	);
};

export default FindBookMenu;
