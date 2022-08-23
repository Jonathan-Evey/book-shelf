const Header = () => {
	function openFindBookModel() {
		console.log("clicked");
		let model = document.getElementById("find-book");
		model.showModal();
	}

	return (
		<header>
			<div className="title-container">
				<h1>My Bookshelf</h1>
			</div>
			<div>
				<button onClick={openFindBookModel}>Add Book</button>
			</div>
		</header>
	);
};

export default Header;
