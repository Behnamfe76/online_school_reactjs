/** @format */

import { memo } from "react";
import Footer from "../footer/Footer";
import Header from "../headers/Header";
import PageNotFound from "../../components/landing/404/PageNotFound";

function HomeLanding() {
	return (
		<>
			<Header />
			<PageNotFound />
			<Footer />
		</>
	);
}

export default memo(HomeLanding);
