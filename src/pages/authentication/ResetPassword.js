/** @format */

import { useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import ErrorMessage from "../../components/authentication/ErrorMessage";
import {
	formValidation,
	
} from "../../helpers/formValidation";
import AuthContext from "../../contexts/authentication/AuthContext";
import Loading from "../../components/loading/Loading";
import { toast } from "react-toastify";
function ResetPassword() {
	const [password, setPassword] = useState(undefined);
	const [password_c, setPassword_c] = useState(undefined);
	const { ResetPassword, pending } = useContext(AuthContext);
	const params = useParams();
	const query = new URLSearchParams(useLocation().search);

	const handleForm = (e) => {
		const passwordPermission = formValidation(
			password,
			setPassword,
			"رمز عبور",
			false,
			true,
		);
		const password_cPermission = formValidation(
			password_c,
			setPassword_c,
			"تایید رمز عبور",
			false,
			false,
			password,
		);
		const email = (query.get("email"));
		const token = (params.token);
		if (email === null || token === null) {
			toast.error("لینک بازیابی رمز عبور معتبر نمیباشد.");
		}
		if (
			passwordPermission &&
			password_cPermission &&
			email !== null &&
			token !== null
		) {
			

			ResetPassword({
				email,
				token,
				password,
				password_c
			});
		}
		e.preventDefault();
	};

	return (
		<>
			{/* **************** MAIN CONTENT START **************** */}
			<main>
				<section style={{height: "100vh"}} className='p-0 d-flex align-items-center position-relative overflow-hidden'>
					<div className='container-fluid'>
						<div className='row'>
							{/* left */}
							<div className='col-12 d-flex justify-content-center'>
								<div className='row w-50 my-5'>
									<div className='col-12 m-auto'>
										{/* Title */}
										<h5 className='fw-light mb-4'>
											رمز عبور جدید را وارد کنید
										</h5>

										{/* Form START */}
										<form onSubmit={handleForm}>
											{/* password */}
											<div className='mb-4'>
												<label htmlFor='password' className='form-label'>
													رمز عبور جدید
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fa-solid fa-unlock'></i>
													</span>
													<input
														onChange={(e) => setPassword(e.target.value)}
														type='password'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='******'
														id='password'
													/>
												</div>
												{password === null || password === "" ? (
													<ErrorMessage message='فیلد رمز عبور الزامی است' />
												) : (
													""
												)}
											</div>
											{/* password confirmation */}
											<div className='mb-4'>
												<label htmlFor='password_c' className='form-label'>
													تایید رمز عبور جدید
												</label>
												<div className='input-group input-group-lg'>
													<span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
														<i className='fa-solid fa-lock'></i>
													</span>
													<input
														onChange={(e) => setPassword_c(e.target.value)}
														type='password'
														className='form-control border-0 bg-light rounded-end ps-1'
														placeholder='******'
														id='password_c'
													/>
												</div>
												{password_c === null || password_c === "" ? (
													<ErrorMessage message='فیلد تایید رمز عبور الزامی است' />
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
														تغییر کلمه عبور
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
export default ResetPassword;
