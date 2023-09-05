import {Routes,Route} from "react-router-dom";
import Home from "./component/Home"
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import Contact from "./component/Contact.js";
function App() {
  return (
  
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="ProductDetails" element={<ProductDetails/>}>ProductDetails</Route>
    <Route path="ProductList" element={<ProductList/>}>ProductList</Route>
    <Route path="Contact" element={<Contact/>}>Contact</Route>
  </Routes>
  );
}

export default App;
