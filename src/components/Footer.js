import React from 'react';
import logo from "../images/logo.jpg"

const Footer = () => {
  return (
    <>
      <div className="footer_page">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_data mx-5 py-5 px-3">
                <div className="logo_img d-flex">
                  <img src={logo} alt="" style={{width:"50px"} } />
                  <h3>Shofy</h3>
                </div>
                <p>We are the team of designer and developer that create high quality Wordpress</p>
                <div className="icons d-flex">
                 <li><i class="fa-brands fa-facebook"></i></li>
                 <li><i class="fa-brands fa-instagram"></i></li>
                 <li><i class="fa-brands fa-linkedin"></i></li>
                 <li><i class="fa-brands fa-square-twitter"></i></li>
                </div>
                </div>
             </div>
            <div className="col-md-4">
              <div className="footer_middle mx-5 py-5 px-3 ">
                <h3>My Account</h3>
                <div className="list_item">
                  <li>Account</li>
                  <li>Order</li>
                  <li>Cart</li>
                  <li>Shipping</li>
                  <li>return</li>

                </div>
                </div>
                </div>
            <div className="col-md-4">
              <div className="footer_right mx-5 py-5 px-3">
                <h3>Pages</h3>
                <div className="list_items">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Term & Condition</li>
                </div>
                </div>
              </div>

          </div>

      </div>
    </>
  )
}

export default Footer