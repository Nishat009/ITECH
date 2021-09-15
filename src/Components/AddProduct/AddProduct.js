import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
import "./AddProduct.css";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [profitPercentage, setProfitPercentage] = useState("");
  const [type, setType] = useState("");

  const [products, setProduct] = useContext(ProductContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id);
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
  const updateType = (e) => {
    setType(e.target.value);
  };

  const addProduct = (e) => {
    
    setProduct([
      ...products,
      {
        id: id,
        name: name,
        price: price,
        profitPercentage: profitPercentage,
        productType: type,
      },
    ]);
    e.preventDefault();

  };

  return (
    <div className="container create   m-auto">
      <Form className="mt-5  " onSubmit={addProduct}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="number"
            required
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter Product ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Product Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            required
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
            required
            name="profitPercentage"
            value={profitPercentage}
            onChange={updateProfitPercentage}
            placeholder="Enter Profit Percentage"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            value={type}
            onChange={updateType}
            placeholder="Enter Product Type"
          />
        </Form.Group>
        <Link to="/showProduct">
        <Button className="action_btn m-5" variant="primary" type="submit">
          Create Product
        </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
