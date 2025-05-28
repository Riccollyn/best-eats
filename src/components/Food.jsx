import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);

  //Filter type burger/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 flex justify-center">
            Filter Type
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 text-orange-600 py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-orange-600 py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-orange-600 py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 text-orange-600 py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-orange-600 py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition duration-300"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 flex justify-center">
            Filter Price
          </p>
          <div className="flex justify-between max-width-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 bg-orange-600 text-white py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 bg-orange-600 text-white py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 bg-orange-600 text-white py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 bg-orange-600 text-white py-2 px-6 rounded-xl border-2 border-orange-600 hover:bg-white hover:text-orange-600 transition duration-300"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-2">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
