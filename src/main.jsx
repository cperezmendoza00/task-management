import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Task from './pages/Task';
import App from './App'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/dasboard",
    element: <div>Dashboard</div>,
  },
  {
    path: "/task",
    element: <Task/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
