const Header = (props) => {
	return (
		<header className="main-header | box-shadow">
			<div className="title-container">
				<h1 className="title-main | fs-900">My Bookshelf</h1>
			</div>
			<div className="user-settings-menu">
				<button
					className="btn settings-menu-toggle"
					onClick={() => {
						props.toggleAccountSettingsMenu();
					}}
				>
					<span></span>
					<span></span>
					<span></span>
					<p className="screen-reader-only">Account settings menu</p>
				</button>
			</div>
		</header>
	);
};

export default Header;
