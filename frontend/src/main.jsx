import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "lucide-react";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Products from "./Pages/Products.jsx";
import Cart from "./Pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: (
          <h1 className="mt-5 p-3 text-red-600 font-semibold flex justify-center items-center">
            404 | Not Found
          </h1>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
