import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Configurando o react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './assets/routes/Home.jsx'
import Contact from './assets/routes/Contact.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
]);
// Configurando o react-router

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
