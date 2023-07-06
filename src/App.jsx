import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./component/SignUp";
import MovieCard from "./component/MovieCard";
import Home from "./component/Home";

function App() {
	return ( 
		<Routes>
			<Route path="/moviecard" element={<MovieCard />} />
      <Route path="/" element={<Home  />} /> 
      <Route path="/sign-up" element={<SignUp  />} />
		</Routes>
	);
}

export default App;
