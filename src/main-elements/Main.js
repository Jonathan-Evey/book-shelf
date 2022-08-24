import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	return (
		<main>
			<Navigation />
			<BookContainer savedBooks={savedBooks} />
		</main>
	);
};

export default Main;
