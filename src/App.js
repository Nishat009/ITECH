import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import AddProduct from "./Components/AddProduct/AddProduct";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import Dashboard from "./Components/Dashboard/Dashboard";
import ShowProduct from "./Components/ShowProduct/ShowProduct";
import Login from "./Components/Login/Login";
import { ProductProvider } from "./Components/ProductContext/ProductContext";
import DeleteProduct from "./Components/DeleteProduct/DeleteProduct";
import EditProduct from "./Components/EditProduct/EditProduct";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/Login/PrivateRoute";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <ProductProvider>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div>
          <Router>
            <Header />
            <Switch>
              <PrivateRoute path="/addProduct">
                <AddProduct />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/about">
                <About></About>
              </Route>

              <PrivateRoute path="/edit/:id">
                <EditProduct></EditProduct>
              </PrivateRoute>
              <PrivateRoute path="/delete/:id">
                <DeleteProduct></DeleteProduct>
              </PrivateRoute>
              <PrivateRoute path="/updateProduct">
                <UpdateProduct></UpdateProduct>
              </PrivateRoute>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>
              <PrivateRoute path="/showProduct">
                <ShowProduct></ShowProduct>
              </PrivateRoute>
              <PrivateRoute path="/">
                <Dashboard></Dashboard>
              </PrivateRoute>
            </Switch>
          </Router>
        </div>
      </UserContext.Provider>
    </ProductProvider>
  );
}

export default App;
