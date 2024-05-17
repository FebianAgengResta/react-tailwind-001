import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layanan from './pages/Layanan';
import Kontak from './pages/Kontak';
import Beranda from './pages/Beranda';
import Us from './pages/TentangKami';
import Login from './pages/Login';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Beranda",
    element:<Beranda/>,
  },
  {
    path: "Layanan",
    element: <Layanan/>,
  },
  {
    path: "Kontak",
    element: <Kontak/>,
  },
  
  {
    path: "TentangKami",
    element: <Us/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
