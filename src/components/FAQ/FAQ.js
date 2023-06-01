import React from "react";
import "./faq.css";
import Img from "../logo/Img";
import image1174 from "../logo/image1174.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const FAQ = () => {
  return (
    <>
      <Header />
      {/* Section1-FAQ */}
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
                <h2 className="Producttag">FAQ</h2>
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
                    . Faq
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-General Info */}
      <section>
        <div className="container" style={{ marginTop: "2rem"}}>
          <div className="row" style={{display:"flex", justifyContent:"center"}}>
            <div className="col-md-6" style={{width:"33rem"}}>
              <h2 className="General">General Information</h2>
              <p className="Que">
                Eu dictumst cum at sed euismood condimentum?
              </p>
              <p className="Ans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
              <p className="Que">Magna bibendum est fermentum eros.</p>
              <p className="Ans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
              <p className="Que">Odio muskana hak eris conseekin sceleton?</p>
              <p className="Ans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
              <p className="Que">Elit id blandit sabara boi velit gua mara?</p>
              <p className="Ans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tincidunt sed tristique mollis vitae, consequat gravida
                sagittis.
              </p>
            </div>
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${Img.Rectangle116})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                paddingInline: "5rem",
                width:"33rem"
              }}
            >
              <h3 style={{ marginTop: "2rem", marginBottom: "5rem", color:"#1D3178", fontSize:"24px"}}>
                Ask a Question
              </h3>
              <form>
                <div className=" mb-3">
                  <input
                    type="email"
                    className="txt1 form-control"
                    aria-describedby="emailHelp"
                    placeholder="Your Name*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="txt1 form-control"
                    placeholder="Subject*"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="Msg form-control"
                    placeholder="Type Your Message*"
                  />
                </div>
                <button type="submit" className="Sendbtn">
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Tag */}
      <section>
        <div className="FAQcontainer">
          <img className="FAQtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
