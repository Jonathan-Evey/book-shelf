import Button from "../components/Button";

const Header = () => {
	return (
    <header>
        <div className="title-container">
            <h1>My Bookshelf</h1>
        </div>
        <div>
            <Button btnText={"Add Book"} />
        </div>
    </header>);
};

export default Header;
