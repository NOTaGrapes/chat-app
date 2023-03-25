import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin.js";
import SignUp from "./components/signup.js";
import ChatHome from "./components/chat.js";

function App() {
return (
	<div className="App">
	<BrowserRouter>
		<Routes>
		<Route exact path="/"
			element={<SignIn />} />
		<Route path="/signup"
			element={<SignUp />} />
		<Route path="/chat/:recieverId"
			element={<ChatHome />} />
		</Routes>
	</BrowserRouter>
	</div>
);
}

export default App;
