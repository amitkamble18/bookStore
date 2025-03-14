import React from "react";
import Home from "./components/home/Home";
// import Course from "./components/Course";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
    {/* <Home />
    <Course /> */}

    <div className="dark:bg-white dark:text-black ">
    <Routes>
      <Route path="/"element={< Home/>} />
      <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Toaster />
    </div>
    
    </>
    
  )
}

export default App;