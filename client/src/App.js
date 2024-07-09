import React from 'react'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './component/Routes/PublicRoute';
function App() {
 
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={
        <PublicRoute>
          <Login />
        </PublicRoute>

      } />
      <Route path='/register' element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      } />
    </Routes>
  </>
  )
}

export default App