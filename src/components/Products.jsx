import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        className="border rounded-lg w-[400px] shadow-md p-4 flex flex-col items-center"
                        key={product.id}
                    >
                        <div className=" h-48 flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full max-w-full object-contain"
                            />
                        </div>
                        <div className=" mt-4 text-center w-[300px]  ">
                            <h2 className="text-lg font-semibold truncate">
                                {product.title}
                            </h2>
                            <p className="text-gray-700 text-sm mt-2">
                                ${product.price}
                            </p>
                            <p className="text-gray-500 text-xs mt-1 capitalize">
                                {product.description}
                            </p>
                            <p className="text-yellow-500 text-sm mt-2">
                                ⭐ {product.rating?.rate} (
                                {product.rating?.count} reviews)
                            </p>
                        </div>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            <NavLink to={`/View/${product.id}`}>View</NavLink>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
