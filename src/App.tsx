import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideNav from "./components/sideNav"
import TopNav from "./components/topNav"
import Home from "./pages/home"
import LandingPage from "./pages/landingPage"
import Login from "./pages/login"
import UserDetails from "./pages/userDetails"
import Users from "./pages/users"

function App() {

  const [loginState, setLoginState] = useState(window.localStorage.getItem('isLoggedIn'))

  useEffect(() => {
    setLoginState(window.localStorage.getItem('isLoggedIn'))
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        {loginState === 'false' ?
          (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          ) :
          (<div>
            <TopNav />
            <div>
              <SideNav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:id" element={<UserDetails />} />
              </Routes>
            </div>
          </div>)
        }
      </div>
    </BrowserRouter>
  )
}

export default App
