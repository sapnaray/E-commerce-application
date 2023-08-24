import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rout from "./components/Rout";
import { BrowserRouter } from "react-router-dom";
import Productdetail from "./components/productdetail";

const App = () => {
  const[cart,setCart]=useState([])
  const[close,setClose] = useState(false)
  const[detail,setDetail]=useState([])
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
    const change = Productdetail.filter((x) => {
      return x.Category === product
    })
    setProduct(change)
  }
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  //add to cart
  
  const addtocart = (product) =>
  {
    const exist = cart.find((x) => {
      return  x.id===product.id
    })
    if(exist)
    { 
     alert("This Product is Already Added to Cart") 
    }
    else
   {
      setCart([...cart, { ...product, qty: 1 }])
      alert("Product is added to cart");
   }

  }

  return (
    <> 
      <BrowserRouter>
        <Navbar searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose } cart={cart} setCart={setCart} addtocart={addtocart} />
        <Footer/>
      </BrowserRouter>
      
    </>) 
};

export default App;
