import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({searchbtn}) => {
  const [search, setSearch] = useState()
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="free">
        <p className="mt-2 text-center">
          <i className="fa-solid fa-truck"></i> FREE Shipping when shoping upto
          $1000
        </p>
      </div>
      <div className="middle-nav" style={{ borderBottom: "3px solid gray" }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid mx-3">
            <Link className="navbar-brand" to="#">
              <img src={logo} alt="" style={{ width: 50 }} />
              Shofy.
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav m-auto mb-2 mb-lg-0">
                <form class="d-flex" role="search">
                  <input
                    className="form-control me-2 "
                    type="search"
                    value={search}
                    placeholder="Search Your Product..."
                    autoComplete="off"
                    aria-label="Search"
                    onChange={(e)=>setSearch(e.target.value)}
                  />
                  <button onClick={() => searchbtn(search)} className="btn btn-outline-success" type="submit" >
                    Search
                  </button>
                </form>
              </div>
              <div className="me-3">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {isAuthenticated && (
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to=""
                      >
                        <i
                          class="fa-solid fa-users-gear fa-beat-fade"
                          style={{ color: "#739BD0" }}
                        ></i>
                        &nbsp;&nbsp;Hello {user.name}
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      <i
                        className="fa-regular fa-heart"
                        style={{ color: "#739BD0" }}
                      ></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      <i
                        className="fa-solid fa-bag-shopping"
                        style={{ color: "#739BD0" }}
                      ></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar-bottom">
        <div className="container-fluid">
          <ul className="d-flex me-auto my-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <form className="d-flex ms-auto">
              <div className="auth">
                {isAuthenticated ? (
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    <i
                      className="fa-solid fa-right-to-bracket fa-rotate-180"
                      style={{ color: "#739BD0" }}
                    ></i>
                  </button>
                ) : (
                  <button onClick={() => loginWithRedirect()}>
                    <i
                      className="fa-solid fa-right-to-bracket"
                      style={{ color: "#739BD0" }}
                    ></i>
                  </button>
                )}
              </div>
            </form>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
