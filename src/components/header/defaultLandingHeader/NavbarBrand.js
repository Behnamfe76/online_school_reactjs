/** @format */

import { memo } from "react";
function NavbarBrand() {
	return (
		<>
			{/* Logo START */}
			<a className='navbar-brand ms-4 me-0' href='index.html'>
				<img
					className='light-mode-item navbar-brand-item'
					src='assets/images/logo.svg'
					alt='logo'
				/>
				<img
					className='dark-mode-item navbar-brand-item'
					src='assets/images/logo-light.svg'
					alt='logo'
				/>
			</a>
			{/* Logo END */}
		</>
	);
}

export default memo(NavbarBrand);
