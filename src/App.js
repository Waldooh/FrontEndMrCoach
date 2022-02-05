import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
// import AccountType from './components/AccountSelector';
import Landing from './pages/LandingPage';
// import UserForm from './components/CarruselForm/Carousel';
import StudentForm from './pages/FormPages/StudentForm/StudentForm';
import CoachForm from './pages/FormPages/CoachForm/CoachForm';
import StudentSidenav from './pages/Dashboard/StudentDash/StudentSidenav';
import SideMenu from './components/SideMenu';


const Routines = () => {
  return <h1>Routines</h1>
}
const Exercises = () => {
  return <h1>Exercises</h1>
}
const Pupils = () => {
  return <h1>Pupils</h1>
}
const Blog = () => {
  return <h1>Blog</h1>
}
const Chat = () => {
  return <h1>Chat</h1>
}



function App() {

  // const [isactive, setIsactive] = useState(false)

  return (
    <>
      {/* <SideMenu onCollapse={(isactive)=>{setIsactive(isactive)}} /> */}
      
      {/* <div className={`container-dashboard ${isactive ? "isactive" : ""}`}> */}
        <Routes>
          <Route path="/routines" element={<Routines />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/pupils" element={<Pupils />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup/studentform" element={<StudentForm />} />
          <Route path="/signup/coachform" element={<CoachForm />} />
          <Route path="/signup/:accountType" element={<Signup />} />
          {/* <Route path="/accountSelect" element={<AccountType />} /> */}
          <Route path="/landing" element={<Landing />} />
          {/* <Route path="/signup/userform" element={<UserForm />} /> */}
         
          <Route path="/studentmenu" element={<StudentSidenav />} />
        </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
