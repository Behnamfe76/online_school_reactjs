/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";
function NavbarMain() {
	return (
		<>
			{/* Main navbar START */}
			<div className='navbar-collapse w-100 collapse' id='navbarCollapse'>
				{/* Nav category menu START */}
				<ul className='navbar-nav navbar-nav-scroll ms-auto'>
					{/* Nav item 1 Demos */}
					<li className='nav-item dropdown dropdown-menu-shadow-stacked'>
						<a
							className='nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0'
							href='#'
							id='categoryMenu'
							data-bs-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<i className='bi bi-ui-radios-grid me-2'></i>
							<span className="me-2">دسته بندی</span>
						</a>
						<ul className='dropdown-menu' aria-labelledby='categoryMenu'>
							{/* Dropdown submenu */}
							<li className='dropdown-submenu dropstart'>
								<a className='dropdown-item dropdown-toggle' href='#'>
									برنامه نویسی و توسعه
								</a>
								<ul
									className='dropdown-menu dropdown-menu-start'
									data-bs-popper='none'>
									{/* dropdown submenu open right */}
									<li className='dropdown-submenu dropend'>
										<a className='dropdown-item dropdown-toggle' href='#'>
											توسعه وب
										</a>
										<ul className='dropdown-menu' data-bs-popper='none'>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													CSS
												</a>{" "}
											</li>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													JavaScript
												</a>{" "}
											</li>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													Angular
												</a>{" "}
											</li>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													PHP
												</a>{" "}
											</li>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													HTML
												</a>{" "}
											</li>
											<li>
												{" "}
												<a className='dropdown-item' href='#'>
													React
												</a>{" "}
											</li>
										</ul>
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											علوم داده
										</a>{" "}
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											توسعه نرم افزار موبایل
										</a>{" "}
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											زبان های برنامه نویسی
										</a>{" "}
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											تست نرم افزار
										</a>{" "}
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											مهندسی نرم افزار
										</a>{" "}
									</li>
									<li>
										{" "}
										<a className='dropdown-item' href='#'>
											ابزار توسعه نرم افزار
										</a>{" "}
									</li>
								</ul>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									طراحی
								</a>
							</li>
							{/* Dropdown submenu */}
							<li className='dropdown-submenu dropstart'>
								<a className='dropdown-item dropdown-toggle' href='#'>
									بازاریابی
								</a>
								<div
									className='dropdown-menu dropdown-menu-start dropdown-width-lg'
									data-bs-popper='none'>
									<div className='row p-4'>
										{/* Dropdown column item */}
										<div className='col-xl-6 col-xxl-4 mb-4 mb-xl-0'>
											<h6 className='mb-0'>Get started</h6>
											<hr /> {/* Divider */}
											<ul className='list-unstyled'>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
														جستوجوی بازار
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
														تبلیغات
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													رفتار مصرف کننده
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													بازاریابی دیجیتال
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													اخلاق بازاریابی
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													بازاریابی رسانه های اجتماعی
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													روابط عمومی
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
														Advertising
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													سئو
													</a>{" "}
												</li>
												<li>
													{" "}
													<a className='dropdown-item' href='#'>
													بازاریابی کسب و کار
													</a>{" "}
												</li>
											</ul>
										</div>

										{/* Dropdown column item */}
										<div className='col-xl-6 col-xxl-4 mb-4 mb-xl-0'>
											<h6 className='mb-0'>Degree</h6>
											<hr /> {/* Divider */}
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<img
													src='assets/images/client/uni-logo-01.svg'
													className='icon-md'
													alt=''
												/>
												<div className='ms-3'>
													<a className='stretched-link h6 mb-0' href='#'>
														American Century University, New Mexico
													</a>
													<p className='mb-0 small'>
														Bachelor of computer science
													</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<img
													src='assets/images/client/uni-logo-02.svg'
													className='icon-md'
													alt=''
												/>
												<div className='ms-3'>
													<a className='stretched-link h6 mb-0' href='#'>
														Indiana College of - Bloomington
													</a>
													<p className='mb-0 small'>
														Masters of computer science
													</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<img
													src='assets/images/client/uni-logo-03.svg'
													className='icon-md'
													alt=''
												/>
												<div className='ms-3'>
													<a className='stretched-link h6 mb-0' href='#'>
														College of South Florida
													</a>
													<p className='mb-0 small'>Medical science college</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<img
													src='assets/images/client/uni-logo-01.svg'
													className='icon-md'
													alt=''
												/>
												<div className='ms-3'>
													<a className='stretched-link h6 mb-0' href='#'>
														Andeerson Campus
													</a>
													<p className='mb-0 small'>
														Bachelor of computer science
													</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex position-relative'>
												<img
													src='assets/images/client/uni-logo-04.svg'
													className='icon-md'
													alt=''
												/>
												<div className='ms-3'>
													<a className='stretched-link h6 mb-0' href='#'>
														University of South California
													</a>
													<p className='mb-0 small'>
														Masters of business development
													</p>
												</div>
											</div>
										</div>

										{/* Dropdown column item */}
										<div className='col-xl-6 col-xxl-4'>
											<h6 className='mb-0'>Certificate</h6>
											<hr /> {/* Divider */}
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<h2 className='mb-0'>
													<i className='fab fa-fw fa-google text-google-icon'></i>
												</h2>
												<div className='ms-2'>
													<a className='stretched-link h6 mb-0' href='#'>
														Google SEO certificate
													</a>
													<p className='mb-0 small'>No prerequisites</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<h2 className='mb-0'>
													<i className='fab fa-fw fa-linkedin-in text-linkedin'></i>
												</h2>
												<div className='ms-2'>
													<a className='stretched-link h6 mb-0' href='#'>
														Business Development Executive(BDE)
													</a>
													<p className='mb-0 small'>No prerequisites</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<h2 className='mb-0'>
													<i className='fab fa-fw fa-facebook text-facebook'></i>
												</h2>
												<div className='ms-2'>
													<a className='stretched-link h6 mb-0' href='#'>
														Facebook social media marketing
													</a>
													<p className='mb-0 small'>Expert advice</p>
												</div>
											</div>
											{/* Dropdown item */}
											<div className='d-flex mb-4 position-relative'>
												<h2 className='mb-0'>
													<i className='fas fa-fw fa-basketball-ball text-dribbble'></i>
												</h2>
												<div className='ms-2'>
													<a className='stretched-link h6 mb-0' href='#'>
														Creative graphics design
													</a>
													<p className='mb-0 small'>No prerequisites</p>
												</div>
											</div>
										</div>
									</div>

									{/* Advertisement */}
									<div className='row'>
										<div className='col-12'>
											<div
												className='card bg-blue rounded-0 rounded-bottom p-3 position-relative overflow-hidden'
												style={{
													background:
														"url(assets/images/pattern/05.png) no-repeat center center",
													backgroundSize: "cover",
												}}>
												{/* SVG decoration */}
												<figure className='position-absolute bottom-0 end-0 mb-n4 d-none d-md-block'>
													<svg width='92.6px' height='135.2px'>
														<path
															className='fill-white'
															d='M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z'></path>
														<path
															className='fill-white'
															d='M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z'></path>
														<path
															className='fill-white'
															d='M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z'></path>
														<path
															className='fill-warning'
															d='M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z'></path>
														<polygon
															className='fill-warning opacity-6'
															points='31.2,12.3 4.7,5.4 25.1,17.2'></polygon>
														<polygon
															className='fill-warning opacity-6'
															points='21.5,19.5 15,24.8 4.7,5.4 '></polygon>
													</svg>
												</figure>
												{/* Body */}
												<div className='card-body'>
													{/* Title */}
													<h5 className='card-title text-white mb-2'>
														Access 25K Online courses from 120 institutions,
														Start today!
													</h5>
													<p className='text-white text-opacity-75'>
														Here is the description of premium features which
														will allow users to get benefits and save a lot of
														money
													</p>
													{/* Button */}
													<a href='#' className='btn btn-sm btn-dark mb-0'>
														Purchase Premium
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									موسیقی
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									سبک زندگی
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									نرم افزار و فناوری اطلاعات
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									توسعه شخصی
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									سلامتی و تناسب اندام
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									تدریس
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
								علوم اجتماعی
								</a>
							</li>
							<li>
								{" "}
								<a className='dropdown-item' href='#'>
									ریاضیات و آمار
								</a>
							</li>
							<li>
								{" "}
								<hr className='dropdown-divider' />
							</li>
							<li>
								{" "}
								<Link
									className='dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0'
									to='/course/categories'>
									مشاهده تمامی دسته بندی ها
								</Link>
							</li>
						</ul>
					</li>
				</ul>
				{/* Nav category menu END */}

				

				{/* Nav Search START */}
				<div className='nav my-3 my-xl-0 px-4 flex-nowrap align-items-center'>
					<div className='nav-item w-100'>
						<form className='position-relative'>
							<input
								className='form-control pe-5 bg-transparent'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset'
								type='submit'>
								<i className='fas fa-search fs-6 '></i>
							</button>
						</form>
					</div>
				</div>
				{/* Nav Search END */}
			</div>
			{/* Main navbar END */}
		</>
	);
}

export default memo(NavbarMain);
