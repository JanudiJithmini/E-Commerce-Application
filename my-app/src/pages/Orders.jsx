import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/title'

const Orders = () => {

  const { products, curreny } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>

        {products.slice(1, 4).map((item, index) => (

          <div key={index} className='flex flex-col sm:flex-row gap-4 items-start sm:items-center border-t py-4'>

            {/* Image */}
            <img 
              className='w-16 h-16 object-cover rounded' 
              src={item.image[0]} 
              alt='' 
            />

            {/* Details */}
            <div className='flex-1'>

              <p className='sm:text-base font-medium'>
                {item.name}
              </p>

              <div className='flex items-center gap-3 mt-2 text-sm sm:text-base text-gray-700 flex-wrap'>

                <p className='text-lg font-semibold'>
                  {curreny}{item.price}
                </p>

                <p>Quantity: 1</p>
                <p>Size: M</p>
                <p className='text-green-500 font-medium'>
                  Delivered
                </p>

              </div>

              <p className='mt-2 text-sm'>
                Date: 
                <span className='text-gray-400 ml-1'>
                  25 Jan 2023
                </span>
              </p>

            </div>

            {/* Right Section */}
            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-6'>

              <p className='text-sm text-pink-500'>
                Ready to ship
              </p>

              <button className='border px-4 py-1 rounded hover:bg-gray-100 transition'>
                Track Order
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Orders;