import {Routes,Route, Navigate} from "react-router-dom";
import Home from "./component/Page/Home";
import ProductDetails from "./component/Page/ProductDetails";
import ProductList from "./component/Page/ProductList";
import Contact from "./component/Page/Contact/Contact";
import Admin from "./component/Page/Admin";
import Footer from "./component/Footer";
import Header from "./component/Header";

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
    <Route path="Admin" element={user?< Admin/> :<Navigate to="/"/>}>Admin</Route>
  </Routes>
  </main>
  <Footer/>
</div>
  );
}

export default App;
