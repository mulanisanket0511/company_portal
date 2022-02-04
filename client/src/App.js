import './App.css';
import Navbar from './componets/Navbar';
import Loginform from './componets/Loginform'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './componets/Registrationform';
import Profile from './componets/Profile';

function App() {
  return (
    <>
      <BrowserRouter >
      < Navbar />
        <Routes>
        <Route exact path="/user-form" element={<Loginform/>}/>
        <Route exact path="/user-register" element={<Signup/>}/>
        <Route exact path="/user-profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
 
    </>

  );
}

export default App;
