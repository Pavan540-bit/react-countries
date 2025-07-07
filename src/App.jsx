import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import AppLayout from './components/Layout/AppLayout';
import Error from './pages/Error';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WOW from 'wowjs/dist/wow.js'; // <- Fix this line

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'country', element: <Country /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
