import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);  //Context for storing all the products
  const [product,setProduct] = useState({});     //Context for storing a single product
  const [openProductDescDialog,setOpenProductDescDialog] = useState(false);
  const [showLoading,setShowLoading] = useState(false);
  return (
    <ProductsContext.Provider value={{products, setProducts,product,setProduct,openProductDescDialog,setOpenProductDescDialog,showLoading,setShowLoading}}>
      {children}
    </ProductsContext.Provider>
  );
};