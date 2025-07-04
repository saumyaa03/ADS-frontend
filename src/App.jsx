import "./styles/App.css";
import React, { useContext } from "react";
import Home from "./screens/Home";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./screens/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PrivateRoute from "./components/PrivateRoute";
import { Context as AppContext } from "./contexts/AppContext";
import { ToastContainer } from "react-toastify";
import Products from "./screens/Products";

function App() {
  const { theme } = useContext(AppContext); 

  return (
    <BrowserRouter>
      <div className={`App arian-theme ${theme}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add_product"
            element={
              <PrivateRoute>
                <AddProduct />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
