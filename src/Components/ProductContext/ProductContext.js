import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider =(props) => {
  
    const [products, setProducts] = useState([
    { id: 1, name: "RAM", price: "3500", profitPercentage: 28, productType: "RAM"},
    { id: 2, name: "MOTHERBOARD", price: "3000", profitPercentage: 26, productType: "MOTHERBOARD" },
    { id: 3, name: "GRAPHICS CARD", price: "10000", profitPercentage: 27,productType: "GRAPHICS CARD" },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};