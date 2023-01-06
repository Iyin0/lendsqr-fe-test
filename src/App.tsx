import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNav from "./components/topNav"
import Login from "./pages/login"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login /> */}
        <TopNav />
        {/* <Routes>
          <Route path="/"
        </Routes> */}
      </div>
    </BrowserRouter>
  )
}

export default App
