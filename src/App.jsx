import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Product from "./components/Product";
import View from "./components/View";

export default function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/products"} element={<Products />} />
                <Route path={"/product"} element={<Product />} />
                <Route path={"/view/:id"} element={<View />} />
            </Routes>
        </div>
    );
}
