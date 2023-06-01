import React from "react";
import "./footer.css";
import { FacebookOutlined, YouTube, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="bd-footer mt-5" style={{ backgroundColor: "#EEEFFB" }}>
        <div className="container py-5">
          <div className="row" style={{width:"100%"}}>
            <div className="col-lg-3" style={{width:"28rem"}}>
              <form>
                <h5
                  style={{
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontSize: "44px",
                  }}
                >
                 <Link to="/" style={{color: '#0D0E43', textDecoration: 'none'}}>
                Hekto
              </Link>
                </h5>
                <div className="d-flex  flex-sm-row w-100">
                  <label  className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address"
                    style={{
                      width: "50%",
                      height: "2.3rem",
                      borderRadius: "3px",
                      color: "#8A8FB9 !important",
                      border:"none"
                    }}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{
                      width:"8rem",
                      borderRadius: "3px",
                      backgroundColor: "#FB2E86",
                      border: "none",
                      marginBottom: "1rem",
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p style={{ marginBottom: "0", color: "#8A8FB9" }}>
                Contact Info
              </p>
              <p style={{ color: "#8A8FB9" }}>
                17 Princess Road, Londan, Greater Londan NW1 8JR, UK.
              </p>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1" style={{width:"15rem"}}>
              <h4>Categories</h4>
              <ul className="ul list-unstyled" >
                <li className="li mb-2">Laptops & Computer</li>
                <li className="li mb-2">Cameras & Photography</li>
                <li className="li mb-2">Smart Phones & Tablets</li>
                <li className="li mb-2">Video Games & Consoles</li>
                <li className="li mb-2">Waterproof Headphones</li>
              </ul>
            </div>
            <div className="col-6 col-lg-2" style={{width:"15rem"}}>
              <h4>Customer Care</h4>
              <ul className="ul list-unstyled">
                <li className="li mb-2"><Link to="/Account" className="footlinks">My Account</Link></li>
                <li className="li mb-2">Discount</li>
                <li className="li mb-2">Return</li>
                <li className="li mb-2">Orders History</li>
                <li className="li mb-2"><Link to="/Orders" className="footlinks">Orders Tracking</Link></li>
                <li className="li mb-2"><Link to="/FAQ" className="footlinks">FAQ</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2" style={{width:"15rem"}}>
              <h4 className="pagess">Pages</h4>
              <ul className="list-unstyled">
                <li className="li mb-2">Blog</li>
                <li className="li mb-2">Browse the Shop</li>
                <li className="li mb-2">Category</li>
                <li className="li mb-2">Pre-Built Pages</li>
                <li className="li mb-2">Visual Composer Elments</li>
                <li className="li mb-2">WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="footerbar row">
          <div
            className="bar1 col-md-6"
            style={{
              textAlign: "center",
              color: "#8A8FB9",
              marginTop: "0.5rem",
              fontSize: "20px",
              marginBottom:"0.5rem"
              
            }}
          >
            ©Webecy - All Rights Reserved
          </div>
          <div
            className="bar2 col-md-6"
            style={{ textAlign: "center", marginTop: "0.5rem", marginBottom:"0.5rem",fontSize: "20px"}}
          >
            <FacebookOutlined className="social-logo"/>
            <YouTube className="social-logo"/>
            <Twitter className="social-logo"/>
          </div>
        </div>        
      </footer>
    </>
  );
};

export default Footer;
