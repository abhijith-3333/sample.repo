import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Authentication/Login/Login";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import Otp from "./Components/Authentication/Otp/Otp";


function App() {
  return (
    <div className="mainClass">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/otp" element={<Otp />} />

          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
