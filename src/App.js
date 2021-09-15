
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Dashboard from './Components/Dashboard/Dashboard';
import ShowProduct from './Components/ShowProduct/ShowProduct';
import Login from './Components/Login/Login';
import { ProductProvider } from './Components/ProductContext/ProductContext';
import DeleteProduct from './Components/DeleteProduct/DeleteProduct';
import EditProduct from './Components/EditProduct/EditProduct';
function App() {
  return (
    <ProductProvider>
    <div>
       <Router>
        <Header/>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/edit/:id">
              <EditProduct></EditProduct>
            </Route>
          <Route path="/delete/:id">
              <DeleteProduct></DeleteProduct>
            </Route>
          <Route path="/updateProduct">
            <UpdateProduct></UpdateProduct>
          </Route>
        
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/showProduct">
           <ShowProduct></ShowProduct>
          </Route>
          
        </Switch>
      </Router>
    </div>
    </ProductProvider>
  );
}

export default App;
