/** @format */

import { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthBanner from "../../components/authentication/AuthBanner";
import { formValidation } from "../../helpers/formValidation";
import { toast } from "react-toastify";
import ErrorMessage from "../../components/authentication/ErrorMessage";
import AuthContext from "../../contexts/authentication/AuthContext";
import Loading from "../../components/loading/Loading";
function Login() {
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [rememberMe, setRememberMe] = useState(false);
	const { Login, pending } = useContext(AuthContext);

	function handleForm(e) {
		let emailPermission = formValidation(email, setEmail, "ایمیل", true);
		let passwordPermission = formValidation(password, setPassword, "رمز عبور");

		if (emailPermission && passwordPermission) {
			Login({ email, password, rememberMe });
		}
		e.preventDefault();
	}
	return (
		<>
			{/* **************** MAIN CONTENT START **************** */}
			<main>
				<section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
					<div className='container-fluid'>
						<div className='row'>
							{/* banner */}
							<AuthBanner />

							{/* form */}
							<div className='col-12 col-lg-6 m-auto'>
								<div className='row my-5'>
									<div className='col-sm-10 col-xl-8 m-auto'>
										{/* Title */}

										<h1 className='fs-2'>ورود به حساب کاربری</h1>
										<p className='lead mb-4'>
											از دیدار مجدد شما خوشحالیم، وارد حساب خود شوید.
											<span className='mb-0 fs-3'>👋</span>
										</p>

										{/* Form START */}
										<form onSubmit={handleForm}>
											{/* Email */}
											<div className='mb-4'>
												<label
													htmlFor='exampleInputEmail1'
													className='form-label'>
													آدرس ایمیل
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fa-solid fa-envelope'></i>
													</span>
													<input
														onChange={(e) => setEmail(e.target.value.trim())}
														type='email'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='ایمیل'
														id='exampleInputEmail1'
													/>
												</div>
												{email === null || email === "" ? (
													<ErrorMessage message='فیلد ایمیل الزامی است' />
												) : (
													""
												)}
											</div>
											{/* Password */}
											<div className='mb-4'>
												<label htmlFor='inputPassword5' className='form-label'>
													رمز عبور
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fas fa-lock'></i>
													</span>
													<input
														onChange={(e) => setPassword(e.target.value.trim())}
														type='password'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='رمز عبور'
														id='inputPassword5'
													/>
												</div>
												{password === null || password === "" ? (
													<ErrorMessage message='فیلد رمز عبور الزامی است' />
												) : (
													""
												)}
											</div>
											{/* Check box */}
											<div className='mb-4 d-flex justify-content-between mb-4'>
												<div className='form-check'>
													<input
														onChange={() => setRememberMe(!rememberMe)}
														type='checkbox'
														className='form-check-input'
														id='exampleCheck1'
													/>
													<label
														className='form-check-label'
														htmlFor='exampleCheck1'>
														مرا به خاطر بسپار
													</label>
												</div>
												<div className='text-primary-hover'>
													<Link
														className='text-secondary'
														to={"/auth/forgot-password"}>
														<u>فراموشی رمز عبور</u>
													</Link>
												</div>
											</div>
											{/* Button */}
											<div className='align-items-center mt-0'>
												<div className='d-grid'>
													<button
														className='btn btn-primary mb-0 d-flex justify-content-center'
														type='submit'>
														ورود
														<span className="mx-2">
															{
																pending ? <Loading type='spokes' color='white' /> : ''
															}
															
														</span>
													</button>
												</div>
											</div>
										</form>
										{/* Form END */}

										{/* Social buttons and divider */}
										<div className='row'>
											{/* Divider with text */}
											<div className='position-relative my-4'>
												<hr />
												<p className='small position-absolute top-50 start-50 translate-middle bg-body px-5'>
													یا
												</p>
											</div>

											{/* Social btn */}
											<div className='col-xxl-6 d-grid'>
												<a href='#' className='btn bg-google mb-2 mb-xxl-0'>
													<i className='fab fa-fw fa-google text-white me-2'></i>
													ورود با حساب گوگل
												</a>
											</div>
											{/* Social btn */}
											<div className='col-xxl-6 d-grid'>
												<a href='#' className='btn bg-facebook mb-0'>
													<i className='fab fa-fw fa-facebook-f me-2'></i>
													ورود با حساب فیسبوک
												</a>
											</div>
										</div>

										{/* Sign up link */}
										<div className='mt-4 text-center'>
											<span>
												هنوز حساب کاربری نداری؟{" "}
												<Link to={"/auth/register"}>
													<span>اینجا یکی بساز</span>
												</Link>
											</span>
										</div>
									</div>
								</div>{" "}
								{/* Row END */}
							</div>
						</div>{" "}
						{/* Row END */}
					</div>
				</section>
			</main>
			{/* **************** MAIN CONTENT END **************** */}

			{/* Back to top */}
			<div className='back-top'>
				<i className='bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle'></i>
			</div>
		</>
	);
}
export default memo(Login);
