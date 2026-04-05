import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './title'
import ProductItem from './ProductItem'


const BestSeller = () => {
    const products = useContext(ShopContext)
    const [bestSeller, setBestSeller] = React.useState([])
    React.useEffect(() => {
        const bestProduct = products.products.filter((item) => item.bestseller )
        setBestSeller(bestProduct.slice(0, 5))
    }, [products])

    return (
        <div>
            <div className='my-10'>
                <div className='text-center py-8 text-3xl'>
                    <Title text1='Best' text2='Seller' />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Check out our best selling products</p>
                </div>

                {/*Rendering the products in a grid layout */}
                <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
                    {bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} images={item.images} name={item.name} price={item.price} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestSeller