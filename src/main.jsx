import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Main from './layout/Main'
import Home from './components/Header/Home/Home'
import Login from './components/login/Login'


const router = createBrowserRouter([

  {path:'/' ,element: <Main/>, children:[

    {path:'/', element: <Home/>},
    {path:'/login', element: <Login/>},
  ]}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
