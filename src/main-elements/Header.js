import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Header = (props) => {
	const handleSignout = () => {
		if (props.user.uid === "guest") {
			props.setUser(null);
		} else {
			signOut(auth)
				.then(() => {})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	return (
		<header className="main-header | box-shadow flex">
			<div className="title-container">
				<h1 className="title-main | margin-inline-start-32 fs-900">
					My Bookshelf
				</h1>
			</div>
			<div>
				<button
					onClick={() => {
						handleSignout();
					}}
				>
					sign out
				</button>
			</div>
		</header>
	);
};

export default Header;
