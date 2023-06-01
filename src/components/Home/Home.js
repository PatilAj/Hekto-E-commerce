import React from "react";
import "./home.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Done from "@mui/icons-material/Done";
import light from "../logo/light.png";
import sofapromotional from "../logo/sofapromotional.png";
import Chair1 from "../logo/Chair1.png";
import Chair2 from "../logo/Chair2.png";
import Chair3 from "../logo/Chair3.png";
import Chair4 from "../logo/Chair4.png";
import LChair1 from "../logo/LChair1.png";
import LChair2 from "../logo/LChair2.png";
import LChair3 from "../logo/LChair3.png";
import LChair4 from "../logo/LChair4.png";
import LChair5 from "../logo/LChair5.png";
import LChair6 from "../logo/LChair6.png";
import Group141 from "../logo/Group141.png";
import Group169 from "../logo/Group169.png";
import hours247 from "../logo/hours247.png";
import SaleTag from "../logo/SaleTag.png";
import freedelivery from "../logo/freedelivery.png";
import premiumquality from "../logo/premiumquality.png";
import cashback from "../logo/cashback.png";
import Group153 from "../logo/Group153.png";
import Tchair1 from "../logo/Tchair1.png";
import Tchair2 from "../logo/Tchair2.png";
import Tchair3 from "../logo/Tchair3.png";
import Tchair4 from "../logo/Tchair4.png";
import Group23 from "../logo/Group23.png";
import image1161 from "../logo/image1161.png";
import image1162 from "../logo/image1162.png";
import Tprodlist1 from "../logo/Tprodlist1.png";
import Tprodlist2 from "../logo/Tprodlist2.png";
import Tprodlist3 from "../logo/Tprodlist3.png";
import Group154 from "../logo/Group154.png";
import image1174 from "../logo/image1174.png";
import dot from "../logo/dot.png";
import Deco1 from "../logo/Deco1.png";
import Deco2 from "../logo/Deco2.png";
import Deco3 from "../logo/Deco3.png";
import Group2151 from "../logo/Group2151.png";
import Group2152 from "../logo/Group2152.png";
import Calendar from "../logo/Calendar.png";
import Date from "../logo/Date.png";
import Img from "../logo/Img";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    {
      image1: Chair1,
      image2: Group141,
    },
    {
      image1: Chair2,
      image2: Group141,
    },
    {
      image1: Chair4,
      image2: Group141,
    },
    {
      image1: Chair3,
      image2: Group141,
    },
  ];
  const latestProdcut = [
    {
      image3:LChair1,
      image4:SaleTag,
    },
    {
      image3:LChair2,
      image4:SaleTag,
    },
    {
      image3:LChair3,
      image4:SaleTag,
    },
    {
      image3:LChair4,
      image4:SaleTag,
    },
    {
      image3:LChair5,
      image4:SaleTag,
    },
    {
      image3:LChair6,
      image4:SaleTag,
    },
  ]
  return (
    <>
      <div className="maindiv">
        <Header />
        {/* Section1-Slider */}
        <section>
          <div className="sliderContainer" style={{ width: "100%" }}>
            <div className="slider" style={{ width: "100%" }}>
              <AwesomeSlider>
                <div
                  className="first"
                  style={{
                    backgroundImage: `url(${Img.promotion})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div style={{ marginTop: "-15rem" }}>
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      src={light}
                      alt="loading.."
                    />
                  </div>
                  <div style={{ height: "60%" }}>
                    <p style={{ color: "#FB2E86", fontSize: "16px" }}>
                      Best Furniture For Your Castle...
                    </p>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <p style={{ fontSize: "16px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <Link to="/ShopList" className="shopbtn">
                      <button className="shopbtn">Shop Now</button>
                    </Link>
                  </div>
                  <div>
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={sofapromotional}
                      alt="loading"
                    />
                  </div>
                </div>
                <div
                  className="first"
                  style={{
                    backgroundImage: `url(${Img.promotion})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "300px",
                        width: "300px",
                        marginTop: "-160px",
                      }}
                      src={light}
                      alt="loading.."
                    />
                  </div>
                  <div>
                    <p style={{ color: "#FB2E86", fontSize: "16px" }}>
                      Best Furniture For Your Castle...
                    </p>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <p style={{ fontSize: "16px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <button className="shopbtn">Shop Now</button>
                  </div>
                  <div>
                    <img
                      style={{ height: "400px", width: "400px" }}
                      src={Chair1}
                      alt="loading.."
                    />
                  </div>
                </div>
                <div
                  className="first"
                  style={{
                    backgroundImage: `url(${Img.promotion})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div>
                    <img
                      style={{
                        height: "300px",
                        width: "300px",
                        marginTop: "-160px",
                      }}
                      src={light}
                      alt="loading.."
                    />
                  </div>
                  <div>
                    <p style={{ color: "#FB2E86", fontSize: "16px" }}>
                      Best Furniture For Your Castle...
                    </p>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <p style={{ fontSize: "16px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
                    <button className="shopbtn">Shop Now</button>
                  </div>
                  <div>
                    <img
                      style={{ height: "400px", width: "400px" }}
                      src={Chair2}
                      alt="loading.."
                    />
                  </div>
                </div>
              </AwesomeSlider>
            </div>
          </div>
        </section>
        {/* Section2-Feature Products */}
        <section>
          <div
            className="feature"
            style={{
              marginTop: "3rem",
              marginBottom: "4rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Feature Products
            </h3>
          </div>
          <div className="container">
            <div
              className="row"
              style={{
                justifyContent: "center",
                display: "flex",
                marginBottom: "6rem",
              }}
            >
              {products.map((f) => (
                <div className="Fcard" style={{ width: "270px" }}>
                  <div className="feature-icon">
                    <div className="top-icons">
                      <ShoppingCartOutlined />
                      <FavoriteBorderOutlined />
                      <ZoomInOutlined />
                    </div>
                  </div>
                  <div className="Chairs">
                    <img src={f.image1} className="chair-img" alt="loading.." />
                  </div>
                  <div className="View-btn">
                    <button className="vd-btn">View Details</button>
                  </div>
                  <div className="Fcard-body">
                    <div className="body-start">
                      <h2 className="Fcard-title">Cantilever</h2>
                    </div>
                    <img src={f.image2} alt="loading"></img>
                    <div className="body-end">
                      <p className="Fcard-text">Code - Y523201</p>
                      <p className="Fcard-text">$42.00</p>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "2rem",
                }}
              >
                <img src={Group169} alt="loading"></img>
              </div>
            </div>
          </div>
        </section>
        {/* Section3-Latest Products */}
        <section>
          <div
            className="latest"
            style={{
              marginTop: "3rem",
              marginBottom: "1rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Latest Products
            </h3>
          </div>
          <div className="container">
            <div
              className="types row"
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "0 20%",
                marginTop: "3rem",
                marginBottom: "2rem ",
              }}
            >
              <p
                className="moreR col-md-2"
                style={{ color: "#fb2e86", textDecoration: "underline" }}
              >
                New Arrivals
              </p>
              <p className="LPtag col-md-2">Best Seller</p>
              <p className="LPtag col-md-2">Featured</p>
              <p className="LPtag col-md-2">Special Offer</p>
            </div>
            <div
              className="row"
              style={{
                justifyItems: "center",
                justifyContent: "space-evenly",
                marginBottom: "2.5rem",
              }}
            >
              {latestProdcut.map((l) => (
              <div
                className="Categories-card col-lg-2"
                style={{ width: "360px" }}
              >
                <div className="chair-list">
                  <img className="sales" src={l.image4} alt="loading"></img>
                  <div className="icons-sales">
                    <ShoppingCartOutlined />
                    <FavoriteBorderOutlined />
                    <ZoomInOutlined />
                  </div>
                  <img src={l.image3} className="Lcard-img-top" alt="loading" />
                </div>
                <div className="lcard-body">
                  <h5 className="lcard-title">Comfort Handy Craft</h5>
                  <p>$42.00</p>
                  <p className="Rprice">$65.00</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section4-Shopex */}
        <section>
          <div
            className="shopex"
            style={{
              marginTop: "3rem",
              marginBottom: "1rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "6rem",
              }}
            >
              What Shopex Offer!
            </h3>
          </div>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem ",
              }}
            >
              <div className="shopexcard col-md-4" style={{ width: "17rem" }}>
                <img
                  src={freedelivery}
                  className="shopexcard-img-top"
                  alt="loading"
                />
                <div className="shopexcard-body">
                  <h5 className="shopexcard-title">24/7 Support</h5>
                  <p className="shopexcard-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="shopexcard col-md-4" style={{ width: "17rem" }}>
                <img
                  src={premiumquality}
                  className="shopexcard-img-top"
                  alt="loading"
                />
                <div className="shopexcard-body">
                  <h5 className="shopexcard-title">24/7 Support</h5>
                  <p className="shopexcard-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="shopexcard col-md-4" style={{ width: "17rem" }}>
                <img
                  src={cashback}
                  className="shopexcard-img-top"
                  alt="loading"
                />
                <div className="shopexcard-body">
                  <h5 className="shopexcard-title">24/7 Support</h5>
                  <p className="shopexcard-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
              <div className="shopexcard col-md-4" style={{ width: "17rem" }}>
                <img
                  src={hours247}
                  className="shopexcard-img-top"
                  alt="loading"
                />
                <div className="shopexcard-body">
                  <h5 className="shopexcard-title">24/7 Support</h5>
                  <p className="shopexcard-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section5-Poster*/}
        <section>
          <div
            className="sectoin5"
            style={{
              backgroundImage: `url(${Img.sectionPromotion})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="row">
              <div
                className="col-md-6"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <img
                  style={{ height: "90%", justifyContent: "center" }}
                  src={Group153}
                  alt="loading"
                ></img>
              </div>
              <div
                className="col-md-6"
                style={{ marginTop: "5rem", width: "30rem" }}
              >
                <h3
                  style={{
                    color: "#151875",
                    fontSize: "35px",
                    fontWeight: "bold",
                    textAlign: "initial",
                  }}
                >
                  Unique Features Of leatest & Trending Poducts
                </h3>
                <li className="point">
                  All frames constructed with hardwood solids and laminates
                </li>
                <li className="point">
                  Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails
                </li>
                <li className="point">
                  Arms, backs and seats are structurally reinforced
                </li>
                <div style={{ display: "flex", marginTop: "2rem" }}>
                  <button className="shopbtnn">Add To Cart</button>
                  <div
                    style={{
                      marginLeft: "1.4rem",
                      color: "#151875",
                      fontSize: "14px",
                    }}
                  >
                    <p className="details">B&B Italian Sofa </p>
                    <p style={{ marginTop: "-1.2rem" }}>$32.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section6- Trending Products */}
        <section>
          <div
            className="trending"
            style={{
              marginTop: "5rem",
              marginBottom: "1rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "6rem",
              }}
            >
              Trending Products
            </h3>
          </div>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem ",
              }}
            >
              <div className="Tcard col-md-4" style={{ width: "15rem" }}>
                <img src={Tchair1} className="Tcard-img-top" alt="loading" />
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Cantilever chair</h5>
                  <p>
                    <img src={Group23} alt="loading"></img>
                  </p>
                </div>
              </div>
              <div className="Tcard col-md-4" style={{ width: "15rem" }}>
                <img src={Tchair2} className="Tcard-img-top" alt="loading" />
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Cantilever chair</h5>
                  <p>
                    <img src={Group23} alt="loading"></img>
                  </p>
                </div>
              </div>
              <div className="Tcard col-md-4" style={{ width: "15rem" }}>
                <img src={Tchair3} className="Tcard-img-top" alt="loading" />
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Cantilever chair</h5>
                  <p>
                    <img src={Group23} alt="loading"></img>
                  </p>
                </div>
              </div>
              <div className="Tcard col-md-4" style={{ width: "15rem" }}>
                <img src={Tchair4} className="Tcard-img-top" alt="loading" />
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Cantilever chair</h5>
                  <p>
                    <img src={Group23} alt="loading"></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section7-Banner */}
        <section>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5rem ",
              }}
            >
              <div
                className="Bcard col-md-4"
                style={{
                  width: "22rem",
                  height: "15rem",
                  backgroundColor: "#FFF6FB",
                }}
              >
                <div className="Bcard-body">
                  <h5 className="Bcard-title">23% off in all products</h5>
                  <p style={{ color: "#FB2E86", textDecoration: "underline" }}>
                    Shop Now
                  </p>
                </div>
                <img
                  src={image1162}
                  className="Bcard-img-top"
                  alt="loading"
                  style={{ marginTop: "-3.5rem" }}
                />
              </div>
              <div
                className="Bcard col-md-4"
                style={{
                  width: "22rem",
                  height: "15rem",
                  backgroundColor: "#EEEFFB",
                }}
              >
                <div className="Bcard-body">
                  <h5 className="Bcard-title">23% off in all products</h5>
                  <p style={{ color: "#FB2E86", textDecoration: "underline" }}>
                    Shop Now
                  </p>
                </div>
                <img
                  src={image1161}
                  className="Bcard-img-top"
                  alt="loading"
                  style={{ marginTop: "-1.2rem", width: "18rem" }}
                />
              </div>
              <div
                className="BTcard col-md-4"
                style={{ width: "22rem", height: "15rem" }}
              >
                <div className="TBcard-body">
                  <img
                    src={Tprodlist1}
                    className="TBcard-img-top"
                    alt="loading"
                    style={{ width: "16rem" }}
                  />
                </div>
                <div className="TBcard-body">
                  <img
                    src={Tprodlist2}
                    className="TBcard-img-top"
                    alt="loading"
                    style={{ width: "16rem" }}
                  />
                </div>
                <div className="TBcard-body">
                  <img
                    src={Tprodlist3}
                    className="TBcard-img-top"
                    alt="loading"
                    style={{ width: "16rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section8-Discount Item */}
        <section>
          <div
            className="Discount-Item"
            style={{
              marginTop: "3rem",
              marginBottom: "1rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Discount Item
            </h3>
          </div>
          <div className="container">
            <div
              className="discount row"
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "0 15%",
                marginTop: "4rem",
              }}
            >
              <p
                className="col-md-2"
                style={{ color: "#fb2e86", textDecoration: "underline" }}
              >
                Wood Chair
              </p>
              <p className="discounttag col-md-2">Plastic Chair</p>
              <p className="discounttag col-md-2">Sofa Collection</p>
            </div>
            <div className="row">
              <div
                className="col-md-6"
                style={{
                  marginTop: "4rem",
                  marginLeft: "2rem",
                  width: "38rem",
                }}
              >
                <h3
                  style={{
                    color: "#151875",
                    fontSize: "35px",
                    fontWeight: "bold",
                    textAlign: "initial",
                  }}
                >
                  20% Discount Of All Products
                </h3>
                <p
                  style={{
                    color: "#FB2E86",
                    fontSize: "21px",
                    marginTop: "2rem",
                  }}
                >
                  Eams Sofa Compact
                </p>
                <p
                  style={{ color: "#B7BACB", fontSize: "17px", width: "32rem" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </p>
                <div style={{ display: "flex", fontSize: "16px" }}>
                  <li className="points">
                    <Done />
                    Material expose like metals
                  </li>
                  <li className="points" style={{ marginLeft: "5rem" }}>
                    <Done />
                    Clear lines and geomatric figures
                  </li>
                </div>
                <div style={{ display: "flex", fontSize: "16px" }}>
                  <li className="points">
                    <Done />
                    Simple neutral colors
                  </li>
                  <li className="points" style={{ marginLeft: "7.6rem" }}>
                    <Done />
                    Material expose like metals
                  </li>
                </div>
                <div style={{ display: "flex", marginTop: "2rem" }}>
                  <button className="shopbtnn">Shop Now</button>
                </div>
              </div>
              <div className="col-md-6" style={{ display: "flex" }}>
                <img
                  style={{
                    marginTop: "-1.5rem",
                    height: "100%",
                    width: "620px",
                  }}
                  src={Group154}
                  alt="loading"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* Section9-TopCategoires */}
        <section>
          <div
            className="topcatrgories"
            style={{
              marginTop: "1rem",
              marginBottom: "5rem",
              color: "#1A0B5B",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Top Categories
            </h3>
          </div>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "7rem ",
              }}
            >
              <div className="TCcard col-md-4" style={{ width: "15rem" }}>
                <div
                  className="circle"
                  style={{ backgroundImage: `url(${Img.toppurple})` }}
                >
                  {/* <img src={top1} className="Topcard-img-top" /> */}
                  <div
                    className="circle-img"
                    style={{
                      backgroundImage: `url(${Img.topcategories})`,
                      marginBottom: "0.6rem",
                      height: "16.5rem",
                      width: "16rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginLeft: "0.5rem",
                    }}
                  >
                    <div
                      className="toppurple"
                      style={{
                        backgroundImage: `url(${Img.top1})`,
                        marginBottom:"2rem",
                        height: "8rem",
                        width: "8rem",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <button className="topview" style={{marginTop:"7.8rem", marginLeft:"1rem", color:"white", backgroundColor:"#08D15F"}}>view shop</button>
                    </div>
                    
                  </div>
                  
                </div>
                
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Mini LCW Chair</h5>
                  <p>$56.00</p>
                </div>
              </div>
              <div className="TCcard col-md-4" style={{ width: "15rem" }}>
                <div
                  className="circle"
                  style={{ backgroundImage: `url(${Img.topcategories})` }}
                >
                  {/* <img src={top2} className="Topcard-img-top" /> */}
                  <div
                    className="circle-img"
                    style={{ backgroundImage: `url(${Img.top2})` }}
                  ></div>
                </div>
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Mini LCW Chair</h5>
                  <p>$56.00</p>
                </div>
              </div>
              <div className="TCcard col-md-4" style={{ width: "15rem" }}>
                <div
                  className="circle"
                  style={{ backgroundImage: `url(${Img.topcategories})` }}
                >
                  {/* <img src={top3} className="Topcard-img-top" /> */}
                  <div
                    className="circle-img"
                    style={{ backgroundImage: `url(${Img.top3})` }}
                  ></div>
                </div>
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Mini LCW Chair</h5>
                  <p>$56.00</p>
                </div>
              </div>
              <div className="TCcard col-md-4" style={{ width: "15rem" }}>
                <div
                  className="circle"
                  style={{ backgroundImage: `url(${Img.topcategories})` }}
                >
                  {/* <img src={top1} className="Topcard-img-top" /> */}
                  <div
                    className="circle-img"
                    style={{ backgroundImage: `url(${Img.top1})` }}
                  ></div>
                </div>
                <div className="Tcard-body">
                  <h5 className="Tcard-title">Mini LCW Chair</h5>
                  <p>$56.00</p>
                </div>
              </div>
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  marginTop: "1.5rem",
                }}
              >
                <img src={dot} alt="loading"></img>
              </div>
            </div>
          </div>
        </section>
        {/* Section10-Banner2 */}
        <section>
          <div
            className="top "
            style={{
              backgroundImage: `url(${Img.Rectangle102})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="container">
              <div
                className="row"
                style={{ justifyContent: "center", padding: "5.2rem" }}
              >
                <div
                  className="col-md-6"
                  style={{ justifyContent: "center", textAlign: "center" }}
                >
                  <h2 className="newsletter">
                    Get Latest Update By Subscribe Our Newsletter
                  </h2>
                  <div className="col-md-6" style={{ display: "inline" }}>
                    <button className="topbtn">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section11-Tag */}
        <section>
          <div className="Hcontainer">
            <img className="Htag" src={image1174} alt="loading"></img>
          </div>
        </section>
        {/* Section12-Blog */}
        <section>
          <div
            className="blog"
            style={{ marginBottom: "1rem", color: "#1A0B5B" }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "5rem",
              }}
            >
              Latest Blog
            </h3>
          </div>
          <div className="container">
            <div
              className="row"
              style={{ justifyContent: "center", marginBottom: "7rem" }}
            >
              <div
                className="blcard col-md-4"
                style={{ width: "20rem", height: "26rem" }}
              >
                <img src={Deco1} className="blcard-img-top" alt="loading" />
                <div className="blcard-body">
                  <img
                    src={Group2151}
                    style={{ margin: "0 24px" }}
                    alt="loading"
                  ></img>
                  <img src={Calendar} alt="loading"></img>
                  <img src={Date} alt="loading"></img>
                  <div className="Latest-body">
                    <h5 className="blcard-title">
                      Top esssential Trends in 2021
                    </h5>
                    <p className="blcard-text">
                      More off this less hello samlande lied much over tightly
                      circa horse taped mightly
                    </p>
                    <p className="Rmore">Read More</p>
                  </div>
                </div>
              </div>
              <div
                className="blcard col-md-4"
                style={{ width: "20rem", height: "26rem" }}
              >
                <img src={Deco2} className="blcard-img-top" alt="loading" />
                <div className="blcard-body">
                  <img
                    src={Group2152}
                    style={{ margin: "0 24px" }}
                    alt="loading"
                  ></img>
                  <img src={Calendar} alt="loading"></img>
                  <img src={Date} alt="loading"></img>
                  <h5 className="blcard-title" style={{ color: "#FB2E86" }}>
                    Top esssential Trends in 2021
                  </h5>
                  <p className="blcard-text">
                    More off this less hello samlande lied much over tightly
                    circa horse taped mightly
                  </p>
                  <p className="moreR">Read More</p>
                </div>
              </div>
              <div
                className="blcard col-md-4"
                style={{ width: "20rem", height: "26rem" }}
              >
                <img src={Deco3} className="blcard-img-top" alt="loading" />
                <div className="blcard-body">
                  <img
                    src={Group2151}
                    style={{ margin: "0 24px" }}
                    alt="loading"
                  ></img>
                  <img src={Calendar} alt="loading"></img>
                  <img src={Date} alt="loading"></img>
                  <h5 className="blcard-title">
                    Top esssential Trends in 2021
                  </h5>
                  <p className="blcard-text">
                    More off this less hello samlande lied much over tightly
                    circa horse taped mightly
                  </p>
                  <p className="Rmore">Read More</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
