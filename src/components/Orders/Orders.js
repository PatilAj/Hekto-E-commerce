import React from "react";
import "./orders.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import clock from "../logo/clock.png";
import checklist from "../logo/checklist.png";
import Vector16 from "../logo/Vector16.png";
import Ellipse70 from "../logo/Ellipse70.png";
import Vector15 from "../logo/Vector15.png";
import image1174 from "../logo/image1174.png";

const Orders = () => {
  return (
    <>
      <Header />
      {/* Section1-Orders */}
      <section>
        <div
          className="OrderCompleted"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">Order Completed</h2>
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
                    . Order Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Your Orders */}
      <section>
      <div className="clocksec">
        <div className="parent" >
          <img className="parentchild1" src={Vector16} alt="vector" />
          <img className="parentchild2" src={Ellipse70} alt="ellipse" />
          <img className="parentchild3" src={Vector15} alt="vector" />
          <h1>Your Order Is Completed!</h1>
        </div>
      </div>
      <div className="clocksecpara">
        <p>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. <br />
          You will receive an email confirmation when your order is completed.
        </p>
        <button className="bttn">Continue Shopping</button>
      </div>
     
      <div className="checklist">
        <img src={checklist} alt="list" />
      </div>
      <div>
        
        <hr className="horizontal_dotted_line" />
      </div>
      <div className="clock">
        <img src={clock} alt="clock" />
      </div>
      <div className="vertical_dotted_line">        
      </div>
      </section>
      {/* Section3 */}
      <section>
        <div className="OCcontainer col-md">
          <img className="OCtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Orders;
