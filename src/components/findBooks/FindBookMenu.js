import React from "react";
import { CSSTransition } from "react-transition-group";
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
			<CSSTransition
				in={props.isAddBookMenuOpen}
				timeout={{ appear: 150, enter: 150, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<FindBookInput
					labelTextProp={"By Title:"}
					inputIdProp={"new-book-search-title"}
					placeholderProp={"Find by title"}
					onChangeProp={props.updateTitleKeyWord}
					searchKeyWordProp={props.searchTitleKeyWord}
					openFindBookModel={openFindBookModel}
					liClassProp={"z-index-9"}
				/>
			</CSSTransition>
			<CSSTransition
				in={props.isAddBookMenuOpen}
				timeout={{ appear: 300, enter: 300, exit: 300 }}
				classNames="aside-menu-animation"
				unmountOnExit
				appear
			>
				<FindBookInput
					labelTextProp={"By Author:"}
					inputIdProp={"new-book-search-author"}
					placeholderProp={"Find by author"}
					onChangeProp={props.updateAuthorKeyWord}
					searchKeyWordProp={props.searchAuthorKeyWord}
					openFindBookModel={openFindBookModel}
					liClassProp={"z-index-8"}
				/>
			</CSSTransition>
		</>
	);
};

export default FindBookMenu;
