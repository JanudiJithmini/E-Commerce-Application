import React from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";
import { assets } from "../assets/assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    React.useContext(ShopContext);
  const [cartData, setCartData] = React.useState([]);

  React.useEffect(() => {
    if (products.length > 0) {
      let tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl font-medium mb-5">
        <Title text1={"CART"} text2={"ITEMS"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );

          if (!productData) return null;

          return (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 sm:gap-6 mb-4 border-t border-gray-300 pt-4 pb-4"
            >
              {/* Product Image */}
              <img
                src={productData.images[0]}
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded"
              />

              {/* Product Details */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <p className="text-sm sm:text-lg font-medium">
                  {productData.name}
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-sm sm:text-base font-semibold">
                    {currency}
                    {productData.price}
                  </p>

                  <span className="px-2 sm:px-3 py-1 border rounded bg-pink-100 text-pink-600 text-xs sm:text-sm">
                    Size: {item.size}
                  </span>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                className="border w-12 h-9 sm:w-16 sm:h-10 text-center rounded"
                type="number"
                min="1"
                value={item.quantity} // Initial quantity value={item.quantity}
                onChange={(e) =>
                  e.target.value === "" || e.target.value <= 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value),
                      )
                }
              />

              {/* Delete Icon */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                alt="delete"
                className="w-3 h-4 sm:w-5 cursor-pointer hover:opacity-70"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-10 px-4 sm:px-0">
        <div className="w-full sm:w-[400px] bg-pink-300 shadow-md rounded-lg p-5 border">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="  border-t-2 bg-black text-white py-2 px-6  hover:bg-gray-800"
            >
              {" "}
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
