import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "A ",
      price: "3500",
      profitPercentage: 34,
      productType: "RAM",
    },
    {
      id: 2,
      name: "B ",
      price: "3000",
      profitPercentage: 33,
      productType: "MOTHERBOARD",
    },
    {
      id: 3,
      name: "C ",
      price: "10000",
      profitPercentage: 32,
      productType: "GRAPHICS CARD",
    },
    {
      id: 4,
      name: "D ",
      price: "4500",
      profitPercentage: 31,
      productType: "RAM",
    },
    {
      id: 5,
      name: "E ",
      price: "5000",
      profitPercentage: 30,
      productType: "MOTHERBOARD",
    },
    {
      id: 6,
      name: "F ",
      price: "60000",
      profitPercentage: 29,
      productType: "GRAPHICS CARD",
    },
    {
      id: 7,
      name: "G ",
      price: "7500",
      profitPercentage: 28,
      productType: "RAM",
    },
    {
      id: 8,
      name: "H ",
      price: "8000",
      profitPercentage: 27,
      productType: "MOTHERBOARD",
    },
    {
      id: 9,
      name: "I ",
      price: "90000",
      profitPercentage: 26,
      productType: "GRAPHICS CARD",
    },
  ]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
