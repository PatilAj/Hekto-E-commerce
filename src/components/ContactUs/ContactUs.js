import React from "react";
import "./contact.css";
import Img from "../logo/Img";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import EllipseBlue from "../logo/EllipseBlue.png";
import EllipsePink from "../logo/EllipsePink.png";
import EllipseGreen from "../logo/EllipseGreen.png";
import EllipseOrange from "../logo/EllipseOrange.png";
import Group94 from "../logo/Group94.png";
import Group124 from "../logo/Group124.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      {/* Section1-Contact Us */}
      <section>
        <div
          className="ContactUs"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">Contact Us</h2>
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
                    . Contact Us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Info */}
      <section>
        <div className="container" style={{ marginTop: "3rem", width:"85%"}}>
          <div className="row" style={{display:"flex", justifyContent:"center"}}>
            <div className="col-md-6"
              style={{
                display: "grid",
                justifyContent: "right",
                width: "38rem",
              }}
            >
              <h2 className="info">Information About us</h2>
              <p className="lorelText"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <img className="group94" src={Group94}alt="loading.."></img>
            </div>

            <div className="col-md-6" style={{}}>
              <h2 className="info">Contact Way</h2>
              <div style={{ display: "flex", margin: "0 0px 20px" }}>
                <img className="Elpse" src={EllipseBlue} alt="loading.."></img>
                <p className="tel-email" style={{ marginRight: "5rem" }}>
                  Tel: 877-67-88-99
                  <br />
                  E-Mail: shop@store.com
                </p>
                <img className="Elpse" src={EllipsePink} alt="loading.."></img>
                <p className="tel-email">
                  Support Forum <br />
                  For over 24hr
                </p>
              </div>
              <div style={{ display: "flex", height: "45px", width:"100%"}}>
                <img className="Elpse" src={EllipseOrange} alt="loading.."></img>
                <p className="tel-email" style={{ marginRight: "5rem" }}>
                  T20 Margaret st, London <br />
                  Great britain, 3NM98-LK
                </p>
                <img className="Elpse" src={EllipseGreen} alt="loading.."></img>
                <p className="tel-email">
                  Free standard shipping
                  <br />
                  on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section3-GetInTouch */}
      <section>
      <div className="container" style={{ marginTop: "7rem", marginBottom:"7rem", width:"85%"}}>
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
          <div className="col-md-6" style={{width:"40rem"}}>
          <h2 className="info" style={{ marginBottom: "2rem" }}>Get In Touch</h2>
            <p className="lorelText"style={{ marginBottom: "2rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices <br/> tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form className="row g-3" style={{width:"100%"}}>
              <div className="col-md-6" style={{ width: "45%" }}>
                <input
                  type="name"
                  className="form-control-id"
                  placeholder="Your Name*"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control-id"
                  placeholder="Your E-mail"
                />
              </div>
              <div className="col-12" style={{width:"90%"}}>
                <input
                  type="text"
                  className="form-control-subject"
                  id="inputAddress"
                  placeholder="Subject*"
                />
              </div>
              <div className="col-12" style={{width:"90%"}}>
               
                    <textarea className="form-control-text" placeholder="Write your comment*" id="floatingTextarea"></textarea>
  
              </div>
              <div className="col-12">
                <button className="mail">Send Mail</button>
              </div>
            </form>
          </div>
          <div className="rounded col-md-4" style={{width:"50%"}}>
              <img src={Group124} className="rounded" alt="..."  style={{width:"100%", height:"100%"}}/>
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
