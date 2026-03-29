import React, { use } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets/frontend_assets/assets.js';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = React.useState(false);
    const location = useLocation();

    //  Clear search when navigating to a different page
    React.useEffect(() => {
        if (location.pathname.includes('collection') && showSearch) {
            setVisible(true);
        }else {
            setVisible(false);
        }
    }, [location]);
  return showSearch && visible ? (
    <div className='border-t border-b  text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search...'
          className='w-full focus:outline-none'
        />
        <img onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="Search" className='inine w-4 h-4 cursor-pointer' />
      </div>
    </div>
  ) : null
}

export default SearchBar