import {Routes,Route, Navigate} from "react-router-dom";
import Home from "./component/Home"
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import Contact from "./component/Contact.js";
import Header from "./component/Header";
import Admin from "./component/Admin";
import Footer from './component/Footer'
function App() {
  const user=true;

  return (
  
<div className="app">
  <Header/>
  <main>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="ProductDetails/:id" element={<ProductDetails/>}>ProductDetails</Route>
    <Route path="ProductList" element={<ProductList/>}>ProductList</Route>
    <Route path="Contact" element={<Contact/>}>Contact</Route>
    <Route path="Admin" element={user?< Admin/> :<Navigate to="/  "/>}>Admin</Route>
  </Routes>
  </main>
  <Footer/>
</div>
  );
}

export default App;
