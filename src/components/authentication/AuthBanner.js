/** @format */

import { memo } from "react";

function AuthBanner() {


	return (
		<>
			<div className='col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100'>
				<div className='p-3 p-lg-5'>
					{/* Title */}
					<div className='text-center'>
						<h2 className='fw-bold'>به خانواده بزرگ ما خوش اومدی</h2>
						<p className='mb-0 h6 fw-light'>بیا امروز یه چیز جدید یاد بگیریم!</p>
					</div>
					{/* SVG Image */}
					<img src='assets/images/element/02.svg' className='mt-5' alt='' />
					{/* Info */}
					<div className='d-sm-flex mt-5 align-items-center justify-content-center'>
						{/* Avatar group */}
						<ul className='avatar-group mb-2 mb-sm-0'>
							<li className='avatar avatar-sm'>
								<img
									className='avatar-img rounded-circle'
									src='assets/images/avatar/01.jpg'
									alt='avatar'
								/>
							</li>
							<li className='avatar avatar-sm'>
								<img
									className='avatar-img rounded-circle'
									src='assets/images/avatar/02.jpg'
									alt='avatar'
								/>
							</li>
							<li className='avatar avatar-sm'>
								<img
									className='avatar-img rounded-circle'
									src='assets/images/avatar/03.jpg'
									alt='avatar'
								/>
							</li>
							<li className='avatar avatar-sm'>
								<img
									className='avatar-img rounded-circle'
									src='assets/images/avatar/04.jpg'
									alt='avatar'
								/>
							</li>
						</ul>
						{/* Content */}
						<p className='mb-0 h6 fw-light ms-0 ms-sm-3'>
							۴ هزار دانشجو به ما پیوستنن، حالا نوبت توئه
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default memo(AuthBanner);
