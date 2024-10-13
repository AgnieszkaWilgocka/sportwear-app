
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
          path: "/products",
          element: <Products />
    }
    ]
  },

]);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
