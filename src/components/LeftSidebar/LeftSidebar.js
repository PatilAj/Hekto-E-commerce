import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./leftsidebar.css";
import Img from "../logo/Img";
import { WindowSharp, ViewListSharp } from "@mui/icons-material";
import Group44 from "../logo/Group44.png";
import Brand1 from "../logo/Brand1.png";
import Brand2 from "../logo/Brand2.png";
import Brand3 from "../logo/Brand3.png";
import Brand4 from "../logo/Brand4.png";
import Brand5 from "../logo/Brand5.png";
import Brand6 from "../logo/Brand6.png";
import Brand7 from "../logo/Brand7.png";
import Cart from "../logo/Cart.png";
import Heart from "../logo/Heart.png";
import MagGlass from "../logo/MagGlass.png";
import UnTick from "../logo/UnTick.png";
import Tick from "../logo/Tick.png";
import PinkTick from "../logo/PinkTick.png";
import PinkTickk from "../logo/PinkTickk.png";
import YUnTick from "../logo/YUnTick.png";
import YTick from "../logo/YTick.png";
import image1174 from "../logo/image1174.png";
import RatingSection from "../RatingSection";

const LeftSidebar = () => {
  return (
    <>
      <Header />
      {/* Section1-ShopLeftSideBar */}
      <section>
        <div
          className="Account"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3rem" }}>
              <div className="col-md-6">
                <h2 className="Producttag">Shop Left Sidebar</h2>
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
                    . Shop Left Sidebar
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
          style={{ textAlign: "center", marginBottom: "7rem", width: "100%" }}
        >
          <div className="row" style={{ width: "95%" }}>
            <div className="col" style={{ width: "40%" }}>
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
              style={{ display: "flex", marginTop: "1.2rem", width: "100%" }}
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
              <a href="/Grid">
                {" "}
                <WindowSharp
                  style={{ color: "151875", height: "20px", marginTop: "1px" }}
                />{" "}
              </a>
              <a href="/ShopList">
                <ViewListSharp style={{ color: "151875" }} />
              </a>
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
      {/* Section3-ProductBand */}
      <section>
        <div className="Brand">
          <div className="brand container">
            {/* LeftSideBar */}
            <div className="brand-sec1">
              <div className="brand-sec1-product">
                <h2 className="brandsidebar">Product Brand</h2>
                <ul className="brandlist-group">
                  <li className="brandlist-group-item">
                    <img
                      src={UnTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Coaster Furniture
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={UnTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Fusion Dot High Fashion
                  </li>
                  <li className="brandlist-group-item">
                    <img src={Tick} className="TickMark" alt="loading.."></img>
                    Unique Furnitture Restor
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={UnTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Dream Furnitture Flipping
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={UnTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Young Repurposed
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={UnTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Green DIY furniture
                  </li>
                </ul>
              </div>
              <div className="brand-sec1-discount">
                <h2 className="brandsidebar">Discount Offer</h2>
                <ul className="brandlist-group">
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    20% Cashback
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    5% Cashback Offer
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    25% Cashback Offer
                  </li>
                </ul>
              </div>
              <div className="brand-sec1-rating">
                <h2 className="brandsidebar">Rating Items</h2>
                <ul className="brandlist-group">
                  <li className="Rbrandlist-group-item">
                    <img
                      src={YUnTick}
                      className="ratingstars"
                      alt="loading.."
                    ></img>
                    <RatingSection rating="4" className="starrating" />
                    <p>(2341)</p>
                  </li>
                  <li className="Rbrandlist-group-item">
                    <img
                      src={YTick}
                      className="ratingstars"
                      alt="loading.."
                    ></img>
                    <RatingSection rating="3" className="starrating" />
                    <p>(1726)</p>
                  </li>
                  <li className="Rbrandlist-group-item">
                    <img
                      src={YUnTick}
                      className="ratingstars"
                      alt="loading.."
                    ></img>
                    <RatingSection rating="2" className="starrating" />
                    <p>(258)</p>
                  </li>
                  <li className="Rbrandlist-group-item">
                    <img
                      src={YUnTick}
                      className="ratingstars"
                      alt="loading.."
                    ></img>
                    <RatingSection rating="2" className="starrating" />
                    <p>(25)</p>
                  </li>
                </ul>
              </div>
              <div className="brand-sec1-categories">
                <h2 className="brandsidebar">Categories</h2>
                <ul className="brandlist-group">
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Prestashop
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Magento
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTickk}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Bigcommerce
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    osCommerce
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    3dcart
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Bags
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Accessories
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Jewellery
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    Watches
                  </li>
                </ul>
              </div>
              <div className="brand-sec1-price">
                <h2 className="brandsidebar">Price Filter</h2>
                <ul className="brandlist-group">
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    $0.00 - $150.00
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    $0.00 - $150.00
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTickk}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    $150.00 - $504.00
                  </li>
                  <li className="brandlist-group-item">
                    <img
                      src={PinkTick}
                      className="TickMark"
                      alt="loading.."
                    ></img>
                    $450.00 +
                  </li>
                </ul>
                <input
                  className="brandform-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="$10.00 - 20000$"
                ></input>
              </div>
              <div className="brand-sec1-filter">
                <h2 className="brandsidebar">Filter By Color</h2>
                <div className="colorset">
                  <li className="colorblue">Blue</li>
                  <li className="colororange">Orange</li>
                  <li className="coloryellow">Yellow</li>
                  <li className="colorgreen">Green</li>
                  <li className="colorpurple">Purple</li>
                  <li className="colorskyblue">Skyblue</li>
                </div>
              </div>
            </div>

            {/* RightsideBar */}
            <div className="brand-sec2">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "3rem",
                  padding: "1rem",
                }}
              >
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand1}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Dictum morbi</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <div className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </div>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand2}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Sodales sit</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand3}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Nibh varius</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand4}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Mauris quis</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand5}
                        className="Brandimg-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Morbi sagittis</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand6}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">Ultricies venenatis</h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="brandcard col-lg-8" style={{ width: "100%" }}>
                  <div className="row ">
                    <div className="col-md-4">
                      <img
                        src={Brand7}
                        className="img-fluid"
                        alt="loading"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="brandcard-body">
                        <h5 className="brandcard-title">
                          Scelerisque dignissim
                        </h5>
                        <img
                          src={Group44}
                          className="brandmore-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <small className="brandtext-muted">
                        <p className="brandprice26">$26.00</p>
                        <p className="brandprice52">$52.00</p>
                        <p className="brandrating">
                          <RatingSection rating="4" />
                        </p>
                      </small>
                      <div>
                        <p className="brandcard-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Magna in est adipiscing in phasellus non in
                          justo
                        </p>
                        <p className="brandcard-smallImg">
                          <img src={Cart} alt="loading.."></img>
                          <img src={Heart} alt="loading.."></img>
                          <img src={MagGlass} alt="loading.."></img>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section4-Tag */}
      <section>
        <div className="LSBcontainer">
          <img className="LSBtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LeftSidebar;
