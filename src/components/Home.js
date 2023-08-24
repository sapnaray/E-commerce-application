import React from "react";
import book from "../images/social.png";
import mobile from "../images/mobile.png";
import watch from "../images/watch.png";
import headphone from "../images/headphone.png";
import tv from "../images/tv.png";
import Homeproduct from "./homeproduct";
import tablet from "../images/tablet.png";
import { Link } from "react-router-dom";

const Home = ({detail, view,close,setClose,addtocart}) => {
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
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div
            className="carousel-item active w-100"
            style={{ backgroundColor: "#b7e0dc" }}
          >
            <div className="row mx-2 py-3">
              <div className="col-md-6 my-auto">
                <img
                  src={book}
                  alt=""
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
              <div className="col-md-6 my-auto mx-auto">
                <h3>THE BEST NOTEBOOK</h3>
                <h1>
                  COLLECTION <strong>2023</strong>
                </h1>
                <Link to="/product" className="link">
                  See More &nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right fa-beat"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="carousel-item w-100"
            style={{ backgroundColor: "#b7e0dc" }}
          >
            <div className="row mx-2 py-3">
              <div className="col-md-6 my-auto">
                <img
                  src={book}
                  alt=""
                  style={{ width: "70%", height: "70%" }}
                />
              </div>
              <div className="col-md-6 my-auto mx-auto">
                <h3>THE BOOKWORM EDITORS'</h3>
                <h1>
                  Featured Books of the<strong>February</strong>
                </h1>
                <Link to="/product" className="link">
                  See More &nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right fa-beat"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <div className="box">
                <div className="img_box">
                 <img src={mobile} alt="mobile" width="100px" />
                </div>
                <div className="detail">
                  <p>23 Products</p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="box">
                <div className="img_box">
                 <img src={watch} alt="mobile" width="100px" />
                </div>
                <div className="detail">
                  <p>18 Products</p>
                </div>
              </div>
            </div>
          
           <div className="col">
              <div className="box">
                <div className="img_box">
                  <img src={headphone} alt="headphone" width="100px" />
                </div>
                <div className="detail">
                 <p>52 Products</p>
                </div>
              </div>
           </div>
          
           <div className="col">
              <div className="box">
               <div className="img_box">
                 <img src={tv} alt="fan" width="100px" />
                </div>
                <div className="detail">
                 <p>63 Products</p>
                </div>
              </div>
           </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="col">
              <div className="box">
                <div className="icon">
                  <i class="fa-solid fa-truck fa-beat-fade"></i>
                </div>
                <div className="detail">
                 <h3>Free Shipping</h3>
                 <p> Order above $1000</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <div className="icon">
                  <i class="fa-solid fa-comments-dollar fa-beat-fade"></i>
                  
                </div>
                <div className="detail">
                  <h3>Return & Refund </h3>
                  <p>Money Back Gaurenty</p>
                </div>
             </div>
            </div>
            <div className="col">
                <div className="box">
                  <div className="icon">
                    <i class="fa-solid fa-percent fa-beat-fade"></i>
                 </div>
                  <div className="detail">
                   <h3>Member Discount</h3>
                   <p>On every Order</p>
                  </div>
                </div>
             
            </div>
            <div className="col">
            <div className="box">
                  <div className="icon">
                    <i className="fa-solid fa-headphones fa-beat-fade"></i>
                 </div>
                  <div className="detail mt-auto">
                   <h3>Customer Support</h3>
                   <p>Every Time Call Support</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <p>Top Products</p>
        <div className="container">
          <div className="row gy-3">
            {
              Homeproduct.map((curElm) => {
                return (
                  <>
                    <div className="col-md-3">
                      <div className="card" key={curElm.id}>
                        <div className="img_box">
                          <img src={curElm.Img} className="card-img-top" alt={ curElm.Title}/>
                          <div className="icons">
                            <li onClick={()=>addtocart (curElm)}><i class="fa-solid fa-cart-shopping"></i></li>
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
                
              })
             }
            <div>
  
            </div>

          </div>

        </div>

      </div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="content py-3 px-5">
                <p>LATEST TECHNOLOGY ADDED</p>
                <h4>APPLE iPAD 10.2 9th Gen-2023</h4>
                <h5>$ 986</h5>
                <div className="mt-4">
                <Link to="/product" className="link">
                  See More &nbsp;&nbsp;
                  <i class="fa-solid fa-arrow-right fa-beat"></i>
                </Link>
                </div>
              </div>

            </div>
            <div className="col-md-6">
              <div className="img_box">
                <img src={tablet} alt="" style={{width:"300px",float:"right"}} />

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Home;
