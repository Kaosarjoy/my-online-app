import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from "react-hot-toast";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './component/Home/Home.jsx';
import Root from './Layout/Root.jsx';

import Installation from './component/Installation/Installation.jsx';
import PageError from './component/PageError/PageError.jsx';
import AppError from './component/AppError/AppError.jsx';
import BookDetails from './component/BookDetails/BookDetails.jsx';
import Apps from './component/Apps/Apps.jsx';
const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   children:[
    {
      index: true, 
      path:'/home',
      Component: Home 
    },
    {
      path:'/apps',
      Component:Apps
    },
    {
      path:'/bookDetails/:id',
      Component:BookDetails,
     loader:()=>fetch('/product.json')
    },
    {
      path:'/installation',
      Component:Installation
    },
    {
      path:'/*',
      Component:PageError
    },
    {
      path:'/*',
      Component:AppError
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
      <Toaster position="top-center" />
  </StrictMode>
)
