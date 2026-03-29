import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


const ProductItem = ({ id, image, name, price }) => {
  const { curreny } = useContext(ShopContext);

  return (
    <div>
      <div className="h-full flex flex-col">
        <Link
          to={`/product/${id}`}
          className="flex flex-col h-full border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          
          <div className="w-full h-48 overflow-hidden">
            <img
              src={image[0]}
              alt={name}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>

       
          <div className="flex flex-col justify-between flex-1 p-2">
            <p className="text-sm line-clamp-2">{name}</p>
            <p className="text-gray-700 text-sm font-bold mt-2">
              {curreny}
              {price}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
