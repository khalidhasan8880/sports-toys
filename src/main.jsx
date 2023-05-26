import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './HomePage/Home/Home';
import Login from './Login&SignUp/Login';
import Register from './Login&SignUp/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import AddToy from './Pages/AddToy';
import MyToys from './Pages/MyToys';
import App from './App';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import AllToys from './Pages/AllToys';
import Error from './components/Error';
import Blog from './Pages/Blog';


export default function usePageViews(location) {
  useEffect(() => {
    document.title = 'Sports-toys || ' + location.pathname.slice(1); // Set the title to the current path
  }, [location])
}




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path: '/all_toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/sign_up',
        element: <Register></Register>
      },
      {
        path: '/add_toy',
        element: <PrivetRoute><AddToy></AddToy></PrivetRoute>
      },
      {
        path: '/my_toys',
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>
      },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)