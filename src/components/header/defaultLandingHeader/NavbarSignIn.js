/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";
function NavbarSignIn() {
	return (
		<>
			<div className='navbar-nav ms-2'>
				<button className='btn btn-sm btn-dark mb-0 '>
					<Link className="d-flex align-items-baseline" to={"/auth/login"}>
						ورود به حساب
						<i className='fa-solid fa-power-off me-2'></i>
					</Link>
				</button>
			</div>
		</>
	);
}

export default memo(NavbarSignIn);
