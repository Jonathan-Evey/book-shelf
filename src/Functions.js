import {
	titleSortOptionKeys,
	authorSortOptionKeys,
	ratingSortOptionKeys,
} from "./SortKeys";

const sortFunctions = (() => {
	const sortAlphabetically = (data, key) => {
		console.log(key);
		if (key === titleSortOptionKeys.sortType) {
			return [...data].sort((a, b) => a.title.localeCompare(b.title));
		}
		if (key === authorSortOptionKeys.sortType) {
			console.log("author");
			return [...data].sort((a, b) =>
				a.author[0].localeCompare(b.author[0])
			);
		}
	};

	const sortReverseAlphabetically = (data, key) => {
		console.log(key);
		if (key === titleSortOptionKeys.sortType) {
			return [...data].sort((a, b) => b.title.localeCompare(a.title));
		}
		if (key === authorSortOptionKeys.sortType) {
			console.log("author");
			return [...data].sort((a, b) =>
				b.author[0].localeCompare(a.author[0])
			);
		}
	};

	const sortByRating = (data, key) => {
		if (key === ratingSortOptionKeys.highToLow) {
			return [...data].sort((a, b) => (a.rating > b.rating ? -1 : 1));
		}
		if (key === ratingSortOptionKeys.lowToHigh) {
			return [...data].sort((a, b) => (a.rating > b.rating ? 1 : -1));
		}
		if (key === ratingSortOptionKeys.removeSort) {
			return defaultSort(data);
		}
	};

	const defaultSort = (data) => {
		return [...data].sort((a, b) => (a.dateAdded > b.dateAdded ? -1 : 1));
	};

	return {
		defaultSort,
		sortAlphabetically,
		sortReverseAlphabetically,
		sortByRating,
	};
})();

export default sortFunctions;
