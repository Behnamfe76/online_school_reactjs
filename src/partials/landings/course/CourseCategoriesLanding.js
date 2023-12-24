/** @format */

import { memo } from "react";
import CourseCategories from "../../../components/course/CourseCategories";
import Header from "../../headers/Header";
import Footer from "../../footer/Footer";

function CourseCategoriesLanding() {
	return (
		<>
			<Header />
			<CourseCategories />
			<Footer />
		</>
	);
}

export default memo(CourseCategoriesLanding);
