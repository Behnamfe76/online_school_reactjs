/** @format */

import { Link } from "react-router-dom";
import AuthBanner from "../../components/authentication/AuthBanner";
import { useContext, useState } from "react";
import ErrorMessage from "../../components/authentication/ErrorMessage";
import { formValidation } from "../../helpers/formValidation";
import AuthContext from "../../contexts/authentication/AuthContext";
import Loading from "../../components/loading/Loading";
function ForgotPassword() {
	const [email, setEmail] = useState(undefined);
	const {ForgotPassword, pending} = useContext(AuthContext)
	const handleForm = (e) => {
		let emailPermission = formValidation(email, setEmail, "ایمیل", true);
		if(emailPermission){
			ForgotPassword({email});
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
							<div className='col-12 col-lg-6 d-flex justify-content-center'>
								<div className='row my-5'>
									<div className='col-sm-10 col-xl-12 m-auto'>
										{/* Title */}
										<span className='mb-0 fs-1'>🤔</span>
										<h1 className='fs-2'>رمز عبور خودت رو فراموش کردی ؟</h1>
										<h5 className='fw-light mb-4'>
											واسه تغییر رمز عبور، ایمیل خودت رو وارد کن.
										</h5>

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
														<i className='fa-regular fa-envelope'></i>
													</span>
													<input
														onChange={(e) => setEmail(e.target.value)}
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
											{/* Button */}
											<div className='align-items-center'>
												<div className='d-grid'>
												<button
														className='btn btn-primary mb-0 d-flex justify-content-center'
														type='submit'>
														بازیابی کلمه عبور
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
export default ForgotPassword;
