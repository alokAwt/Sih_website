import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Student from './Pages/Student'
import StudentLogin from './Pages/StudentLogin'
import DepartmentLogin from './Pages/DepartmentLogin'
import Admin from './Pages/Admin'
import StudentDashBoard from './Pages/StudentDashBoard'
import Scholarship from './Pages/Scholarship'
import LoginWithDigi from './Pages/LoginWithDigi'





export default function App() {
  return (
    <>
     
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/student' element={<Student/>}/>
      <Route path="/register" element={<Register />}></Route>
      <Route path='/DepartmentLogin' element={<DepartmentLogin />}/>
      <Route path="/Studentlogin" element={<StudentLogin />}></Route>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/studentdashboard' element={<StudentDashBoard/>}/>
      <Route path='/scholarship' element={<Scholarship/>}></Route>
      <Route path='/loginwithdigi' element={<LoginWithDigi/>} />
      

    </Routes>
     
    </BrowserRouter>
    </>
  )
}
