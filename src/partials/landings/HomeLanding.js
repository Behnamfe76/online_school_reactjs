/** @format */

import { memo } from "react";
import Footer from "../footer/Footer";
import Header from "../headers/Header";
import DefaultLanding from "./default/DefaultLanding";

function HomeLanding() {
	return (
		<>
			<Header />
			<DefaultLanding />
			<Footer />
		</>
	);
}

export default memo(HomeLanding);
