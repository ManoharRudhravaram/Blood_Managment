import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
function App() {
  let routes = createBrowserRouter([{
    path: "/",
    element: <HomePage />,
    children:[ {
      path: "login",
      element: <Login />
    }, {
      path: "register",
      element: <Register />
    }]
  }])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App