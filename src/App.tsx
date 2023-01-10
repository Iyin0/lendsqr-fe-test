import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import SideNav from "./components/sideNav"
import TopNav from "./components/topNav"
import Home from "./pages/home"
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
              <Route path="/login" element={loginState !== 'false' ? <Navigate to='/' /> : <Login />} />
            </Routes>
          ) :
          (<div>
            <TopNav />
            <div>
              <SideNav />
              <Routes>
                <Route path="/" element={loginState === 'false' ? <Navigate to='/login' /> : <Home />} />
                <Route path="/users" element={loginState === 'false' ? <Navigate to='/login' /> : <Users />} />
                <Route path="/users/:id" element={loginState === 'false' ? <Navigate to='/login' /> : <UserDetails />} />
              </Routes>
            </div>
          </div>)
        }
      </div>
    </BrowserRouter>
  )
}

export default App
