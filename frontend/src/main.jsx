import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Shipping from "./pages/Shipping.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Payment from "./pages/Payment.jsx";
import Order from "./pages/Order.jsx";
import OrderPlace from "./pages/OrderPlace.jsx";
import Profile from "./pages/Profile.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderList from "./pages/admin/OrderList.jsx";
import ProductList from "./pages/admin/ProductList.jsx";
import ProductEdit from "./pages/admin/ProductEdit.jsx";
import UserList from "./pages/admin/UserList.jsx";

const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/order/:id" element={<OrderPlace />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderList />} />
        <Route path="/admin/productlist" element={<ProductList />} />
        <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
        <Route path="/admin/userlist" element={<UserList />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={routers} />
      </PayPalScriptProvider>
    </Provider>
  </StrictMode>
);
