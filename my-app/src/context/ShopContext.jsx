import React from "react"
import { createContext } from "react"
export const ShopContext = React.createContext()
import { products } from "../assets/assets/frontend_assets/assets"
const ShopContextProvider = (props) => {
    const curreny = '$';
    const delivery_fee = 10;
    const value = {
        products,
        curreny,
        delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider