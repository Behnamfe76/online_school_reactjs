/** @format */

import { memo } from "react";

function ErrorMessage({ message }) {
	return (
		<>
			<div className='text-danger form-text mt-3'>{message}</div>
		</>
	);
}

export default memo(ErrorMessage);
