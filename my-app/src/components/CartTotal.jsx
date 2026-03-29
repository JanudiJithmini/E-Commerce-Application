import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./title";

const CartTotal = () => {
  const { curreny, delivery_fee, getCartAmount } = useContext(ShopContext);
  return <div className="w-full">
    <div className="text-2xl">
        <Title text1="Cart" text2="Total" />
    </div>
    <div className="flex justify-between items-center">
        <p className="text-gray-500">Subtotal</p>
        <p className="text-gray-500">{curreny}{getCartAmount()}.00</p>
    </div>
    <div className="flex justify-between items-center">
        <p className="text-gray-500">Delivery Fee</p>
        <p className="text-gray-500">{curreny}{delivery_fee}.00</p>
    </div>
    <div className="flex justify-between items-center mt-2 border-t pt-2">
        <p className="text-lg font-medium">Total</p>
        <p className="text-lg font-medium">{curreny}{getCartAmount() + delivery_fee}.00</p>
    </div>
  </div>;
};

export default CartTotal;
