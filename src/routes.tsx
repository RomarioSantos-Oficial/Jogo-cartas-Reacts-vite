// src/routes.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Rules from './pages/Rules'
import Pages404 from './pages/Pages404'
import Container from './components/Container'

function AppRoutes() {
  return (
    <Router>
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<Pages404 />} />
      </Routes>
      </Container>
    </Router>
  )
}

export default AppRoutes