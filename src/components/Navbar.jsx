import React from "react";
import { NavLink,Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <h2 className="text-2xl text-white">
                    <Link to={"/"}>adssad</Link>
                </h2>
                <div className="flex md:order-2">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-search"
                >
                    <ul className="navbar flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About" },
                            { path: "/contact", label: "Contact" },
                            { path: "/products", label: "Products" },
                            { path: "/product", label: "Product" },
                        ].map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block py-2 px-3 rounded ${
                                            isActive
                                                ? "text-blue-700 dark:text-blue-500"
                                                : "text-gray-900 dark:text-white"
                                        } hover:bg-gray-100 dark:hover:bg-gray-700`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
