/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthRouting from "./auth/AuthRouting";
import AuthContextProvider from "../contexts/authentication/AuthContextProvider";
import CourseRouting from "./course/CousreRouting";

function Routing() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/auth/*' element={<AuthRouting />}></Route>
					<Route path='/course/*' element={<CourseRouting />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default Routing;
