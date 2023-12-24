/** @format */

import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authentication/AuthContext";
import CourseCategoriesLanding from "../../partials/landings/course/CourseCategoriesLanding";
const CourseRouting = () => {
	const { user } = useContext(AuthContext);

	return (
		<>
			<Routes>
				<Route path='/categories' element={<CourseCategoriesLanding />}></Route>
			</Routes>
		</>
	);
};

export default CourseRouting;
