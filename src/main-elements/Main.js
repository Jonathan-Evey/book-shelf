import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	return (
		<main>
			<div className="book-container">
				{savedBooks.map((book) => (
					<div className="book-card" key={book.id}>
						<div>
							<img src={book.thumbnail} alt="" />
						</div>
						<div className="book-right">
							<h4>{book.title}</h4>
							<p>{book.author[0]}</p>
						</div>
					</div>
				))}
			</div>
			<Navigation />
		</main>
	);
};

export default Main;
