/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/authentication/Login";
import Register from "../../pages/authentication/Register";
import ForgotPassword from "../../pages/authentication/ForgotPassword";
import ResetPassword from "../../pages/authentication/ResetPassword";
import { useContext } from "react";
import AuthContext from "../../contexts/authentication/AuthContext";
const AuthRouting = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			{user !== null ? (
				<Navigate to='/' replace={true} />
			) : (
				<Routes>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
					<Route path='/forgot-password' element={<ForgotPassword />}></Route>
					<Route path='/reset-password/:token' element={<ResetPassword />}></Route>
				</Routes>
			)}
		</>
	);
};

export default AuthRouting;
