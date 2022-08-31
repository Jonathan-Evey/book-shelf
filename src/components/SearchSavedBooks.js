const SearchSavedBooks = (props) => {
	return (
		<>
			<p>Search for</p>
			<label htmlFor="title-search">Book Title:</label>
			<input
				type="search"
				name="title-search"
				id="title-search"
				onChange={props.updateTitleSearchWord}
			/>
			<label htmlFor="author-search">Book Author:</label>
			<input
				type="search"
				name="author-search"
				id="author-search"
				onChange={props.updateAuthorSearchWord}
			/>
		</>
	);
};

export default SearchSavedBooks;
