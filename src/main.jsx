import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Orders from "./routes/Orders";
import Products from "./routes/Products";
import Cart from "./routes/Cart";
import Wishlist from "./routes/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
