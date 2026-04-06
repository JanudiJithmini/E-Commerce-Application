import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, curreny } = useContext(ShopContext);
  const [orderData, setOrderData] = React.useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }
      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        {
          headers: { token },
        },
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-t py-4"
          >
            {/* Image */}
            <img
              className="w-16 h-16 object-cover rounded"
              src={item.images[0]}
              alt=""
            />

            {/* Details */}
            <div className="flex-1">
              <p className="sm:text-base font-medium">{item.name}</p>

              <div className="flex items-center gap-3 mt-1 text-sm sm:text-base text-gray-700 flex-wrap">
                <p >
                  {curreny}
                  {item.price}
                </p>

                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <p className="text-green-500 font-medium">Delivered</p>
              </div>

              <p className="mt-1 text-sm">
                Date:
                <span className="text-gray-400 ml-1">{new Date(item.date).toDateString()}</span>
              </p>
              <p className="mt-1 text-sm">
                Payment Method:
                <span className="text-gray-400 ml-1">{item.paymentMethod}</span>
              </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="text-sm text-pink-500">{item.status}</p>

              <button onClick={loadOrderData} className="border px-4 py-1 rounded hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
