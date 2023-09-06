import {Routes,Route, Navigate} from "react-router-dom";
import Home from "./component/Home"
import ProductList from "./component/ProductList";
import Contact from "./component/Contact.js";
import Header from "./component/Header";
import Admin from "./component/Admin";
import Footer from './component/Footer'
import ErrorPage from "./component/ErrorPage";
import ProductDetails from "./component/ProductDetails";
import ContactEu from "./component/ContactEu";
import ContactUs from "./component/ContactUs";
import ContactIn from "./component/ContactIn";
function App() {
  const user=false;

  return (
  
<div className="app">
  <Header/>
  <main>
  <Routes>
    <Route path="/" element={<Home/>}>Home</Route>
    <Route path="ProductDetails/:id" element={<ProductDetails/>}>ProductDetails</Route>
    <Route path="ProductList" element={<ProductList/>}>ProductList</Route>
    <Route path="Contact" element={<Contact/>}>
      <Route path="eu" element={<ContactEu/>}></Route>
      <Route path="us" element={<ContactUs/>}></Route>
      <Route path="in" element={<ContactIn/>}></Route>
      <Route path="*" element={<ContactEu/>}></Route>
     
    </Route>
    <Route path="Admin" element={user?< Admin/> :<ErrorPage/>}>Admin</Route>
    <Route path="*" element={<ErrorPage title="404"/>}>Error</Route>
  </Routes>
  </main>
  <Footer/>
</div>
  );
}

export default App;
