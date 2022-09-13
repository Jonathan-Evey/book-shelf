const sortFunctions = (() => {
	const sortAlphabetically = (data) => {
		return [...data].sort((a, b) => a.title.localeCompare(b.title));
	};

	const sortReverseAlphabetically = (data) => {
		return [...data].sort((a, b) => b.title.localeCompare(a.title));
	};

	return {
		sortAlphabetically,
		sortReverseAlphabetically,
	};
})();

export default sortFunctions;
