import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import AccountType from './pages/AccountSelect';
import Landing from './pages/LandingPage';
// import UserForm from './components/CarruselForm/Carousel';
import StudentForm from './pages/FormPages/StudentForm/StudentForm';
import CoachForm from './pages/FormPages/CoachForm/CoachForm';
import StudentSidenav from './pages/Dashboard/StudentDash/StudentSidenav';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div>
      <SideMenu />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/accountSelect" element={<AccountType />} />
        <Route path="/landing" element={<Landing />} />
        {/* <Route path="/signup/userform" element={<UserForm />} /> */}
        <Route path="/signup/studentform" element={<StudentForm />} />
        <Route path="/signup/coachform" element={<CoachForm />} />
        <Route path="/studentmenu" element={<StudentSidenav />} />
      </Routes>
    </div>
  );
}

export default App;
