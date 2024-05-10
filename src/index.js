import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layanan from './pages/Layanan';
import Kontak from './pages/Kontak';
import Beranda from './pages/Beranda';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Home",
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
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);
