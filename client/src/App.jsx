import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Dashboard from './Dashboard'
import CivicIssueLanding from './CivicIssueLanding';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/landing" element={<CivicIssueLanding />} />

      
    </Routes>
    </BrowserRouter>

  
  )
}

export default App

