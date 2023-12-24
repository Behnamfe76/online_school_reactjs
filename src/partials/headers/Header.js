/** @format */

import { memo, useContext } from "react";
import NavbarBrand from "../../components/header/defaultLandingHeader/NavbarBrand";
import NavbarToggler from "../../components/header/defaultLandingHeader/NavbarToggler";
import NavbarProfile from "../../components/header/defaultLandingHeader/NavbarProfile";
import NavbarMain from "../../components/header/defaultLandingHeader/NavbarMain";
import AuthContext from "../../contexts/authentication/AuthContext";
import NavbarSignIn from "../../components/header/defaultLandingHeader/NavbarSignIn";

function Header() {
	const { user } = useContext(AuthContext);
	return (
		<>
			{/* Header START */}
			<header className='navbar-light navbar-sticky header-static'>
				{/* Nav START */}
				<nav className='navbar navbar-expand-xl'>
					<div className='container-fluid px-3 px-xl-5'>
						<NavbarBrand />

						<NavbarToggler />

						<NavbarMain />

						{user === null ? <NavbarSignIn /> : <NavbarProfile />}
					</div>
				</nav>
				{/* Nav END */}
			</header>
			{/* Header END */}
		</>
	);
}

export default memo(Header);
