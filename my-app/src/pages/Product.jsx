import React, { use, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { id } = useParams();
  const { products, curreny, addToCart } = React.useContext(ShopContext);
  const [productData, setProductData] = React.useState(false);
  const [images, setImages] = React.useState("");
  const [size, setSize] = React.useState("");

  const fetchProductData = async () => {
    products.find((item) => {
      if (item._id === id) {
        setProductData(item);
        setImages(item.images[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap:12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className=" flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productData.images.map((item, index) => (
              <img
                onClick={() => setImages(item)}
                src={item}
                key={index}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={images} alt=""></img>
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-4">
            <img className="w-3 h-3" src={assets.star_icon} alt="" />
            <img className="w-3 h-3" src={assets.star_icon} alt="" />
            <img className="w-3 h-3" src={assets.star_icon} alt="" />
            <img className="w-3 h-3" src={assets.star_icon} alt="" />
            <img className="w-3 h-3" src={assets.star_dull_icon} alt="" />
            <p className="text-xs text-gray-500 ml-2">4.0</p>
          </div>
          <p className="text-xl font-bold mt-4">
            {curreny}
            {productData.price}
          </p>
          <p className="text-sm text-gray-700 mt-4">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p> Select Size</p>
            <div className="flex gap-3">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`border cursor-pointer py-2 px-4 bg-gray-100 ${size === item ? "border-orange-500" : "border-gray-300"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p> 100% Original product</p>
            <p> Cash on delivery available</p>
            <p> Easy 30 days returns and exchanges</p>
          </div>
        </div>
      </div>
      {/* Description & Rewiew Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border-t border-b px-5 py-3 text-sm">Reviews (122)</b>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 ">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            voluptate.
          </p>
          <p>
            {" "}
            E-commerce WebSite Loeram ispsum dolor sit amet consectetur
            adipisicing elit.{" "}
          </p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div>Product not found</div>
  );
};

export default Product;
