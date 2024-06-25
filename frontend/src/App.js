import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Booking from './pages/Booking';
import AppointmentHistory from './pages/AppointmentHistory';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/signin" element={<SignIn/>} />
          <Route exact path="/booking" element={<Booking/>} />
          <Route exact path="/appointments" element={<AppointmentHistory/>} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
