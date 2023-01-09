import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideNav from "./components/sideNav"
import TopNav from "./components/topNav"
import Home from "./pages/home"
import Login from "./pages/login"
import UserDetails from "./pages/userDetails"
import Users from "./pages/users"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <TopNav />
        <div>
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
