import './App.css';
import Navbar from './componets/Navbar';
import Loginform from './componets/Loginform'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './componets/Registrationform';
import Profile from './componets/Profile';
import Logout from './componets/Logout';
import Companyprofile from './componets/Companyprofile';
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
