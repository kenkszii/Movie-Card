import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./component/SignUp";
import MovieCard from "./component/MovieCard";
import Home from "./component/Home";

function App() {
	return ( 
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/moviecard" element={<MovieCard  />} />
      <Route path="/sign-up" element={<SignUp  />} />
		</Routes>
	);
}

export default App;
