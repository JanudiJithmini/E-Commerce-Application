import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = React.useContext(ShopContext)
const [latestProducts, setLatestProducts] = React.useState([])
React.useEffect(() => {
    setLatestProducts(products.slice(0, 10))
},[products])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1='Latest' text2='Collection'/>
            <p className='text-gray-500 text-sm'>Check out our latest collection of products</p>
        </div>
       
        {/*Rendering the products in a grid layout*/}
        <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latestProducts.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>

    </div>
  )
}

export default LatestCollection