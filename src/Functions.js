import {
	titleSortOptionKeys,
	authorSortOptionKeys,
	ratingSortOptionKeys,
} from "./SortKeys";

const sortFunctions = (() => {
	const sortAlphabetically = (data, key) => {
		if (key === titleSortOptionKeys.sortType) {
			return [...data].sort((a, b) => a.title.localeCompare(b.title));
		}
		if (key === authorSortOptionKeys.sortType) {
			return [...data].sort((a, b) =>
				a.author[0]
					.split(" ")[1]
					.localeCompare(b.author[0].split(" ")[1])
			);
		}
	};

	const sortReverseAlphabetically = (data, key) => {
		if (key === titleSortOptionKeys.sortType) {
			return [...data].sort((a, b) => b.title.localeCompare(a.title));
		}
		if (key === authorSortOptionKeys.sortType) {
			return [...data].sort((a, b) =>
				b.author[0]
					.split(" ")[1]
					.localeCompare(a.author[0].split(" ")[1])
			);
		}
	};

	const sortByRating = (data, key) => {
		if (key === ratingSortOptionKeys.highToLow) {
			return [...data].sort((a, b) => {
				if (typeof a.rating === "string") {
					return 1;
				} else if (typeof b.rating === "string") {
					return -1;
				} else {
					return a.rating > b.rating ? -1 : 1;
				}
			});
		}
		if (key === ratingSortOptionKeys.lowToHigh) {
			return [...data].sort((a, b) => {
				if (typeof a.rating === "string") {
					return 1;
				} else if (typeof b.rating === "string") {
					return -1;
				} else {
					return a.rating > b.rating ? 1 : -1;
				}
			});
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
