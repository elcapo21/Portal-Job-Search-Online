import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import JobComponent from './components/JobComponent';
import JobListComponent from './components/JobListComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import 'boostrap/dist/css/bootstrap.min.css'
import AuthService from './services/auth.service';
import Login from './components/login.component';
import Register from './components/register.component';
import Profile from './components/profile.component';
import BoardUser from './components/board-user.component';
import BoardAdmin from './components/board-admin.component';
import EventBus from './common/EventBus';
import BoardRecruiter from './components/board-recruiter.component';
import BoardJobSeeker from './components/board-jobseeker.component';
import { Home } from './components/Home';


function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [showRecruiterBoard, setShowRecruiterBoard] = useState(false);
  const [showJobSeekerBoard, setShowJobSeekerBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowRecruiterBoard(user.roles.includes('ROLE_RECRUITER'));
      setShowJobSeekerBoard(user.roles.includes('ROLE_JOBSEEKER'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }

    EventBus.on('logout', logOut);

    return () => {
      EventBus.remove('logout', logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowRecruiterBoard(false);
    setShowJobSeekerBoard(false);
    setShowAdminBoard(false);
  };

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/recruiter" element={showRecruiterBoard ? <BoardRecruiter /> : <Login />} />
          <Route path="/jobseeker" element={showJobSeekerBoard ? <BoardJobSeeker /> : <Login />} />
          <Route path="/admin" element={showAdminBoard ? <BoardAdmin /> : <Login />} />
          <Route path="/job_details" element={<JobListComponent />} />
          <Route path="/add-job" element={currentUser ? <JobComponent /> : <Login />} />
          <Route path="/edit-job/:id" element={currentUser ? <JobComponent /> : <Login />} />
        </Routes>

        
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
