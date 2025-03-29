import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Hero from './Components/Hero/Hero'
import { createContext, useState } from 'react'
import Purchase from './Components/Purchase/Purchase'

export const darkModeCtx = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const router = createBrowserRouter([{
    element: <Layout />,
    children: [{
      path: '/',
      element: <Hero />
    },{
      path: "/buy-now",
      element: <Purchase />
    }]
  }])

  return (
    <darkModeCtx.Provider value={{darkMode, setDarkMode}}>
      <RouterProvider router={router} />
    </darkModeCtx.Provider>
  )
}

export default App
