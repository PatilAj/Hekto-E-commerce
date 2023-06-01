import React from "react";
import "./notfound.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import Group123 from "../logo/Group123.png";
import image1174 from "../logo/image1174.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />
      {/* Section1-404 */}
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
                <h2 className="Producttag">404 Not Found</h2>
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
                    . 404 Not Found
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Factory */}
      <section>
        <div className="container">
            <div className="row" style={{display:"grid", justifyContent:"center", marginBottom:"1rem",width:"100%"}}>
                <div className="col-lg">
                    <img src={Group123} style={{width:"100%"}} alt="loading.."></img>
                    <p className="oops">oops! The page you requested was not found</p>
                    
                </div>
               <Link to="/" className="homebttn"><button className="homebtn">Back To Home</button></Link> 
            </div>
        </div>
      </section>
       {/* Section3-Tag */}
       <section>
        <div className="NFcontainer">
          <img className="NFtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
