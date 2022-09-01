const SearchSavedBooks = (props) => {
	return (
		<>
			<label htmlFor="title-search">Book Title:</label>
			<input
				className="search-input"
				type="search"
				name="title-search"
				id="title-search"
				onChange={props.updateTitleSearchWord}
			/>
			<label htmlFor="author-search">Book Author:</label>
			<input
				className="search-input"
				type="search"
				name="author-search"
				id="author-search"
				onChange={props.updateAuthorSearchWord}
			/>
		</>
	);
};

export default SearchSavedBooks;
