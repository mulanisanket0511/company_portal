import "./App.css";
import Loginform from "./componets/Adminportal/Loginform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./componets/Adminportal/Registrationform";
import Admindetail from "./componets/Adminportal/Admindetail";
import Logout from "./componets/Adminportal/Logout";
import Companyprofile from "./componets/Adminportal/Companyprofile";
import { Profile } from "./componets/Adminportal/Profile";
import Allemployee from "./componets/Adminportal/Allemployee";
import Viewemployee from "./componets/Adminportal/Viewemployee";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/Dashboard" element={<Companyprofile />} />
          <Route
            exact
            path="/add-employee"
            element={<Signup role={true} name={"Add Employee"} />}
          />
          <Route exact path="/all-employee" element={<Allemployee />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/" element={<Loginform />} />
          <Route
            exact
            path="/user-register"
            element={<Signup role={false} name={"Signup"} />}

          />
          <Route exact path="/view/:id" element={< Viewemployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
