import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import OAuthSuccess from "./pages/OAuthSuccess"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthContext } from "./contexts/AuthContext"
import Courses from "./pages/Courses"
import Lessons from "./pages/Lessons"
import GameLesson from "./pages/GameLesson"
function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        <Route path="/register" element={<Register />} />

        {/* Protected route */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/oauth-success" element={<OAuthSuccess />} />
        
        <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
        />
        <Route path="/courses/:courseId" element={<Lessons />} />
        <Route path="/game/:courseId" element={<GameLesson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App