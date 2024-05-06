import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import CareersPage from './Pages/CareersPage';
import LocationPage from './Pages/LocationPage';
import ErrorPage from './Pages/ErrorPage';


const root = ReactDOM.createRoot(document.getElementById('root'));

const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    },
    {
      path:"/careers",
      element:<CareersPage/>
    },
    {
      path:"/location",
      element:<LocationPage/>
    }
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);


