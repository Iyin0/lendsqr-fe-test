import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom"
import SideNav from "./components/sideNav"
import TopNav from "./components/topNav"
import Home from "./pages/home"
import Login from "./pages/login"
import UserDetails from "./pages/userDetails"
import Users from "./pages/users"

const App = () => {

  const Layout = () => {
    return (
      <div className="App">
        <TopNav />
        <div>
          <SideNav />
          <Outlet />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/users/:id',
          element: <UserDetails />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
