import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    };

  return (
    <div className='text-center'>
        <div>
            <h2 className='text-2xl font-bold mb-4'>Subscribe to Our Newsletter</h2>
            <p className='text-gray-600 mb-6'>Get the latest updates and offers</p>
            <div onClick={onSubmitHandler} className='flex flex-col sm:flex-row gap-4 justify-center'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
                />
                <button className='bg-pink-500 text-gray-100 py-2 px-6 rounded-md hover:bg-pink-600 transition duration-300'>
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewsletterBox