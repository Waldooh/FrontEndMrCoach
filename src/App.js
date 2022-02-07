import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
// import AccountType from './components/AccountSelector';
import Landing from './pages/LandingPage';
// import UserForm from './components/CarruselForm/Carousel';
import StudentForm from './pages/FormPages/StudentForm/StudentForm';
import CoachForm from './pages/FormPages/CoachForm/CoachForm';
import SideMenu from './components/SideMenu';
import Routines from './pages/Dashboard/CoachDash/RoutinesPage';
import Pupils from './pages/Dashboard/CoachDash/PupilsBoard';

const Exercises = () => {
  return <h1>Exercises</h1>
}
const Blog = () => {
  return <h1>Blog</h1>
}
const Chat = () => {
  return <h1>Chat</h1>
}



function App() {

  const [isactive, setIsactive] = useState(false);
  const [islogged, setIslogged] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("jwt"));
    if(token) {
      setIslogged(true)
      setIsactive()
    }
  }, [])

  // const logout = () => {
  //   localStorage.removeItem("jwt");
  // }

  return (
    <>
      {islogged
        ? <SideMenu onCollapse={(isactive)=>{setIsactive(isactive)}} />
        : ""
      }
      
      <div className={`container-dashboard ${(isactive) ? "isactive" : ""}`}>
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
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
