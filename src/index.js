import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechPage from "./pages/TechPage";
import EventPage from "./pages/EventPage";
import { MenuProvider } from "./context/contextAPI";

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider>
			<MenuProvider>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/tech" element={<TechPage />} />
					<Route path="/events" element={<EventPage />} />
				</Routes>
			</MenuProvider>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
