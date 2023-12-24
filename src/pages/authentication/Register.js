/** @format */

import { Link } from "react-router-dom";
import AuthBanner from "../../components/authentication/AuthBanner";
import { useContext, useState } from "react";
import Loading from "../../components/loading/Loading";
import AuthContext from "../../contexts/authentication/AuthContext";
import ErrorMessage from "../../components/authentication/ErrorMessage";
import { formValidation } from "../../helpers/formValidation";
import { toast } from "react-toastify";
function Register() {
	const [name, setName] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [password_c, setPassword_c] = useState(undefined);
	const [policies, setPolicies] = useState(false);

	const { pending, Register } = useContext(AuthContext);

	const handleForm = (e) => {
		let namePermission = formValidation(name, setName, "نام");
		let emailPermission = formValidation(email, setEmail, "ایمیل", true);
		let passwordPermission = formValidation(
			password,
			setPassword,
			"رمز عبور",
			false,
			true,
		);
		let password_cPermission = formValidation(
			password_c,
			setPassword_c,
			"رمز عبور",
			false,
			false,
			password,
		);

		if (policies === false) {
			toast.warning(
				"جهت ایجاد حساب کاربری باید با قوانین و مقررات ما موافقت کنید.",
			);
		}
		if (
			namePermission &&
			emailPermission &&
			passwordPermission &&
			password_cPermission && 
			policies
		) {
			Register({
				name,
				email,
				password,
				password_c,
			});
		}

		e.preventDefault();
	};

	return (
		<>
			{/* **************** MAIN CONTENT START **************** */}
			<main>
				<section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
					<div className='container-fluid'>
						<div className='row'>
							{/* Right */}
							<AuthBanner />

							{/* left */}
							<div className='col-12 col-lg-6 m-auto'>
								<div className='row my-5'>
									<div className='col-sm-10 col-xl-8 m-auto'>
										{/* Title */}
										<h2>ایجاد حساب کاربری !</h2>
										<p className='lead mb-4'>
											واسه استفاده از خدمات ما، حساب خودت رو بساز
										</p>

										{/* Form START */}
										<form onSubmit={handleForm}>
											{/* name */}
											<div className='mb-4'>
												<label htmlFor='name' className='form-label'>
													نام
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fa-solid fa-user'></i>
													</span>
													<input
														onChange={(e) => setName(e.target.value)}
														type='text'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='نام'
														id='name'
													/>
												</div>
												{name === null || name === "" ? (
													<ErrorMessage message='فیلد نام عبور الزامی است' />
												) : (
													""
												)}
											</div>
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
														onChange={(e) => setEmail(e.target.value)}
														type='email'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='emial@gmail.com'
														id='email'
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
												<label htmlFor='password' className='form-label'>
													رمز عبور
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fas fa-lock'></i>
													</span>
													<input
														onChange={(e) => setPassword(e.target.value)}
														type='password'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='*********'
														id='password'
													/>
												</div>
												{password === null || password === "" ? (
													<ErrorMessage message='فیلد رمز عبور الزامی است' />
												) : (
													""
												)}
											</div>
											{/* Confirm Password */}
											<div className='mb-4'>
												<label htmlFor='password_c' className='form-label'>
													تایید رمز عبور
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fas fa-lock'></i>
													</span>
													<input
														onChange={(e) => setPassword_c(e.target.value)}
														type='password'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='*********'
														id='password_c'
													/>
												</div>
												{password_c === null || password_c === "" ? (
													<ErrorMessage message='فیلد تایید رمز عبور الزامی است' />
												) : (
													""
												)}
											</div>
											{/* Check box */}
											<div className='mb-4'>
												<div className='form-check'>
													<input
														onChange={() => setPolicies(!policies)}
														type='checkbox'
														className='form-check-input'
														id='checkbox-1'
													/>
													<label
														className='form-check-label'
														htmlFor='checkbox-1'>
														ایجا حساب، به معنی پذیرش
														<a href='#'> قوانین و سیاست های ما </a>
														است
													</label>
												</div>
											</div>
											{/* Button */}
											<div className='align-items-center mt-0'>
												<div className='d-grid'>
													<button
														disabled={policies ? false : true}
														className='btn btn-primary mb-0 d-flex justify-content-center'
														type='submit'>
														ایجاد حساب
														<span className='mx-2'>
															{pending ? (
																<Loading type='spokes' color='white' />
															) : (
																""
															)}
														</span>
													</button>
												</div>
											</div>
										</form>
										{/* Form END */}

										{/* Social buttons */}
										<div className='row'>
											{/* Divider with text */}
											<div className='position-relative my-4'>
												<hr />
												<p className='small position-absolute top-50 start-50 translate-middle bg-body px-5'>
													Or
												</p>
											</div>
											{/* Social btn */}
											<div className='col-xxl-6 d-grid'>
												<a href='#' className='btn bg-google mb-2 mb-xxl-0'>
													<i className='fab fa-fw fa-google text-white me-2'></i>
													Signup with Google
												</a>
											</div>
											{/* Social btn */}
											<div className='col-xxl-6 d-grid'>
												<a href='#' className='btn bg-facebook mb-0'>
													<i className='fab fa-fw fa-facebook-f me-2'></i>Signup
													with Facebook
												</a>
											</div>
										</div>

										{/* Sign up link */}
										<div className='mt-4 text-center'>
											<span>
												Already have an account?
												<Link to={"/auth/login"}>
													 Sign in here
												</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
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
export default Register;
