import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "../src/index.css"

import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Course from "./pages/Course"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/course" element={<Course />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
