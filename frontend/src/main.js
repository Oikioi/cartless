import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SignupForm from "../../src/pages/Signup";

const App = () => {
  return (
    <Router>
        <switch>
            <Route path='../pages'Signup>
                <SignupForm />
            </Route>
        </switch>
    </Router>
    //   <div className="App">
    //     <Routes>
    //       {/* other routes */}
    //       <Route path = "/Signup" component={SignupForm}/>
    //       {/* other routes */}
    //       </Routes>
    //   </div>
    // </Router>
  )
}
export default App;
