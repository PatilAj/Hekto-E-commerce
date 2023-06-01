import React from "react";
import "./grid.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import "bootstrap/dist/css/bootstrap.css";
import image9 from "../logo/image9.png";
import image1165 from "../logo/image1165.png";
import image1164 from "../logo/image1164.png";
import image1173 from "../logo/image1173.png";
import headphone from "../logo/headphone.png";
import smartwatch1 from "../logo/smartwatch1.png";
import smartwatch2 from "../logo/smartwatch2.png";
import watch from "../logo/watch.png";
import headphone2 from "../logo/headphone2.png";
import bag from "../logo/bag.png";
import cam from "../logo/cam.png";
import Group44 from "../logo/Group44.png";
import Group45 from "../logo/Group45.png";
import image1174 from "../logo/image1174.png";
import {WindowSharp,ViewListSharp} from '@mui/icons-material';

const Grid = () => {
  return (
    <>
      <Header />
      {/* Section1-ShopGrid */}
      <section>
        <div
          className="shop"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Gridtag">Shop Grid Default</h2>
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
                    . Shop Grid Default
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Ecommerce */}
      <section>
        <div
          className="container"
          style={{ textAlign: "center", marginBottom: "7rem", width:"100%" }}
        >
          <div className="row" style={{width:"95%"}}>
            <div className="col" style={{width:"40%"}}>
              <h5
                style={{
                  color: "#151875",
                  fontSize: "22px",
                  marginLeft: "6.6rem",
                }}
              >
                Ecommerce Acceories & Fashion item{" "}
              </h5>
              <p style={{ color: "#8A8FB9", marginRight: "1.5rem" }}>
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div
              className="col"
              style={{ display: "flex", marginTop: "1.2rem",  width:"100%"}}
            >
              Per Page:
              <input
                
                type="text"
                className="form-control"
                style={{
                  width: "15%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  margin: "0 10px",
                }}
              />
              Sort By:
              <input
                
                type="text"
                className="form-control"
                placeholder="Best Match"
                style={{
                  color: "#E7E6EF",
                  width: "18%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  fontSize: "12px",
                  margin: "0 10px",
                }}
              />
              View:
              <a href="/Grid"> <WindowSharp style={{color:"151875",height: "20px",marginTop: "1px"}}/> </a>
                <a href="/ShopList"><ViewListSharp style={{color:"151875"}}/></a>
              <input
               
                type="text"
                className="form-control"
                style={{
                  width: "20%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  margin: "0 10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Card */}
      <section>
        <div className="container" style={{ justifyContent: "center" }}>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={image9} className="Gcard-img-top" alt="loading.."/>
              <div className="Gcard-body">
                <h5 className="Gcard-title">Vel elit euismod</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img
                style={{ backgroundColor: "#EBF4F3" }}
                src={image1165} alt="loading.."
                className="Gcard-img-top"
              />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Ultricies condimentum imperdiet</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={image1173} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Vitae suspendisse sed</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={bag} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Sed at fermentum</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={smartwatch1} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Sed at fermentum</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={watch} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Vestibulum magna laoreet</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={headphone} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Sollicitudin amet orci</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={image1164} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Ultrices mauris sit</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={smartwatch2} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Pellentesque condimentum ac</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45} alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={cam} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Pellentesque condimentum ac</h5>
                <img src={Group44} alt="loading.."></img>
                <p>
                  <img src={Group45}alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={headphone2} className="Gcard-img-top" alt="..." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Lectus vulputate faucibus</h5>
                <img src={Group44}alt="loading.."></img>
                <p>
                  <img src={Group45}alt="loading.."></img>
                </p>
              </div>
            </div>
            <div className="Gcard col-md-3" style={{ width: "18rem" }}>
              <img src={bag} className="Gcard-img-top"alt="loading.." />
              <div className="Gcard-body">
                <h5 className="Gcard-title">Purus risus, ut</h5>
                <img src={Group44}alt="loading.."></img>
                <p>
                  <img src={Group45}alt="loading.."></img>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section4-Tag */}
      <section>
        <div className="Gcontainer">
          <img className="Gtag" src={image1174}alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Grid;
