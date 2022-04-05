import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContactForm from './components/ContactForm/ContactForm'
import HomePage from "./components/HomePage/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/NavBar/Navbar"
import  "./App.css"
function App() {

  return (
    <>
      <Navbar />
      <HomePage />
    </>
  )

}

export default App