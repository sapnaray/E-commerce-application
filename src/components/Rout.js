import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from './Contact';
import Cart from './Cart';

const Rout = ({product, setProduct,detail,view,close,setClose,cart,setCart,addtocart}) => {
  return (
    <Routes>
     <Route exact path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
     <Route exact path="/about" element={<About />} />
     <Route exact path="/product" element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />} /> 
      <Route exact path="/cart" element={<Cart cart={cart} setCart={ setCart} />} />
     <Route exact path="/contact" element={<Contact/>}/>  
     <Route path="*" element={<Navigate to="/"/>}/>  
    </Routes>
  )
}

export default Rout