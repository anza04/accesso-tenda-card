import React from 'react'
import ReactDOM from 'react-dom/client'
import Badge from './routes/badge'
import Caricamento from './routes/caricamento'
import './index.css'
import {BrowserRouter as Router, Route, Link, createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/badge", 
    element: <Badge />,
  },
  {
    path: "/",
    element: <Caricamento/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

