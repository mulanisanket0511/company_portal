import './App.css';
import Loginform from './componets/Adminportal/Loginform'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './componets/Adminportal/Registrationform';
import Profile from './componets/Adminportal/Profile';
import Logout from './componets/Adminportal/Logout';
import Companyprofile from './componets/Adminportal/Companyprofile';
import RegistrationForm from './componets/EmployeeCRUD/RegistrationForm';

function App() {
  return (
    <>
      {
        localStorage.getItem("user") ?
          <>
            <BrowserRouter >
              <Profile />
              <Routes>
                <Route exact path="/%20Comapny%20Profile" element={<Companyprofile/>} />
                <Route exact path="/Add%20Employee" element={<RegistrationForm/>} />
                <Route exact path="/logout" element={<Logout />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <BrowserRouter >
              <Routes>
                <Route exact path="/" element={<Loginform />} />
                <Route exact path="/user-register" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </>
      }
    

    </>

  );
}

export default App;
