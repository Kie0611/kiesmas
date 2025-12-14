import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/:name" element={<MessagePage/>}/>
      </Routes>
    </div>
  )
}

export default App