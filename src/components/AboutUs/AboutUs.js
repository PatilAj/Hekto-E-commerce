import React from "react";
import "./about.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import Group73 from "../logo/Group73.png";
import hours247 from "../logo/hours247.png";
import freedelivery from "../logo/freedelivery.png";
import premiumquality from "../logo/premiumquality.png";
import cashback from "../logo/cashback.png";
import Group200 from "../logo/Group200.png"; 
import Group89 from "../logo/Group89.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      {/* Section1-About Us */}
      <section>
        <div
          className="About"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">AboutUs</h2>
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
                    . AboutUs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Know About */}
      <section>
        <div className="container" style={{ marginTop: "5rem", marginBottom:"8rem"}}>
          <div className="row">
            <div className="col-md-6"
              style={{ display: "grid", justifyContent: "right" }}
            >
              <img
                src={Group73}
                alt="loading.."
                style={{ width: "550px", height: "400px" }}
              ></img>
            </div>
            <div
              className="col-md-6"
              style={{ display: "initial", marginTop: "3rem" }}
            >
              <h2 className="heading1">
                Know About Our Ecomerce Business, History
              </h2>
              <p className="loremtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
              <button className="contactus">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Our features */}
      <section>
        <div
          className="ourproduct"
          style={{ marginTop: "4rem", marginBottom: "1rem", color: "#000000" }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "6rem",
            }}
          >
            Our Features
          </h3>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "8rem ",
            }}
          >
            <div class="ourcard col-md-4" style={{ width: "15rem" }}>
              <img src={freedelivery} class="ourcard-img-top" alt="..." />
              <div class="ourcard-body">
                <h5 class="ourcard-title">24/7 Support</h5>
                <p class="ourcard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.{" "}
                </p>
              </div>
            </div>
            <div class="Ourcard col-md-4" style={{ width: "15rem" }}>
              <img src={premiumquality} class="ourcard-img-top" alt="..." />
              <div class="ourcard-body">
                <h5 class="ourcard-title">24/7 Support</h5>
                <p class="ourcard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.{" "}
                </p>
              </div>
            </div>
            <div class="ourcard col-md-4" style={{ width: "15rem" }}>
              <img src={cashback} class="ourcard-img-top" alt="..." />
              <div class="ourcard-body">
                <h5 class="ourcard-title">24/7 Support</h5>
                <p class="ourcard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.{" "}
                </p>
              </div>
            </div>
            <div class="ourcard col-md-4" style={{ width: "15rem" }}>
              <img src={hours247} class="ourcard-img-top" alt="..." />
              <div class="ourcard-body">
                <h5 class="ourcard-title">24/7 Support</h5>
                <p class="ourcard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section4-Client */}
      <section>
        <div
          className="about"
          style={{
            backgroundImage: `url(${Img.BgRectangle1})`,
            marginTop:"10rem",
            marginBottom:"15rem"
          }}
        >
          <div className="container">
            <div className="row" style={{ justifyContent: "center", padding:"0rem"}}>
              <div
                className="col-md-6"
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <h2 className="heading2">Our Client Say!</h2>
                <div className="col-md-6" style={{ display: "inline" }}>
                  <img src={Group200} style={{padding:"1.5rem"}} alt="loading.."></img>
                  <h3 className="heading3">Selina Gomez</h3>
                  <p style={{color:"#8A8FB9", fontSize:"10px", marginTop:"-0.4rem"}}>Ceo At Webecy Digital</p>
                  <p style={{color:"#8A8FB9", fontSize:"16px", lineHeight:"26px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                    duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                    vitae a enim nunc, sed sapien egestas ac nam. Tristique
                    ultrices dolor aliquam lacus volutpat praesent.
                  </p>
                  <img src={Group89} alt="loading.."></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
