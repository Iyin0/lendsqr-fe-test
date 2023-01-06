import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideNav from "./components/sideNav"
import TopNav from "./components/topNav"
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <TopNav />
        <SideNav />
        {/* <Routes>
          <Route path="/"
        </Routes> */}
      </div>
    </BrowserRouter>
  )
}

export default App
