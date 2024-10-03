



import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUp from './SignUp'
import Login from './Login'
const App = () => {
  return (
    <div>
       <Router>   

      <Routes>
        <Route    path='/'  element={<SignUp/>} />
        <Route    path='/login'  element={<Login/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
