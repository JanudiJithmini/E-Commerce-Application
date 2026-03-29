import React from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './title';


const RelatedProducts = ({category, subCategory}) => {
    const { products } = React.useContext(ShopContext);
    const [related, setRelated] = React.useState([]);

    React.useEffect(() => {
        if (products.length > 0 ) {
            let productCopy = products.slice()
                productCopy = productCopy.filter(item => item.category === category)
                productCopy = productCopy.filter(item => item.subCategory === subCategory)
                // console.log(productCopy.slice(0, 5))
                setRelated(productCopy.slice(0, 5))
        }
    }, [products])
            
  return (
    <div className='my-24'>
        <div className='flex justify-between items-center mb-4 '>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>
        <div className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 pt-4 border-t'>
            {related.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>   
    </div>
  )
}

export default RelatedProducts