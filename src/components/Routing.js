import React from 'react'
import {BrowserRouter as Br, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Project1 from './Project1'

function Routing() {
  return (
    <div>
      <Br>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/Project1">Project1</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Project1" element={<Project1/>} />
        </Routes>
      </Br>
    </div>
  )
}

export default Routing
