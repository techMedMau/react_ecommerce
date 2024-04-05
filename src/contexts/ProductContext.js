import React, {createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        }
        fetchProducts();
    }, []);
    return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;