
import './App.css'
import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import ProductsContextProvider from "./store/products-context.jsx";

const router = createHashRouter([
  {
    path: "/",
    element:
        <RootLayout />,

    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/products",
        element:
        <ProductsContextProvider>
            <Products />
        </ProductsContextProvider>
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
