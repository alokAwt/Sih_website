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
import Ticket from "./Pages/Ticket";
import ApplyForm from "./Pages/Apply";
import "bootstrap/dist/css/bootstrap.min.css";
import Myapplication from "./Pages/Myapplication";
import CollegeResister from "./Pages/CollegeResister";
import Login from "./Pages/Login";
import Documents from "./Pages/Documents";
import LoginAciee from "./Pages/Loginwithaciee";
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
          <Route
            path="/college/Signup"
            element={<CollegeResister></CollegeResister>}
          />
          <Route path="/college/Login" element={<Login></Login>} />
          <Route path="/college/Login/aciee" element={<LoginAciee></LoginAciee>} />
          <Route path="/college/documents" element={<Documents></Documents>} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/studentdashboard" element={<StudentDashBoard />} />

          <Route path="/scholarship" element={<Scholarship />}></Route>

          <Route path="/otp" element={<Otp />} />

          <Route path="/LoginWithDigi" element={<LoginWithDigi />} />

          <Route
            path="/myapplication"
            element={<Myapplication></Myapplication>}
          />
          <Route path="/College" element={<College />} />
          <Route path="/apply/:govt/:id" element={<ApplyForm></ApplyForm>} />
          <Route path="/Loginopt" element={<Loginopt />} />
          <Route path="/Detail/:id" element={<Detail />}></Route>
          <Route path="/StudentList" element={<StudentList />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/university" element={<University></University>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
