import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Header from "./Components/Home/Header/Header";
import Footer from "./Components/Home/Footer/Footer";
import AddProduct from "./Components/ProductManagement/AddProduct/AddProduct";
import ManageInventory from "./Components/ProductManagement/ManageInventory/ManageInventory";
import Inventory from "./Components/ProductManagement/Inventory/Inventory";
import UpdateProduct from "./Components/ProductManagement/UpdateProduct/UpdateProduct";
import SignIn from "./Components/Authentication/SignIn/SignIn";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import RequireAuth from "./Components/Authentication/RequireAuth/RequireAuth";
import UserProducts from "./Components/ProductManagement/UserProducts/UserProducts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <UpdateProduct />
            </RequireAuth>
          }
        />
        <Route path="/manageInventory" element={<ManageInventory />} />
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
        <Route
          path="/userproducts"
          element={
            <RequireAuth>
              <UserProducts />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
