import React from 'react'
import { assets } from '../assets/assets/frontend_assets/assets'

const footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm bg-gray-300 py-10 px-5'>
        <div>
            <img src={assets.logo} alt="Logo" className='w-36 mb-5' />
            <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Voluptates, consequuntur.</p>
        </div>
        <div>
            <p className= 'text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='cursor-pointer hover:text-gray-900'>Home</li>
                <li className='cursor-pointer hover:text-gray-900'>About Us</li>
                <li className='cursor-pointer hover:text-gray-900'>Delivery Information</li>
                <li className='cursor-pointer hover:text-gray-900'>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <p className='text-gray-700'>123 Main Street, City, Country</p>
            <p className='text-gray-700'>Email: info@example.com</p>
            <p className='text-gray-700'>Phone: +1 (123) 456-7890</p>
        </div>
    </div>
  )
}

export default footer