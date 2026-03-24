import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import OAuthSuccess from "./pages/OAuthSuccess"
import ProtectedRoute from "./components/ProtectedRoute"
import Courses from "./pages/Courses"
import Lessons from "./pages/Lessons"
import GameLesson from "./pages/GameLesson"
import Layout from "./components/Layout"

function GameLessonWrapper() {
  const { lessonId } = useParams()
  return <GameLesson key={lessonId + Date.now()} />
}
function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        <Route path="/register" element={<Register />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Layout>
                <Courses />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses/:courseId"
          element={
            <ProtectedRoute>
              <Layout>
                <Lessons />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson/:lessonId"
          element={
            <ProtectedRoute>
              <Layout>
                <GameLesson />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App