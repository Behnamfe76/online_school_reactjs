/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<>
			{/* **************** MAIN CONTENT START **************** */}
			<main>
				<section className='pt-5'>
					<div className='container'>
						<div className='row'>
							<div className='col-12 text-center'>
								{/* Image */}
								<img
									src='assets/images/element/error404-01.svg'
									className='h-200px h-md-400px mb-4'
									alt=''
								/>
								{/* Title */}
								<h1 className='display-1 text-danger mb-0'>404</h1>
								{/* Subtitle */}
								<h2>مشکلی پیش آمده</h2>
								{/* info */}
								<p className='mb-4'>
									مشکلی پیش آمده یا صفحه مورد نظر یافت نشد.
								</p>
								{/* Button */}
								<Link to='/' className='btn btn-primary mb-0'>
									رفتن به صفحه اصلی
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* **************** MAIN CONTENT END **************** */}
		</>
	);
};
export default memo(PageNotFound);
