import React from "react";
import FindBookInput from "./FindBookInput";

const FindBookMenu = (props) => {
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
		<>
			<FindBookInput
				labelTextProp={"By Title:"}
				inputIdProp={"new-book-search-title"}
				placeholderProp={"Find by title"}
				onChangeProp={props.updateTitleKeyWord}
				searchKeyWordProp={props.searchTitleKeyWord}
				openFindBookModel={openFindBookModel}
			/>
			<FindBookInput
				labelTextProp={"By Author:"}
				inputIdProp={"new-book-search-author"}
				placeholderProp={"Find by author"}
				onChangeProp={props.updateAuthorKeyWord}
				searchKeyWordProp={props.searchAuthorKeyWord}
				openFindBookModel={openFindBookModel}
			/>
		</>
	);
};

export default FindBookMenu;
