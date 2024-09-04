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
import Reviews from "./routes/Reviews.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Intro",
    element: <Intro/>,
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
  },
  {
    path: "/Reviews",
    element: <Reviews/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
