import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Home/Header/Header";
import Footer from "./Components/Home/Footer/Footer";
import AddProduct from "./Components/ProductManagement/AddProduct/AddProduct";
import Orders from "./Components/ProductManagement/Orders/Orders";
import ManageInventory from "./Components/ProductManagement/ManageInventory/ManageInventory";
import Inventory from "./Components/ProductManagement/Inventory/Inventory";
import UpdateProduct from "./Components/ProductManagement/UpdateProduct/UpdateProduct";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:id" element={<UpdateProduct />} />
        <Route path="/manageInventory" element={<ManageInventory />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
