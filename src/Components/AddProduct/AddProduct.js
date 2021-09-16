import React, { useState, useContext } from "react";
import "./AddProduct.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
// import { UserContext } from "../UserContext/UserContext";

const Create = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [profitPercentage, setProfitPercentage] = useState("");
  const [productType, setProductType] = useState("");

  const [products, setProducts] = useContext(ProductContext);

  const updateId = (e) => {
    setId(e.target.value);
    // console.log(id);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const updateProfitPercentage = (e) => {
    setProfitPercentage(e.target.value);
  };
  const updateProductType = (e) => {
    setProductType(e.target.value);
  };
  const addUser = (e) => {
  
    setProducts([
      ...products,
      {
        id: id,
        name: name,
        price: price,
        profitPercentage: profitPercentage,
        productType: productType,
      },
    ]);  
    e.preventDefault();
  };

  return (
    <div className="create container m-auto">
      <Form className="mt-5" onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={price}
            onChange={updatePrice}
            placeholder="Enter Product Price"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profit Percentage</Form.Label>
          <Form.Control
            type="number"
            name="profitPercentage"
            value={profitPercentage}
            onChange={updateProfitPercentage}
            placeholder="Enter Percentage"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Type</Form.Label>
          <Form.Control
            type="text"
            name="productType"
            value={productType}
            onChange={updateProductType}
            placeholder="Enter Product Type"
          />
        </Form.Group>  
        <Button className=" mt-5" variant="primary" type="submit">
          Create User
        </Button>
{/*       
          <Button className="action_btn" variant="info">
            Back to Home
          </Button> */}
       
      </Form>
    </div>
  );
};

export default Create;
