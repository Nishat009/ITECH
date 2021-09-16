import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import firebase from "firebase";
import "firebase/auth";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        let signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          password: "",
          photo: "",
          error: "",
          success: false,
        };
        setLoggedInUser(signedOutUser);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navigation"
        variant="dark"
      >
        <Container>
          <Navbar.Brand justify className="justify-content-start" href="#home">
            SWEET ITECH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className=" menus ps-5">
              {" "}
              <Link className=" menu" to="/dashboard">
                Dashboard
              </Link>
              <Link className=" menu" to="/about">
                About
              </Link>
              <Link className=" menu" to="/addProduct">
                Add Product
              </Link>
              <Link className=" menu" to="/showProduct">
                Show Product
              </Link>
              <Link className=" menu" to="/updateProduct">
                Update Product
              </Link>
            </Nav>
            <Nav className="login-button">
               <Link to="#" className="nav-link active text-light">
                {loggedInUser.displayName || loggedInUser.email}
              </Link>
              <Link to="/login" class="btn  sign" onClick={handleSignOut}>
                {loggedInUser.email ? "Logout" : "Login"}
              </Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
