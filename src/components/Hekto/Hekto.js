import React from "react";
import "./hekto.css";
import Img from "../logo/Img"; 
import Dandi from "../logo/Dandi.png";
import GreenTick from  "../logo/GreenTick.png";
import RGreen from "../logo/RGreen.png";
import cart1 from "../logo/cart1.png";
import cart2 from "../logo/cart2.png";
import cart3 from "../logo/cart3.png";
import cart4 from "../logo/cart4.png";
import cart5 from "../logo/cart5.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Hekto = () => {
  return (
    <>
      <Header />
      {/* Section1-HektoDemo */}
      <section>
        <div
          className="Account"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">Hekto Demo</h2>
                <div
                  className="clo-md-6"
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    fontSize: "16px",
                  }}
                >
                  <p>Home</p>
                  <p style={{ marginLeft: "0.8rem" }}>. Pages</p>
                  <p style={{ color: "#FB2E86", marginLeft: "0.8rem" }}>
                    . Hekto Demo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Hekto */}
      <section>
        <div className="HBig">
          <div className="Hekto container">
            <div className="Hekto-child-sec1">
              <div className="child-sec1-contact">
                <div className="chid-sec1-info col-sm-4">
                  <p className="shopheading">Contact Information</p>
                </div>
                <div className="child-sec1-account col-sm-4">
                  <p className="methods">Already have an account?</p>
                  <p className="methods">Login</p>
                </div>
              </div>
              <div className="Emailhekto col-lg-6">
                <input
                  type="email"
                  className="Email-form-control"
                  id="exampleInputEmail1"
                  placeholder="Email or mobile phone number"
                />
                </div><div>
                 <img src={GreenTick} style={{marginRight:"0.5rem"}} alt="loading.."></img>
                  <label className="form-check-label">
                    Keep me up to date on news and excluive offers
                  </label>
                  </div>
              <div className="Hekto-child-sec1-shopping">
                <p className="shopheading">Shopping Address</p>
                <form className="Hekto-form row" id="Hekto-form">
                  <div className="divide">
                  <div className="Firsthekto col-sm-4">
                    <input
                      type="text"
                      name="name"
                      className="first-form-control"
                      id="name"
                      placeholder="First name (optional)"
                    />
                  </div>
                  <div className="Lasthekto col-sm-4">
                    <input
                      type="text"
                      className="Last-form-control"
                      placeholder="Last name"
                    />
                  </div>
                  </div>
                  <div className="Address">
                  <div className="Addresshekto col-lg-12">
                    <input
                      type="text"
                      className="Address-form-control"
                      id="inputAddress"
                      placeholder="Address"
                    />
                  </div>
                 
                  <div className="Addresshekto col-lg-12">
                    <input
                      type="text"
                      className="Address-form-control"
                      id="inputAddress2"
                      placeholder="Appaetnentment,suit,e.t.c (optinal)"
                    />
                  </div>
                  <div className="Addresshekto col-lg-12">
                    <input
                      type="text"
                      className="Address-form-control"
                      id="inputAddress2"
                      placeholder="City"
                    />
                  </div>
                  </div>
                  <div className="divide">
                  <div className="Countryhekto col-md-6">
                    <input
                      type="text"
                      className="Country-form-control"
                      id="inputCity"
                      placeholder="Country"
                    />
                  </div>
                  <div className="Postalhekto col-sm-6">
                    <input
                      type="text"
                      className="Postal-form-control"
                      id="inputCity"
                      placeholder="Postal Code"
                    />
                  </div>
                  </div>
                  <div className="col-sm-4" style={{width:"35%"}}>
                    <button type="submit" className="formbtn btn-primary">
                      Continue Shopping
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right */}
            <div className="Hekto-child-sec2">
              <div className="child-sec2-cart col-md">
              <img src={cart1} className="Post-img" alt="loading.."/>
                  <img src={cart2} className="Post-img" alt="loading.."/>
                  <img src={cart3} className="Post-img" alt="loading.."/>
                  <img src={cart4} className="Post-img" alt="loading.."/>
                  <img src={cart5} className="Post-img" alt="loading.."/>
              </div>
              <div className="child-sec2-price">
                <div className="child-sec2-price-totals">
                  <p >Subtotals</p>
                  <p >£219.00</p>
                </div>
                <div child-sec2-price><img src={Dandi} className="dandi" alt="loading.."></img></div>
                <div className="child-sec2-price-totals">
                  <p>Totals</p>
                  <p>£325.00</p>
                </div>
                <div child-sec2-price><img src={Dandi} className="dandi" alt="loading.."></img></div>
                <div style={{display:"flex",marginBottom:"1.5rem"}}>
                <img src={RGreen} className="RGreen" alt="loading.." ></img>
                <p className="ticktext">Shipping & taxes calculated at checkout</p>
                </div>
                <div child-sec2-price><button type="button" className="Checkoutbtn btn">Proceed To Checkout</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Hekto;
