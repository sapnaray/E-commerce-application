import React from 'react';
import Productdetail from "./productdetail";
import { useAuth0 } from "@auth0/auth0-react";

const Product = ({ product, setProduct, detail, view,close,setClose,addtocart }) => {
  
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  const filtterproduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Category === product;
    })
    setProduct(update);
    
  }

  const AllProducts = () => {
    
    setProduct(Productdetail)
  }
  
  return (
    <>
      {
        close ?
        <div className="product_detail">
        <div className="container">
          <button onClick={ ()=>setClose(false)} className="closebtn"><i class="fa-regular fa-circle-xmark"></i></button>
          {
            detail.map((curElm) =>
            {
              return (
                <div className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title}/>
                  </div>
                  <div className="detail">
                    <h4>{curElm.Category}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>A Screen Everyone Will Love:Whether your family is streamily or video chatting with friends tablet A8.. </p>
                    <h3>{curElm.Price}</h3>
                    <button>Add to Cart</button>
                  </div>


                </div>
              )
            })
          }
          
         <div className="productbox"></div>
        </div>

      </div> :null
      }
      
      
      <div className="products">
        <h2>#Products</h2>
        <p>Home .products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>Smart Watch</li>
                <li onClick={() => filtterproduct("Headphones")}>Headphones</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
              </ul>
            </div>

          </div>
          <div className="product">
            <div className="contant">
              <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3">
                {product.map((curElm) => {
                  return (
                    <>
                      <div className="col">
                        <div className="card" key={curElm.id}>
                          <div className="img_box">
                           <img src={curElm.Img} className="card-img-top" alt={ curElm.Title}/>
                            <div className="icons">
                              {
                                isAuthenticated ?
                                  
                                  <li onClick={() => addtocart(curElm)}><i class="fa-solid fa-cart-shopping"></i></li>
                                  :
                                  <li onClick={() => loginWithRedirect()}><i class="fa-solid fa-cart-shopping"></i></li>
                              }
                             <li onClick={()=>view (curElm)}><i class="fa-solid fa-eye"></i></li>
                             <li><i class="fa-solid fa-heart"></i></li>
                           </div>
                         </div>
                         <hr className="mx-3"/>
                         <div className="card_detail">
                            <p>{curElm.Category}</p>
                            <h5>{curElm.Title}</h5>
                            <h6>${curElm.Price}</h6>
                          
                         </div>
                       
                        </div>

                      </div>
                      
                    </>
                  )
              })}

              </div>

            </div>


          </div>
          

        </div>

      </div>
    </>
  )
}

export default Product