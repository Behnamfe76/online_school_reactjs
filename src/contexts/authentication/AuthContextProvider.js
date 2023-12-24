/** @format */

import AuthContext from "./AuthContext";
import { memo, useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import InsertSupabase from "../../supabase/CRUD/InsertSupabase";
import { useNavigate } from "react-router-dom";
import ReadSupabase from "../../supabase/CRUD/ReadSupabase";
import DeleteSupabese from "../../supabase/CRUD/DeleteSupabase";

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [emalVerified, setEmalVerified] = useState(null);
	const [pending, setPending] = useState(false);
	const [isLoginToken, setIsLoginToken] = useState(null);

	const redirect = useNavigate();

	const Register = async (data) => {
		setPending(true);
		try {
			await axios({
				method: "POST",
				data: {
					name: data.name,
					email: data.email,
					password: data.password,
					password_confirmation: data.password_c,
				},
				url:
					process.env.REACT_APP_API_BASE_URL +
					"authentication/register",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
			});
			setPending(false);
			redirect('/auth/login');
			toast.success('حساب کاربری شما با موفقیت ایجاد شد');
		} catch (err) {
			setPending(false);
			if (err.response.status === 422) {
				for (let item in err.response.data.errors) {
					for (let error in err.response.data.errors[item]) {
						toast.error(err.response.data.errors[item][error]);
					}
				}
			}
		}
	};

	const ForgotPassword = async (data) => {
		setPending(true);
		try {
			const response = await axios({
				method: "POST",
				data: {
					email: data.email,
				},
				url:
					process.env.REACT_APP_API_BASE_URL +
					"authentication/password/forgot-password",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			setPending(false);
			Swal.fire({
				icon: "success",
				title: "ارسال شد",
				text: "لینک بازیابی رمز عبور به ایمیل شما ارسال گردید",
				confirmButtonText: "فهمیدم",
			});
		} catch (err) {
			setPending(false);
			if (err.response.status === 422) {
				for (let item in err.response.data.errors) {
					for (let error in err.response.data.errors[item]) {
						toast.error(err.response.data.errors[item][error]);
					}
				}
			}
		}
	};

	const ResetPassword = async(data) => {
		setPending(true);
		try {
			const response = await axios({
				method: "POST",
				data: {
					email: data.email,
					token: data.token,
					password: data.password,
					password_confirmation: data.password_c,
				},
				url:
					process.env.REACT_APP_API_BASE_URL +
					"authentication/password/reset-password",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			setPending(false);
			toast.success('رمز عبور با موفقیت تغییر یافت.');
			redirect('/auth/login')
		} catch (err) {
			setPending(false);
			if (err.response.status === 422) {
				for (let item in err.response.data.errors) {
					for (let error in err.response.data.errors[item]) {
						toast.error(err.response.data.errors[item][error]);
					}
				}
			}
		}
	};

	const Login = async (data) => {
		setPending(true);
		try {
			const response = await axios.post(
				process.env.REACT_APP_API_BASE_URL + "authentication/login",
				{
					email: data.email,
					password: data.password,
					remember: data.rememberMe,
				},
			);
			setPending(false);
			setUser(response.data.data.user);
			localStorage.setItem("userEmail", response.data.data.user.email);

			InsertSupabase(
				response.data.data.user.email,
				response.data.data.token,
				response.data.data.user.name,
			);
			redirect("/");
			toast.success(`خوش اومدی ${response.data.data.user.name}`);
		} catch (err) {
			setPending(false);
			if (err.response.status === 422) {
				for (let item in err.response.data.errors) {
					for (let error in err.response.data.errors[item]) {
						toast.error(err.response.data.errors[item][error]);
					}
				}
			}
			if (err.code === "ERR_NETWORK") {
				Swal.fire({
					icon: "error",
					title: "خطا",
					text: "ارتباط با سرور با اشکال روبروست، لحظاتی دیگر امتحان کنید",
					confirmButtonText: "فهمیدم",
				});
			}
		}
	};

	const Logout = async () => {
		setPending(true);
		let email = localStorage.getItem("userEmail");
		let userData = await ReadSupabase(email);
		const token = userData[0].JWT;
		try {
			await axios({
				method: "POST",
				url: process.env.REACT_APP_API_BASE_URL + "authentication/logout",
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setPending(false);
			setUser(null);
			await DeleteSupabese(email);
			localStorage.removeItem("userEmail");
		} catch (err) {
			setPending(false);
			console.log(err);
		}
	};

	const isLogin = async () => {
		let email = localStorage.getItem("userEmail");
		if (email !== null) {
			try {
				const userData = await ReadSupabase(email);
				setIsLoginToken(userData[0].JWT);
			} catch (err) {
				console.log(err);
			}

			if (isLoginToken !== null) {
				try {
					const response = await axios({
						method: "POST",
						url: process.env.REACT_APP_API_BASE_URL + "authentication/is-login",
						headers: {
							Authorization: "Bearer " + isLoginToken,
						},
					});
					setUser(response.data.data);
				} catch (err) {
					console.log(err);
				}
			}
		}
	};

	useEffect(() => {
		isLogin();
	}, [isLoginToken]);

	return (
		<AuthContext.Provider
			value={{ user, Login, Register, Logout, pending, ForgotPassword, ResetPassword }}>
			{children}
		</AuthContext.Provider>
	);
}

export default memo(AuthContextProvider);
