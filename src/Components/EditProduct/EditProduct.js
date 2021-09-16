import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/ProductContext";
 import "./Edit.css";
import { useState } from "react";

const EditProduct = () => {
  const [Products, setProduct] = useContext(ProductContext);
  const { id } = useParams();
  const product = Products.filter((product) => product.id == id);

  const [name, setName] = useState(product[0].name);
  const [price, setPrice] = useState(product[0].price);
  const [profitPercentage, setProfitPercentage] = useState(product[0].profitPercentage);
  const [productType, setProductType] = useState(product[0].productType);
  

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    product[0].name = edited_name;
  };

  const editPrice= (e) => {
    setPrice(e.target.value);
    const edited_price = price;
    product[0].price = edited_price;
  };

  const editProfit = (e) => {
    setProfitPercentage(e.target.value);
    const edited_profit = profitPercentage;
    product[0].profitPercentage = edited_profit;
  };
  const editType = (e) => {
    setProductType(e.target.value);
    const edited_type = productType;
    product[0].productType = edited_type;
  };

  const editProduct = (e) => {
    e.preventDefault();
    setProduct([...Products]);
  };

  return (
    <div className="container edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {product[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={product[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
             value={price}
            onChange={editPrice}
            placeholder={product[0].price}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Profit Percentage</Form.Label>
          <Form.Control
            type="number"
            name="profitPercentage"
             value={profitPercentage}
            onChange={editProfit}
            placeholder={product[0].profitPercentage}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Type</Form.Label>
          <Form.Control
            type="text"
            name="productType"
            // value={salary}
            onChange={editType}
            placeholder={product[0].productType}
          />
        </Form.Group>
        <Link to="/updateProduct">
          <Button className="mt-5" onSubmit={()=>editProduct} variant="primary" type="submit">
            Edit Product
          </Button>
          
        </Link>
      </Form>
    </div>
  );
};

export default EditProduct;