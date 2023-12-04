import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignupForm from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <SignupForm></SignupForm>
      
    </Router>
  )
}
export default App;
