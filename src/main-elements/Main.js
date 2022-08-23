import Navigation from "./Navigation";

const Main = ({ savedBooks }) => {
	return (
		<main>
			<div className="book-container">
				{savedBooks.map((book) => (
					<div className="book-card" key={book.id}>
						<div className="book-cover-img">
							<img src={book.thumbnail} alt="" />
							<p>Read</p>
						</div>
						<div className="book-right">
							<div className="book-right-top">
								<h4>{book.title}</h4>
								<p>{book.author[0]}</p>
							</div>
							<div className="book-right-bottom">
								<button>Own</button>
								<p>Personal Rating: 4.5/5</p>
								<p>fantasy</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<Navigation />
		</main>
	);
};

export default Main;
