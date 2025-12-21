import React from 'react'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import MessagePage from './pages/MessagePage'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <>
      <Snowfall
        snowflakeCount={100}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:name" element={<MessagePage />} />
      </Routes>
    </>
  )
}

export default App
