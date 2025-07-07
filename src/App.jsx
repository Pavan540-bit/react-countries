import React, { useEffect } from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import Error from './pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import WOW from 'wowjs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      }
      , {
        path: "country",
        element: <Country />,
      }
      , {
        path: "contact",
        element: <Contact />,
      }

    ]
  }
])

const App = () => {

  // wow js initiation starts
{
useEffect(() => {
    new WOW.WOW().init();
  }, []);
}
// wow js initiation ends

  return (
    <RouterProvider router={router}>
      <Router>
        <div className="App">
          <h1>React Router Example</h1>
          <Home />
          <About />
          <Country />
          <Contact />
        </div>
      </Router></RouterProvider>

  )
}

export default App
