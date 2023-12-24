/** @format */

import { memo } from "react";
function NavbarToggler() {
	return (
		<>
			{/* Responsive navbar toggler */}
			<button
				className='navbar-toggler ms-auto'
				type='button'
				data-bs-toggle='collapse'
				data-bs-target='#navbarCollapse'
				aria-controls='navbarCollapse'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-animation'>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
		</>
	);
}

export default memo(NavbarToggler);
