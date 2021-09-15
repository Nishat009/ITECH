import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import { productContext } from "../productContext/productContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
// import "./Delete.css";
import { ProductContext } from "../ProductContext/ProductContext";

const DeleteProduct = () => {
  const [products, setProducts] = useContext(ProductContext); 
  console.log(products)
  const { id } = useParams();

  const deleteProduct = (id) => {
    const product = products.filter((product) => product.id != id);
    setProducts([...product]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/showProduct">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deleteProduct(id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default DeleteProduct;