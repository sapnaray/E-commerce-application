import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  // increace qty
  const incqty = (product) => 
  {
      const exsit = cart.find((x) => 
      {
          return x.id === product.id
      })
      setCart(cart.map((curElm) => 
      {
          return curElm.id === product.id ? {...exsit, qty: exsit.qty + 1} : curElm
      }))
  }
  // Dec Qty
  const decqty = (product) => 
  {
      const exsit = cart.find((x) => 
      {
          return x.id === product.id
      })
      setCart(cart.map((curElm) => 
      {
          return curElm.id === product.id ? {...exsit, qty: exsit.qty - 1} : curElm
      }))
  }
  //Remove cart product
  const removeproduct = (product) => 
  {
      const exsit = cart.find((x) => 
      {
          return x.id === product.id
      })
      if(exsit.qty > 0)
      {
          setCart(cart.filter((x) => 
          {
              return x.id !== product.id
          }))
      }
  }
  // Total price
  const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
  

  return (
    <>
        <div className="cartcontainer">
          {cart.length === 0 &&
            <div className="emptycart">
             <h2 className="empty">Cart is Empty</h2>
             <Link to="/product" className="emptycartbtn">Shop Now
            </Link>
            </div>
        }
        
         <div className="contant">
          {
            cart.map((curElm) =>
            {
              return (
               <div className="row">
                <div className="col-12 col-md-12 col-lg-12 mx-auto">
                <div className="cart_item" key={curElm.id}>
                <div className="img_box">
                  <img
                    src={curElm.Img}
                    alt={curElm.Title}
                    style={{ width: "250px", height: "250px",margin:"auto",background:"white"}}
                  />
                </div>
                <div className="detail" style={{padding:"20px 30px",marginRight:"50px",display:"flex",justifyContent:"space-between"}}>
                  <div className="info">
                  <h4 style={{textTransform:"uppercase",fontSize:"16px",color:"#9a9a9a",fontWeight:"100px",letterSpacing:"1px"}}>{curElm.Category}</h4>
                  <h3 style={{marginTop:"20px",color:"black",fontWeight:"200px",fontSize:"20px",letterSpacing:"1px"}}>{curElm.Title}</h3>
                  <p style={{color:"black",letterSpacing:"1px"}}> Price: ${curElm.Price}</p>
                  <div className="qty" style={{marginTop:"10px",display:"flex"}}>
                    <button style={{background:"none",padding:"10px 10px",outline:"none",border:"none",fontSize:"32px",color:"blueviolet",cursor:"pointer"}} className="incqty" onClick={() => incqty(curElm)}>
                      {" "}
                      +{" "}
                    </button>
                      <input style={{border:"none",outline:"none",fontSize:"22px",background:"none",color:"black",width:"50px",marginLeft:"25px"} }type="text" value={curElm.qty}></input>
                    <button style={{background:"none",padding:"10px 10px",outline:"none",border:"none",fontSize:"32px",color:"blueviolet", cursor:"pointer"}} className="decqty" onClick={() => decqty(curElm)}>
                      {" "}
                      -{" "}
                    </button>
                  </div>
                   <h4 style={{marginTop:"10px",color:"black",fontSize:"22px"}}> Sub Total: ${curElm.Price * curElm.qty} </h4>
                   </div>
                   <div className="close" style={{marginTop:"30px",marginLeft:"50px"}}>
                      <button style={{color:"black",border:"none", outline:"none", background:"none"} } onClick={() => removeproduct(curElm)}>
                    <i class="fa-solid fa-xmark" style={{fontSize:"20px",padding:"5px 5px"}}></i>
                     </button>
                  </div>
                </div>
              </div>
              </div>
              </div>
                  
            )
          })}
        </div>
        {
            cart.length > 0 &&
            <>
            <h2 className='totalprice' style={{marginLeft:"50%",marginTop:"30px",fontSize:"22px", fontWeight:"100",color:"black",textTransform:"uppercase",letterSpacing:"1px"}}>Total: $ {Totalprice}</h2>
            <button className='checkout' style={{marginLeft:"51%",marginTop:"40px",borderRadius:"5px",fontSize:"15px",padding:"10px 20px",cursor:"pointer",border:"none",outline:"none",background:"#6d44d5",color:"white"}}>Checkout</button>
            </>
        }
      </div>
    </>
  );
};

export default Cart;
