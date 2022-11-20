import React from "react";
import FindBookInput from "./FindBookInput";

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
		<>
			<div className="input-group | top-shadow margin-block-start-16">
				<p className="title">By Title:</p>

				<FindBookInput
					placeholderProp={"Find by title"}
					onChangeProp={props.updateTitleKeyWord}
					searchKeyWordProp={props.searchTitleKeyWord}
					openFindBookModel={openFindBookModel}
				/>
			</div>
			<div className="input-group | top-shadow margin-block-start-16">
				<p className="title">By Author:</p>
				<FindBookInput
					placeholderProp={"Find by author"}
					onChangeProp={props.updateAuthorKeyWord}
					searchKeyWordProp={props.searchAuthorKeyWord}
					openFindBookModel={openFindBookModel}
				/>
			</div>
		</>
	);
};

export default FindBookMenu;
