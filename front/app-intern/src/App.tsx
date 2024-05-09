import {Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import RegisterPage from "./pages/Register"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Home"


function App() {


  return (
    <div className="mt-20">
      <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>


      <Footer/>

    </div>
  )
}

export default App
