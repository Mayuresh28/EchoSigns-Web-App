import React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Meetings from './pages/Meetings'
import Schedule from './pages/Schedule'
import Learn from './pages/Learn'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route path="meetings" element={<Meetings />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="learn" element={<Learn />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default App
