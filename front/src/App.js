
import {Routes, Route} from "react-router-dom"

import React from 'react'
import Login from "./page/Login"
import Home from "./page/Home"

const App = () => {
  return (
    <div>
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />

    </Routes>

    </div>
  )
}

export default App