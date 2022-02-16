import './App.css';
  import Loginform from './componets/Adminportal/Loginform'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './componets/Adminportal/Registrationform';
import Admindetail from './componets/Adminportal/Admindetail';
import Logout from './componets/Adminportal/Logout';
import Companyprofile from './componets/Adminportal/Companyprofile';
import { Addemployee } from './componets/EmployeeCRUD/Addemployee';
import { Profile } from './componets/Adminportal/Profile';
import Allemployee from './componets/Adminportal/Allemployee';

function App() {
  return (
    <>
      {
        localStorage.getItem("user") ?
          <>
            <BrowserRouter >
              <Admindetail />
              <Routes>
                <Route exact path="/Dashboard" element={<Companyprofile/>} />
                <Route exact path="/add-employee" element={<Signup role={true} name={"Add Employee"}/>} />
                <Route exact path="/all-employee" element={<Allemployee/>} />
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/logout" element={<Logout />} />
              </Routes>
            </BrowserRouter>
          </>
          :
          <>
            <BrowserRouter >
              <Routes>
                <Route exact path="/" element={<Loginform />} />
                <Route exact path="/user-register" element={<Signup role={false} name={"Signup"}/>} />
              </Routes>
            </BrowserRouter>
          </>
      }
    

    </>

  );
}

export default App;
