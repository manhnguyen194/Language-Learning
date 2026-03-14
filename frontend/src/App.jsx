import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import OAuthSuccess from "./pages/OAuthSuccess"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        
        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>

    </BrowserRouter>
  )

}

export default App