import BookContainer from "./BookContainer";
import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	return (
		<main>
			<BookContainer savedBooks={savedBooks} />
			<Navigation />
		</main>
	);
};

export default Main;
