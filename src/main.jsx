import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx"
import Qual from "./routes/Qual.jsx"
import Services from "./routes/Services.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Qual",
    element: <Qual />
  },
  {
    path: "/Services",
    element: <Services/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
