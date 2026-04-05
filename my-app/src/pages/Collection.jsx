import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/title'


const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])

  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  // 🔁 Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value

    if (category.includes(value)) {
      setCategory(prev => prev.filter(item => item !== value))
    } else {
      setCategory(prev => [...prev, value])
    }
  }

  // 🔁 Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value

    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== value))
    } else {
      setSubCategory(prev => [...prev, value])
    }
  }

  // 🔍 Apply Filters + Sorting
  const applyFilters = () => {
    let productCopy = products.slice()
    if (showSearch && search) {
      productCopy = productCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    // Category filter
    if (category.length > 0) {
      productCopy = productCopy.filter(item =>
        category.includes(item.category)
      )
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item =>
        subCategory.includes(item.subCategory)
      )
    }

    // Sorting
    if (sortType === 'low-to-high') {
      productCopy.sort((a, b) => a.price - b.price)
    } else if (sortType === 'high-to-low') {
      productCopy.sort((a, b) => b.price - a.price)
    } else if (sortType === 'newest') {
      productCopy.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    setFilterProducts(productCopy)
  }
  const sortProducts = () => {
    let fpCopy = filterProducts.slice()

    if (sortType === 'low-to-high') {
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
    } else if (sortType === 'high-to-low') {
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
    } else if (sortType === 'newest') {
        setFilterProducts(fpCopy.sort((a, b) => new Date(b.date) - new Date(a.date)))
    }
    }

  // Load products initially
  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  // Re-run filter when state changes
  useEffect(() => {
    applyFilters()
  }, [category, subCategory, sortType, products, search, showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 pt-10 border-t'>

      {/* 🔹 FILTER SIDEBAR */}
      <div className='min-w-60'>

        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-lg flex items-center cursor-pointer gap-2'
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category */}
        <div className={`border p-4 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium mb-3'>Category</p>

          {['Men', 'Women', 'Kids'].map((item, i) => (
            <label key={i} className='flex gap-2 mb-2 text-sm cursor-pointer'>
              <input
                type="checkbox"
                value={item}
                onChange={toggleCategory}
              />
              {item}
            </label>
          ))}
        </div>

        {/* SubCategory */}
        <div className={`border p-4 mt-4 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium mb-3'>Type</p>

          {['Topwear', 'Bottomwear', 'Footwear'].map((item, i) => (
            <label key={i} className='flex gap-2 mb-2 text-sm cursor-pointer'>
              <input
                type="checkbox"
                value={item}
                onChange={toggleSubCategory}
              />
              {item}
            </label>
          ))}
        </div>

      </div>

      {/* 🔹 PRODUCT SECTION */}
      <div className='flex-1'>

        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <Title text1={'All'} text2={'COLLECTION'} />

          {/* Sorting */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border text-sm px-2 py-1 rounded-md'
          >
            <option value='relevant' >Sort by: Relevant</option>
            <option value='low-to-high'>Low to High</option>
            <option value='high-to-low'>High to Low</option>
            <option value='newest'>Newest</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                images={item.images}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No products found
            </p>
          )}
        </div>

      </div>

    </div>
  )
}

export default Collection