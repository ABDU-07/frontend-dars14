import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function View() {
    const id = location.pathname.split("/")[2];
    const [view, setView] = useState([]);

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setView(data))
        .catch((err) => console.log(err));

    return (
        <div className="container flex gap-20 mx-auto p-4">
            <img className="w-[400px]" src={view.image} alt={view.title} />
            <div className="w-[400px]">
                <h1 className="text-3xl font-bold text-center mb-8">
                    {view.title}
                </h1>
                <p className="mt-4">{view.description}</p>
                <p className="mt-4 font-bold"> ${view.price}</p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    <NavLink to="/products">Back</NavLink>
                </button>
            </div>
        </div>
    );
}
