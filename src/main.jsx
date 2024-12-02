import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./pages/root"
import NotFound from './pages/notFound'
import Historia from './pages/historia'
import Turismo from './pages/turismo'
import Inicio from './pages/inicio'

const router = createBrowserRouter([
  {
    // Ruta raiz
    path: '/',
    element: <Root />,
    children: [
      {
        // Ruta a inicio 
        path: 'inicio',
        element: <Inicio />
      },
      {
        // Ruta a historia
        path: 'historia',
        element: <Historia />
      },
      {
        // Ruta a turismo
        path: 'turismo',
        element: <Turismo />
      },
    ]
  },
  {
    // Ruta no encontrada
    path: '*',
    element: <NotFound />
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
