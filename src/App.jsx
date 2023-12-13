import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Student from "./Pages/Student";

import DepartmentLogin from "./Pages/DepartmentLogin";
import Admin from "./Pages/Admin";
import StudentDashBoard from "./Pages/StudentDashBoard";
import Scholarship from "./Pages/Scholarship";

import Otp from "./Pages/Otp";
import University from "./Pages/University";
import LoginWithDigi from "./Pages/LoginWithDigi";
import Loginopt from "./Pages/Loginopt";
import College from "./Pages/College";
import StudentList from "./Pages/StudentList";
import Detail from "./Pages/Detail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/student" element={<Student />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/DepartmentLogin" element={<DepartmentLogin />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/studentdashboard" element={<StudentDashBoard />} />

          <Route path="/scholarship" element={<Scholarship />}></Route>

          <Route path="/otp" element={<Otp />} />
          <Route path="/university" element={<University />} />
          <Route path="/LoginWithDigi" element={<LoginWithDigi />} />

          <Route path="/College" element={<College />} />
          <Route path="/Loginopt" element={<Loginopt />} />
          <Route path="/Detail" element={<Detail/>}></Route>
          <Route path="/StudentList" element={<StudentList/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
