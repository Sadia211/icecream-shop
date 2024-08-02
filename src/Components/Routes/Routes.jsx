import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from '../Home/Home.jsx'
import Menu from '../Menu/Menu.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/menu",
    element: <Menu></Menu>,
    loader:()=>fetch('./menu.json')
    },
  


]);
export default router;