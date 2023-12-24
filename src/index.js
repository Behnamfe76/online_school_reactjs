/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "./sass/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "tiny-slider/dist/tiny-slider.js";
import "tiny-slider/dist/tiny-slider.css";
import "glightbox/dist/css/glightbox.min.css";
import "glightbox/dist/js/glightbox.min.js";
import "@srexi/purecounterjs/dist/purecounter_vanilla";
import "./helpers/darkMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={true}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme={
					localStorage.getItem("theme")
						? localStorage.getItem("theme") === "auto"
							? window.matchMedia("(prefers-color-scheme: light)").matches
								? "light"
								: "dark"
							: localStorage.getItem("theme")
						: "light"
				}></ToastContainer>
		</QueryClientProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
